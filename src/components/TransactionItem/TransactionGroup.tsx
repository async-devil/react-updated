import Transaction from "../../Transaction/Transaction";
import TransactionDate from "./TransactionDate";
import TransactionItem from "./TransactionItem";
import { TransactionGroupArticle } from "./styled-components.styled";
import currency from "currency.js";

const TransactionGroup = (props: {
	date: Date;
	transactions: Transaction[];
	deleteTransaction: (id: string) => void;
	transactionController: {
		controllerState: {
			open: boolean;
			id: string;
		};
		open: (id: string) => void;
		close: () => void;
		changeTitleHandler: (eventValue: string, id: string) => void;
		changeAmountHandler: (eventValue: string, id: string) => void;
	};
}) => {
	let transactionsArray = null;

	transactionsArray = [...props.transactions].map((transaction, index) => {
		return (
			<TransactionItem
				transaction={transaction}
				key={transaction.details.id}
				deleteTransaction={props.deleteTransaction}
				transactionController={props.transactionController}
			></TransactionItem>
		);
	});

	const sum = () => {
		let sum = 0;
		props.transactions.forEach((transaction) => {
			if (transaction.details.type === "Income")
				return (sum = currency(sum).add(transaction.details.amount).value);
			if (transaction.details.type === "Expense")
				return (sum = currency(sum).subtract(transaction.details.amount).value);
		});
		return sum;
	};

	return (
		<TransactionGroupArticle className="transaction-group">
			{transactionsArray ? <TransactionDate date={props.date} sum={sum()}></TransactionDate> : null}
			{transactionsArray}
		</TransactionGroupArticle>
	);
};

export default TransactionGroup;
