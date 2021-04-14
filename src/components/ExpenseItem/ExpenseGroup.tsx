import ExpenseDate from "./ExpenseDate";
import ExpenseItem, { IExpenseItem } from "./ExpenseItem";
import { ExpenseGroupArticle } from "./styled-components.styled";

function ExpenseGroup({ date, expenses }: { date: Date; expenses: IExpenseItem[] }) {
	let expensesArray = null;

	expensesArray = [...expenses].map((expense, index) => {
		return (
			<ExpenseItem
				title={expense.title}
				price={expense.price}
				paymentMethod={expense.paymentMethod}
				category={expense.category}
			></ExpenseItem>
		);
	});

	return (
		<ExpenseGroupArticle className="expense-group">
			{expensesArray ? <ExpenseDate date={date}></ExpenseDate> : null}
			{expensesArray}
		</ExpenseGroupArticle>
	);
}

export default ExpenseGroup;
