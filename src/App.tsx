import React, { Fragment, useState } from "react";

import { createGlobalStyle } from "styled-components";

import TransactionAddController from "./components/Transaction/TransactionAddController/TransactionAddController";
import TransactionGroup from "./components/Transaction/TransactionGroup/TransactionGroup";
import AddButton from "./components/UI/AddButton/AddButton";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header/Header";
import Wrapper from "./components/UI/TransactionsWrapper";
import darkTheme from "./Theme/darkTheme";
import Theme from "./Theme/Theme";
import Transaction, { TransactionDetails } from "./Transaction/Transaction";
import transactionsSort from "./Transaction/utils/transactionsSort";
import Wallet from "./Transaction/Wallet";
import { transactionList } from "./transactions";

enum Pages {
	Accounts = 1,
	Categories = 2,
	Transactions = 3,
	Overview = 4,
}

const GlobalStyle = createGlobalStyle<{ theme: typeof darkTheme }>`
	body {
		background-color: ${(props) => props.theme.colors.background.default};
		font-family: "Roboto", monospace;
	}
`;

const wallet = new Wallet();
transactionList.forEach((transaction) => wallet.createTransaction(transaction));

const App = () => {
	const [transactionsState, setTransactions] = useState(wallet.transactionsList);
	const [transactionControllerState, changeControllerState] = useState({ open: false, id: "" });

	const deleteTransactionHandler = (id: string) => {
		wallet.deleteTransactionByID(id);
		setTransactions(wallet.transactionsList);
	};

	const saveTransaction = (transactionDetails: TransactionDetails) => {
		try {
			wallet.updateTransactionByID(transactionDetails.id, transactionDetails);
		} catch (err) {
			// If transaction not found
			wallet.createTransaction(transactionDetails);
		}
		setTransactions(wallet.transactionsList);
	};

	const closeController = () => {
		changeControllerState({ open: false, id: "" });
		document.body.style.overflow = "unset";
	};

	const openController = (id: string) => {
		if (transactionControllerState.open === true) return;

		const transaction = transactionsState.find((transaction) => transaction.details.id === id);
		if (!transaction) throw new Error("Transaction not found");

		changeControllerState({ open: true, id });
		document.body.style.overflow = "hidden";
	};

	const transactionGroups = () => {
		const transactions = transactionsSort(transactionsState);

		const transactionKeys = Object.keys(transactions);

		const buffer: { date: Date; transactions: Transaction[] }[] = [];
		transactionKeys.forEach((date) =>
			buffer.push({
				date: new Date(date),
				transactions: transactions[date],
			})
		);
		return buffer;
	};

	return (
		<Fragment>
			<GlobalStyle theme={darkTheme} />
			<Theme theme={darkTheme}>
				<Header isCurrent={true} wallet={wallet}></Header>
				<main>
					<Wrapper>
						{[...transactionGroups()].map((transaction) => {
							return (
								<TransactionGroup
									date={transaction.date}
									transactions={transaction.transactions}
									key={transaction.date.toString()}
									deleteTransaction={deleteTransactionHandler}
									transactionController={{
										controllerState: transactionControllerState,
										open: openController,
										close: closeController,
										save: saveTransaction,
									}}
								></TransactionGroup>
							);
						})}
					</Wrapper>
					<AddButton
						onClick={() => {
							changeControllerState({ open: true, id: "-1" });
							document.body.style.overflow = "hidden";
						}}
					/>
					{transactionControllerState.open && transactionControllerState.id === "-1" && (
						<TransactionAddController
							close={() => {
								changeControllerState({ open: false, id: "" });
								document.body.style.overflow = "unset";
							}}
							wallet={wallet}
							save={saveTransaction}
						/>
					)}
				</main>
				<Footer activePageIndex={Pages.Transactions}></Footer>
			</Theme>
		</Fragment>
	);
};

export default App;
