import Transaction from "../../../Transaction/Transaction";
import TransactionDate from "../TransactionDate/TransactionDate";
import TransactionItem from "../TransactionItem/TransactionItem";
import currency from "currency.js";
import styled from "styled-components";

const TransactionGroupArticle = styled.article`
	min-width: 17.5rem;
	max-width: 48rem;

	.transaction-item:last-child {
		border: none;
		box-shadow: 0 2px 1px -2px black;
	}

	&:hover {
		box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.25);
	}
`;

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
		changeDateHandler: (eventValue: Date, id: string) => void;
	};
}) => {
	let transactionsArray = null;

	transactionsArray = [...props.transactions].map((transaction) => {
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
