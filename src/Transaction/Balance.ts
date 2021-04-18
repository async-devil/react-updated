import currency from "currency.js";
import PaymentMethod from "./Categories/PaymentMethod";

class Balance {
	private balance: number = 0;
	private balanceType: PaymentMethod;

	constructor(type: PaymentMethod, startBalance: number = 0) {
		this.balanceType = type;
		this.balance = startBalance;
	}

	add(amount: number) {
		const updatedBalance = currency(this.balance).add(amount).value;
		this.balance = updatedBalance;
	}

	subtract(amount: number) {
		const updatedBalance = currency(this.balance).subtract(amount).value;
		this.balance = updatedBalance;
	}

	get type() {
		return this.balanceType.toString();
	}

	get ammount() {
		return this.balance;
	}
}

export { Balance as default };
