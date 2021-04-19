import Transaction from "../../Transaction/Transaction";
import TransactionDate from "./TransactionDate";
import TransactionItem from "./TransactionItem";
import { TransactionGroupArticle } from "./styled-components.styled";

const TransactionGroup = ({ date, transactions }: { date: Date; transactions: Transaction[] }) => {
	let transactionsArray = null;

	transactionsArray = [...transactions].map((transaction, index) => {
		return <TransactionItem transaction={transaction}></TransactionItem>;
	});

	return (
		<TransactionGroupArticle className="transaction-group">
			{transactionsArray ? <TransactionDate date={date}></TransactionDate> : null}
			{transactionsArray}
		</TransactionGroupArticle>
	);
};

export default TransactionGroup;
