import React, { useEffect, Fragment } from "react";
import TransactionGroup from "./components/TransactionItem/TransactionGroup";
import Wrapper from "./components/UI/TransactionsWrapper";
import Footer from "./components/UI/Footer";
import Wallet from "./Transaction/Wallet";

import Theme from "./Theme/Theme";
import darkTheme from "./Theme/darkTheme";
import { createGlobalStyle } from "styled-components";
import transactionsSort from "./components/TransactionItem/transactionsSort";
import Transaction from "./Transaction/Transaction";
import Header from "./components/UI/Header";

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

const transactionList = [
	{
		title: "ea officia id",
		amount: 69.61,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-04",
		id: "4d4f3006-68bc-49f1-b4dc-64302a945e8e",
	},
	{
		title: "ea sit ea",
		amount: 68.71,
		paymentMethod: "Card",
		type: "Expense",
		category: "Leisure",
		date: "2021-03-13",
		id: "2d451901-65cb-404a-ac31-f068332fe8bc",
	},
	{
		title: "officia esse tempor",
		amount: 98.05,
		paymentMethod: "Card",
		type: "Expense",
		category: "Groceries",
		date: "2021-04-07",
		id: "aa82ff91-834a-44de-837d-4c811842448e",
	},
	{
		title: "consectetur mollit proident",
		amount: 51.06,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-01",
		id: "ed157f1a-f6c0-4525-8385-933ea77c9897",
	},
	{
		title: "enim laboris consequat",
		amount: 25.78,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-04-14",
		id: "0bced256-1f1a-4541-86c5-34c63604c1a8",
	},
	{
		title: "consequat laborum commodo",
		amount: 9.47,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-05",
		id: "b5fe86c6-4225-4c7e-a621-a1242af6f24a",
	},
	{
		title: "velit aliqua cillum",
		amount: 2.34,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Shopping",
		date: "2021-03-15",
		id: "c318bdb1-cbf9-4cb2-b829-dd0dd356c80d",
	},
	{
		title: "ipsum ea proident",
		amount: 60.14,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-15",
		id: "e856b966-4c3c-406a-b581-a8af974295cf",
	},
	{
		title: "anim voluptate irure",
		amount: 71.07,
		paymentMethod: "Card",
		type: "Expense",
		category: "Restaurant",
		date: "2021-04-06",
		id: "14842a38-fdf4-4b7e-a1d9-db82ba9fa356",
	},
	{
		title: "est id culpa",
		amount: 29.99,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-15",
		id: "8f1f19bf-0c7c-410e-8150-e851877f6760",
	},
	{
		title: "cillum do id",
		amount: 42,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-31",
		id: "aa7d49ab-1301-4fe5-b00e-49097c083bf6",
	},
	{
		title: "id et ipsum",
		amount: 12.51,
		paymentMethod: "Card",
		type: "Expense",
		category: "Leisure",
		date: "2021-03-10",
		id: "d7c00f98-5ae4-4da3-81d7-f06c5becd9d8",
	},
	{
		title: "ea eu id",
		amount: 90.52,
		paymentMethod: "Card",
		type: "Expense",
		category: "Shopping",
		date: "2021-03-03",
		id: "d3745c7e-4207-4b34-82f9-acaf1becbf1c",
	},
	{
		title: "sit consequat laboris",
		amount: 17.34,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Health",
		date: "2021-03-29",
		id: "7e40fe00-796c-47af-b1e9-ee1817bf5e3c",
	},
	{
		title: "aliqua elit magna",
		amount: 64.71,
		paymentMethod: "Card",
		type: "Expense",
		category: "Health",
		date: "2021-03-04",
		id: "b5e5364a-f5b5-43c5-a92d-7a4d0c06d74a",
	},
	{
		title: "adipisicing consectetur deserunt",
		amount: 93.49,
		paymentMethod: "Card",
		type: "Expense",
		category: "Gifts",
		date: "2021-03-16",
		id: "bcc5d951-1eed-46e4-ad3a-670c04e10730",
	},
	{
		title: "laboris ullamco qui",
		amount: 50.21,
		paymentMethod: "Card",
		type: "Expense",
		category: "Gifts",
		date: "2021-03-14",
		id: "b3766d0e-2205-4c43-a0b1-9d043533d514",
	},
	{
		title: "aliquip quis incididunt",
		amount: 49.45,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Restaurant",
		date: "2021-04-21",
		id: "3dc9566e-32ef-440f-b775-0ae10646a11e",
	},
	{
		title: "aliquip veniam et",
		amount: 4.61,
		paymentMethod: "Card",
		type: "Expense",
		category: "Transport",
		date: "2021-03-20",
		id: "7ca6e064-dedf-40bb-9a0d-cca2b9159d92",
	},
	{
		title: "sunt eu minim",
		amount: 99.37,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Gifts",
		date: "2021-03-01",
		id: "25fce104-3038-4331-9c53-27f29dd6714b",
	},
	{
		title: "nulla velit eiusmod",
		amount: 22.57,
		paymentMethod: "Card",
		type: "Expense",
		category: "Gifts",
		date: "2021-03-31",
		id: "03a3427a-663b-41ba-8aae-19858366cd28",
	},
	{
		title: "duis nulla amet",
		amount: 85.42,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-22",
		id: "7660f411-4654-43c6-8751-edc1cfbddd84",
	},
	{
		title: "eu do incididunt",
		amount: 17.31,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Leisure",
		date: "2021-04-15",
		id: "82f32a80-9aaa-42ab-9071-82a4a963f89f",
	},
	{
		title: "culpa laboris ullamco",
		amount: 24.85,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-01",
		id: "8e3e6112-2589-4503-a647-c2eb85d5d0ca",
	},
	{
		title: "officia reprehenderit commodo",
		amount: 18.15,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-04-07",
		id: "f7ac220a-c632-4f9f-ad42-8ac9accddeba",
	},
	{
		title: "do do dolor",
		amount: 25.04,
		paymentMethod: "Card",
		type: "Expense",
		category: "Transport",
		date: "2021-04-19",
		id: "07a8b68f-bded-4eab-9768-5a2f4a2d7068",
	},
	{
		title: "et nulla tempor",
		amount: 73.31,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Shopping",
		date: "2021-03-16",
		id: "551f65fd-1ae2-4b54-ba38-f1cc0f8c0f02",
	},
	{
		title: "ullamco irure laboris",
		amount: 91.77,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-24",
		id: "13a9db92-e39c-4ed7-973d-ce5b0e850544",
	},
	{
		title: "tempor magna fugiat",
		amount: 14.44,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-25",
		id: "fc28d9b9-ba82-4701-b760-34086cc48318",
	},
	{
		title: "laborum cupidatat sit",
		amount: 41.69,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Leisure",
		date: "2021-03-24",
		id: "1c5d070c-799a-4f3e-a3ec-aa54ba9837cd",
	},
	{
		title: "cupidatat velit qui",
		amount: 23.66,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-04-15",
		id: "6dd90904-f63c-4203-9cf8-03dd3138b061",
	},
	{
		title: "deserunt reprehenderit elit",
		amount: 21.89,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Shopping",
		date: "2021-03-17",
		id: "a5c3b4d2-4df8-4ebd-a7d9-364b7f694b36",
	},
	{
		title: "nulla dolor veniam",
		amount: 96.44,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Groceries",
		date: "2021-03-21",
		id: "fcb524d6-d88b-4873-b3b6-db1977e6db78",
	},
	{
		title: "mollit quis ad",
		amount: 36.34,
		paymentMethod: "Card",
		type: "Expense",
		category: "Health",
		date: "2021-04-15",
		id: "f829a553-7d3e-4b7b-b0c5-afc804b6d083",
	},
	{
		title: "voluptate sunt incididunt",
		amount: 85.95,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-11",
		id: "aff04c29-9354-4e24-8403-4881d93cb683",
	},
	{
		title: "nisi quis aute",
		amount: 26.5,
		paymentMethod: "Cash",
		type: "Income",
		category: "Salary",
		date: "2021-03-28",
		id: "bd9a7ecf-8fb6-402d-be15-c73ad8a9a5e6",
	},
	{
		title: "duis exercitation nulla",
		amount: 97.46,
		paymentMethod: "Card",
		type: "Expense",
		category: "Shopping",
		date: "2021-04-18",
		id: "b5f0500c-2334-47e4-849e-0475e4523fe1",
	},
	{
		title: "laborum magna culpa",
		amount: 5.48,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-04-04",
		id: "f3f7f80b-f9f7-4c34-ad7c-85066caa1ebb",
	},
	{
		title: "ea excepteur eiusmod",
		amount: 63.45,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-04-11",
		id: "cec0ff42-33bb-41eb-8b48-6eb2cb887522",
	},
	{
		title: "exercitation ea eu",
		amount: 6.43,
		paymentMethod: "Card",
		type: "Income",
		category: "Salary",
		date: "2021-03-29",
		id: "728faa40-9420-4ca0-ba23-3ae43796f0af",
	},
];

const wallet = new Wallet();
transactionList.forEach((transaction) => wallet.createTransaction(transaction));

const transactions = transactionsSort(wallet.transactionsList);

const transactionKeys = Object.keys(transactions);
const transactionGroups = () => {
	const buffer: { date: Date; transactions: Transaction[] }[] = [];
	transactionKeys.forEach((date) =>
		buffer.push({
			date: new Date(date),
			transactions: transactions[date],
		})
	);
	return buffer;
};

const App = () => {
	useEffect(() => {
		document.title = wallet.getBalanceByType("Cash").ammount.toString();
	}, []);
	return (
		<Fragment>
			<GlobalStyle theme={darkTheme} />
			<Theme theme={darkTheme}>
				<Header isCurrent={true} balances={wallet.balances}></Header>
				<main>
					<Wrapper>
						{[...transactionGroups()].map((transaction) => {
							return (
								<TransactionGroup
									date={transaction.date}
									transactions={transaction.transactions}
									key={transaction.date.toString()}
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
