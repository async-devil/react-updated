import { Fragment, useState } from "react";
import TransactionGroup from "./components/Transaction/TransactionGroup/TransactionGroup";
import Wrapper from "./components/UI/TransactionsWrapper";
import Footer from "./components/UI/Footer";
import Wallet from "./Transaction/Wallet";

import Theme from "./Theme/Theme";
import darkTheme from "./Theme/darkTheme";
import { createGlobalStyle } from "styled-components";
import transactionsSort from "./Transaction/utils/transactionsSort";
import Transaction from "./Transaction/Transaction";
import Header from "./components/UI/Header";
import { transactionList } from "./transactions";
import currency from "currency.js";

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

	const changeTitleHandler = (eventValue: string, id: string) => {
		const transaction = wallet.getTransactionByID(id);

		wallet.updateTransactionByID(
			transaction.details.id,
			Object.assign(transaction.details, { title: eventValue })
		);

		setTransactions(wallet.transactionsList);
	};

	const changeAmountHandler = (eventValue: string, id: string) => {
		const transaction = wallet.getTransactionByID(id);

		const amount = eventValue.replace(/([^\d.,])|((?<=\.\d{2}).)|((?<=\..*)\.)/gm, "");

		wallet.updateTransactionByID(
			transaction.details.id,
			Object.assign(transaction.details, { amount: currency(amount).value })
		);

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
										changeTitleHandler,
										changeAmountHandler,
									}}
								></TransactionGroup>
							);
						})}
					</Wrapper>
				</main>
				<Footer activePageIndex={Pages.Transactions}></Footer>
			</Theme>
		</Fragment>
	);
};

export default App;
