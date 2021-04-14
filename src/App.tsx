import React from "react";
import ExpenseGroup from "./components/ExpenseItem/ExpenseGroup";

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
		<main>
			<h1>It works!</h1>
			<ExpenseGroup date={new Date(2021, 3, 16)} expenses={expenseList}></ExpenseGroup>
			<ExpenseGroup date={new Date(2021, 3, 15)} expenses={expenseList}></ExpenseGroup>
			<ExpenseGroup date={new Date(2021, 3, 14)} expenses={expenseList}></ExpenseGroup>
		</main>
	);
}

export default App;
