import currency from "currency.js";

export function add(num1: number, num2: number): number {
	return currency(num1).add(num2).value;
}

export function subtract(num1: number, num2: number): number {
	return currency(num1).subtract(num2).value;
}
