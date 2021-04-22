import Transaction from "../Transaction/Transaction";
import Wallet from "../Transaction/Wallet";

test("Should fail with delete non-exsting transaction", () => {
	const wallet = new Wallet();
	expect(() => wallet.deleteTransactionByID("NON_EXSTING_ID")).toThrow(
		new Error("Transaction not found")
	);
});

test("Should fail with update non-exsting transaction", () => {
	const wallet = new Wallet();
	expect(() =>
		wallet.updateTransactionByID("NON_EXSTING_ID", {
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Unknow category",
			date: "2011-10-10",
			id: "1",
		})
	).toThrow(new Error("Transaction not found"));
});

test("Should successfully create transaction", () => {
	const wallet = new Wallet();
	const transaction = {
		title: "Test",
		amount: 100,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Unknow category",
		date: "2011-10-10",
		id: "1",
	};

	wallet.createTransaction(transaction);
	expect(wallet.transactionsList[0]).toStrictEqual(new Transaction(transaction));
});

test("Should get valid account ammount", () => {
	const wallet = new Wallet();

	wallet.createTransaction({
		title: "Test",
		amount: 100,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Unknow category",
		date: "2011-10-10",
		id: "1",
	});
	expect(wallet.getBalanceByType("Cash").amount).toBe(-100);
});

test("Should successfully delete transaction", () => {
	const wallet = new Wallet();

	wallet.createTransaction({
		title: "Test",
		amount: 100,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Unknow category",
		date: "2011-10-10",
		id: "1",
	});

	wallet.deleteTransactionByID("1");
	expect(wallet.transactionsList.length).toBe(0);
});

test("Should successfully update transaction", () => {
	const wallet = new Wallet();

	wallet.createTransaction({
		title: "Test",
		amount: 100,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Unknow category",
		date: "2011-10-10",
		id: "1",
	});

	wallet.updateTransactionByID("1", {
		title: "Test",
		amount: 10,
		paymentMethod: "Cash",
		type: "Expense",
		category: "Unknow category",
		date: "2011-10-10",
		id: "1",
	});

	expect(wallet.getBalanceByType("Cash").amount).toBe(-10);
	expect(wallet.transactionsList[0]).toStrictEqual(
		new Transaction({
			title: "Test",
			amount: 10,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Unknow category",
			date: "2011-10-10",
			id: "1",
		})
	);
});
