import Category from "./Categories/Category";
import { Expenses } from "./Categories/Expense";
import { Incomes } from "./Categories/Income";
import PaymentMethod, { PaymentMethods } from "./Categories/PaymentMethod";

export type TransactionDetailsUnparsed = {
	title: string;
	amount: number;
	paymentMethod: string | PaymentMethod;
	type: string;
	category: string | Category;
	/** ISO 8601 */
	date: string | Date;
	id: string;
};

export type TransactionDetails = {
	title: string;
	amount: number;
	paymentMethod: PaymentMethod;
	type: string;
	category: Category;
	date: Date;
	id: string;
};

class Transaction {
	transactionDetails: TransactionDetails;

	parseDetails(details: TransactionDetailsUnparsed | TransactionDetails): TransactionDetails {
		function parse(
			details: TransactionDetailsUnparsed | TransactionDetails,
			categories: { [categoryName: string]: Category }
		): TransactionDetails {
			const paymentMethod = PaymentMethods[details.paymentMethod?.toString()]
				? PaymentMethods[details.paymentMethod.toString()]
				: PaymentMethods["Other"];
			const category = categories[details.category?.toString()]
				? categories[details.category.toString()]
				: categories["Other"];
			//? YYYY-MM-DDTHH:mm:ss.sssZ ISO 8601
			const date = new Date(details.date);
			if (!Date.parse(date.toString())) throw new Error("Invalid date");

			const transaction: TransactionDetails = {
				title: details.title,
				amount: details.amount,
				paymentMethod,
				type: details.type,
				category,
				date,
				id: details.id,
			};
			return transaction;
		}

		if (details.type === "Income") {
			return parse(details, Incomes);
		}
		if (details.type === "Expense") {
			return parse(details, Expenses);
		}
		throw new Error("Unknown type");
	}

	constructor(details: TransactionDetailsUnparsed | TransactionDetails) {
		this.transactionDetails = this.parseDetails(details);
	}

	get details() {
		return { ...this.transactionDetails };
	}

	set setDetails(details: TransactionDetails | TransactionDetailsUnparsed) {
		this.transactionDetails = this.parseDetails(details);
	}
}

export default Transaction;
