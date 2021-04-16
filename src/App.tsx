import React from "react";
import ExpenseGroup from "./components/ExpenseItem/ExpenseGroup";
import Wrapper from "./components/UI/ExpensesWrapper";
import Footer from "./components/UI/Footer";

enum Pages {
	Accounts = 1,
	Categories = 2,
	Transactions = 3,
	Overview = 4,
}

const expenseList = [
	{
		title: "First expense",
		price: 10.8,
		paymentMethod: "Cash",
		category: "Transport",
		date: new Date(2021, 3, 20),
		id: "01",
	},
	{
		title: "First expense",
		price: 29.2,
		paymentMethod: "Cash",
		category: "Groceries",
		date: new Date(2021, 3, 20),
		id: "02",
	},
	{
		title: "First expense",
		price: 1.07,
		paymentMethod: "Cash",
		category: "Shopping",
		date: new Date(2021, 3, 20),
		id: "03",
	},
];

function App() {
	return (
		<div id="page">
			<main>
				<Wrapper>
					<ExpenseGroup date={new Date(Date.now())} expenses={expenseList}></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
					<ExpenseGroup
						date={new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)}
						expenses={expenseList}
					></ExpenseGroup>
				</Wrapper>
			</main>
			<Footer activePageIndex={Pages.Transactions}></Footer>
		</div>
	);
}

export default App;
