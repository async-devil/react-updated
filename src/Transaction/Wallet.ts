import Balance from "./Balance";
import PaymentMethod, { PaymentMethods } from "./Categories/PaymentMethod";
import Transaction, { TransactionDetails, TransactionDetailsUnparsed } from "./Transaction";
import currency from "currency.js";

class Wallet {
	private transactions: Transaction[] = [];
	private balanceList: Balance[] = [];

	/** Use undefined or empty array if need to skip */
	constructor(customBalances: PaymentMethod[] = []) {
		const balances = [
			PaymentMethods["Cash"],
			PaymentMethods["Card"],
			PaymentMethods["Other"],
			...customBalances,
		];
		balances.forEach((balance) => this.balanceList.push(new Balance(balance)));
	}

	private findRelativeBalance(transaction: Transaction): Balance {
		const balance = this.balanceList.find(
			(balance) => balance.type.name === transaction.details.paymentMethod.toString()
		);

		if (!balance) throw new Error("Balance not found");
		return balance;
	}

	private doDependOnType(type: string, doOnIncome: () => any, doOnExpense: () => any) {
		if (type === "Income") return doOnIncome();
		if (type === "Expense") return doOnExpense();
		throw new Error("Invalid type");
	}

	/** On income add, on expense subtract */
	private normalBalanceOperation(balance: Balance, transaction: Transaction) {
		this.doDependOnType(
			transaction.details.type,
			() => balance.add(transaction.details.amount),
			() => balance.subtract(transaction.details.amount)
		);
	}

	/** On income subtract, on expense add */
	private reverseBalanceOperation(balance: Balance, transaction: Transaction) {
		this.doDependOnType(
			transaction.details.type,
			() => balance.subtract(transaction.details.amount),
			() => balance.add(transaction.details.amount)
		);
	}

	deleteTransactionByID(id: string): Transaction {
		const deleteTransactionIndex = this.transactions.findIndex(
			(transaction) => transaction.details.id === id
		);

		if (deleteTransactionIndex === -1) throw new Error("Transaction not found");
		const deleteTransaction = this.transactions[deleteTransactionIndex];

		this.transactions.splice(deleteTransactionIndex, 1);

		const balance = this.findRelativeBalance(deleteTransaction);
		this.reverseBalanceOperation(balance, deleteTransaction);

		return deleteTransaction;
	}

	createTransaction(
		transactionDetails: TransactionDetails | TransactionDetailsUnparsed
	): Transaction {
		const transaction = new Transaction(transactionDetails);
		const balance = this.findRelativeBalance(transaction);

		this.normalBalanceOperation(balance, transaction);
		this.transactions.push(transaction);

		return transaction;
	}

	updateTransactionByID(
		id: string,
		updatedDetails: TransactionDetails | TransactionDetailsUnparsed
	): Transaction {
		const updateTransaction = this.transactions.find(
			(transaction) => transaction.details.id === id
		);
		if (!updateTransaction) throw new Error("Transaction not found");

		const balance = this.findRelativeBalance(updateTransaction);
		this.reverseBalanceOperation(balance, updateTransaction);

		try {
			updateTransaction.setDetails = updatedDetails;
		} catch (err) {
			this.normalBalanceOperation(balance, updateTransaction);
			throw err;
		}

		this.normalBalanceOperation(balance, updateTransaction);

		return updateTransaction;
	}

	getTransactionByID(id: string): Transaction {
		const transaction = this.transactions.find((transaction) => transaction.details.id === id);
		if (!transaction) throw new Error("Transaction not found");
		return transaction;
	}

	get transactionsList() {
		return [...this.transactions];
	}

	getBalanceByType(type: string) {
		const balance = this.balanceList.find((balance) => balance.type.name === type);
		if (!balance) throw new Error("Balance not found");

		return balance;
	}

	get balances() {
		return [...this.balanceList];
	}

	get balanceSum() {
		let sum = currency(0);
		this.balances.forEach((balance) => (sum = sum.add(balance.amount)));
		return sum.value;
	}

	getAmountByTransactionCategoryName(category: string): number {
		const transactions = this.transactions.filter(
			(transaction) => transaction.details.category.name === category
		);
		if (transactions.length === 0) throw new Error("Transactions not found");

		let sum = currency(0);
		transactions.forEach((transaction) => sum.add(transaction.details.amount));

		return sum.value;
	}
}

export default Wallet;
