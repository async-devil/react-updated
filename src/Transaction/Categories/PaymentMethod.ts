import Category from "./Category";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

class PaymentMethod {
	private UIInformation: Category;

	constructor(UI: Category) {
		this.UIInformation = UI;
	}

	get name() {
		return this.UIInformation.name;
	}
	get ico() {
		return this.UIInformation.ico;
	}
	get color() {
		return this.UIInformation.color;
	}

	toString(): string {
		return this.UIInformation.name;
	}
}

enum PaymentMethodName {
	Cash = "Cash",
	Card = "Card",
	Other = "Other",
}

const PaymentMethods: { [categoryName: string]: PaymentMethod } = {
	Card: new PaymentMethod(new Category(PaymentMethodName.Card, CreditCardIcon, "#4c5fb7")),
	Cash: new PaymentMethod(
		new Category(PaymentMethodName.Cash, AccountBalanceWalletIcon, "#149c8e")
	),
	Other: new PaymentMethod(new Category(PaymentMethodName.Other, MoreHorizIcon, "#969899")),
};

export { PaymentMethod as default, PaymentMethods, PaymentMethodName };
