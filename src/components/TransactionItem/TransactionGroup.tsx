import Transaction from "../../Transaction/Transaction";
import TransactionDate from "./TransactionDate";
import TransactionItem from "./TransactionItem";
import { TransactionGroupArticle } from "./styled-components.styled";
import currency from "currency.js";

const TransactionGroup = ({ date, transactions }: { date: Date; transactions: Transaction[] }) => {
	let transactionsArray = null;

	transactionsArray = [...transactions].map((transaction, index) => {
		return (
			<TransactionItem transaction={transaction} key={transaction.details.id}></TransactionItem>
		);
	});

	const sum = () => {
		let sum = 0;
		transactions.forEach((transaction) => {
			if (transaction.details.type === "Income")
				return (sum = currency(sum).add(transaction.details.amount).value);
			if (transaction.details.type === "Expense")
				return (sum = currency(sum).subtract(transaction.details.amount).value);
		});
		return sum;
	};

	return (
		<TransactionGroupArticle className="transaction-group">
			{transactionsArray ? <TransactionDate date={date} sum={sum()}></TransactionDate> : null}
			{transactionsArray}
		</TransactionGroupArticle>
	);
};

export default TransactionGroup;
