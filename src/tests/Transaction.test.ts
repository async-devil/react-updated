import { Expenses } from "../Transaction/Categories/Expense";
import { Incomes } from "../Transaction/Categories/Income";
import { PaymentMethods } from "../Transaction/Categories/PaymentMethod";
import Transaction from "../Transaction/Transaction";

describe("Tests with valid data", () => {
	test("Should return validated transaction", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Groceries",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Groceries");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Card",
			type: "Income",
			category: "Salary",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Salary");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});

	test("Should return validated transaction when date is JSDate", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Groceries",
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Groceries");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Card",
			type: "Income",
			category: "Salary",
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Salary");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});

	test("Should return validated transaction when category is parsed category", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: Expenses["Groceries"],
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Groceries");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Card",
			type: "Income",
			category: Incomes["Salary"],
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Salary");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});

	test("Should return validated transaction when paymentMethod is parsed payment method", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: "Groceries",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Groceries");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Card"],
			type: "Income",
			category: "Salary",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Salary");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});

	test("Should return validated transaction when it has already validated", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: Expenses["Groceries"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Groceries");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Card"],
			type: "Income",
			category: Incomes["Salary"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Salary");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});
});

describe("Tests with invalid data", () => {
	test("Should throw error then date is unvalid", () => {
		expect(() => {
			new Transaction({
				title: "Test",
				amount: 100,
				paymentMethod: "Cash",
				type: "Expense",
				category: "Groceries",
				date: "Invalid date",
				id: "1",
			});
		}).toThrow(new Error("Invalid date"));
	});

	test("Should throw error then type is unvalid", () => {
		expect(() => {
			new Transaction({
				title: "Test",
				amount: 100,
				paymentMethod: "Cash",
				type: "Unknown type",
				category: "Groceries",
				date: "Unvalid date",
				id: "1",
			});
		}).toThrow(new Error("Unknown type"));
	});

	test("Should return Other category property if type is not suits to category", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Salary",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Other");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Card",
			type: "Income",
			category: "Groceries",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Other");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));
	});

	test("Should return Other property if category is not exists", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Cash",
			type: "Expense",
			category: "Unknow category",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionExpense.details.category.name).toBe("Other");
		expect(transactionExpense.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: "Card",
			type: "Income",
			category: "Unknown category",
			date: "2011-10-10",
			id: "1",
		});

		expect(transactionIncome.details.category.name).toBe("Other");
		expect(transactionIncome.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionExpense1 = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: Expenses["Unknown category"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionExpense1.details.category.name).toBe("Other");
		expect(transactionExpense1.details.paymentMethod.name).toBe("Cash");
		expect(transactionExpense1.details.date).toStrictEqual(new Date("2011-10-10"));

		const transactionIncome1 = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Card"],
			type: "Income",
			category: Incomes["Unknown category"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionIncome1.details.category.name).toBe("Other");
		expect(transactionIncome1.details.paymentMethod.name).toBe("Card");
		expect(transactionIncome1.details.date).toStrictEqual(new Date("2011-10-10"));
	});
});

describe("Getters and setters tests", () => {
	test("Should get valid details", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: Expenses["Groceries"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		expect(transactionExpense.details).toStrictEqual({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: Expenses["Groceries"],
			date: new Date("2011-10-10"),
			id: "1",
		});
	});

	test("Should set correctly", () => {
		const transactionExpense = new Transaction({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Cash"],
			type: "Expense",
			category: Expenses["Groceries"],
			date: new Date("2011-10-10"),
			id: "1",
		});

		transactionExpense.setDetails = {
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Card"],
			type: "Income",
			category: Incomes["Salary"],
			date: new Date("2011-10-10"),
			id: "1",
		};

		expect(transactionExpense.details).toStrictEqual({
			title: "Test",
			amount: 100,
			paymentMethod: PaymentMethods["Card"],
			type: "Income",
			category: Incomes["Salary"],
			date: new Date("2011-10-10"),
			id: "1",
		});
	});
});
