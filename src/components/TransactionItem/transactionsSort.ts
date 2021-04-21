import Transaction from "../../Transaction/Transaction";

export type SortedTransactions = {
	[ISODate: string]: Transaction[];
};

function pad(number: number) {
	if (number < 10) {
		return "0" + number;
	}
	return number;
}

function getISOYearMonthDay(date: Date) {
	return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}

function transactionsSort(transactions: Transaction[]) {
	const buffer: SortedTransactions = {};
	transactions
		.sort((a, b) => b.details.date.getTime() - a.details.date.getTime())
		.forEach((transaction) => {
			const transactionISODate = getISOYearMonthDay(transaction.details.date);
			if (!buffer[transactionISODate]) buffer[transactionISODate] = new Array(transaction);
			else buffer[transactionISODate].push(transaction);
		});

	return buffer;
}

export default transactionsSort;
