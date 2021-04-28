import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Category from "../../../Transaction/Categories/Category";
import { Expenses } from "../../../Transaction/Categories/Expense";
import { Incomes } from "../../../Transaction/Categories/Income";
import Transaction, { TransactionDetails } from "../../../Transaction/Transaction";
import Wallet from "../../../Transaction/Wallet";
import TransactionController from "../TransactionController/TransactionController";
import {
	TransactionAdd,
	TransactionAddWrapper,
	TransactionAddTypeSelector,
} from "./TransactionAddController.styles";
import TypeBlock from "./TypeBlock/TypeBlock";

const TransactionAddController = (props: {
	wallet: Wallet;
	close: () => void;
	save: (transactionDetails: TransactionDetails) => void;
}) => {
	const [selectedIndex, selectIndex] = useState(0);
	const [isVisibleTypeSelector, updateSelectorVisiblity] = useState(true);

	const [isVisibleTransactionController, updateControllerVisiblity] = useState(false);

	const [transactionState, updateTransaction] = useState<Transaction>(
		new Transaction({
			title: "",
			amount: 0,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Other",
			date: new Date(),
			id: uuidv4(),
		})
	);

	const closeTypeSelector = (type: string, category: Category) => {
		updateTransaction(new Transaction(Object.assign(transactionState.details, { type, category })));
		updateSelectorVisiblity(false);
		updateControllerVisiblity(true);
	};

	const saveTransaction = (transactionDetails: TransactionDetails) => {
		props.save(transactionDetails);
		props.close();
	};

	const deleteTransaction = (id: string) => {
		throw new Error("Unexpected delete button click in transaction controller with id: " + id);
	};

	let renderObject = null;
	renderObject = () => {
		if (isVisibleTypeSelector) {
			if (selectedIndex === 0) {
				return (
					<TransactionAddWrapper>
						<TransactionAddTypeSelector selectedIndex={selectedIndex}>
							<p onClick={() => selectIndex(0)}>Expense</p>
							<p onClick={() => selectIndex(1)}>Income</p>
						</TransactionAddTypeSelector>
						<TypeBlock
							wallet={props.wallet}
							categories={Expenses}
							type="Expense"
							select={closeTypeSelector}
						/>
					</TransactionAddWrapper>
				);
			}
			if (selectedIndex === 1) {
				return (
					<TransactionAddWrapper>
						<TransactionAddTypeSelector selectedIndex={selectedIndex}>
							<p onClick={() => selectIndex(0)}>Expense</p>
							<p onClick={() => selectIndex(1)}>Income</p>
						</TransactionAddTypeSelector>
						<TypeBlock
							wallet={props.wallet}
							categories={Incomes}
							type="Income"
							select={closeTypeSelector}
						/>
					</TransactionAddWrapper>
				);
			}
		}

		if (isVisibleTransactionController) {
			return (
				<TransactionController
					transaction={transactionState}
					close={() => {
						updateControllerVisiblity(false);
						props.close();
					}}
					saveTransaction={saveTransaction}
					deleteTransaction={deleteTransaction}
				/>
			);
		}
	};

	return <TransactionAdd>{renderObject()}</TransactionAdd>;
};

export default TransactionAddController;
