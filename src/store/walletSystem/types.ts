import { IconsName } from "./Icons";

export type Balance = {
	amount: number;
	name: PaymentMethod;
	id: string;
};

export interface PaymentMethod extends Category {
	name: string;
	ico: React.ElementType;
	color: string;
	icoName: IconsName;
}

export interface Category {
	name: string;
	ico: React.ElementType;
	color: string;
	icoName: IconsName;
}

export type Transaction = {
	title: string | undefined;
	amount: number;
	type: "Income" | "Expense";
	paymentMethod: PaymentMethod;
	category: Category;
	date: Date;
	id: string;
};

export type TransactionConstructor = {
	title: string | undefined;
	amount: number;
	type: "Income" | "Expense";
	paymentMethod: string;
	category: string;
	/** ISO 8601*/
	date: string;
	id: string;
};

export type BalanceConstructor = {
	amount: number;
	name: string;
	id: string;
};

export type CategoryConstructor = {
	name: string;
	icoName: string;
	color: string;
};
