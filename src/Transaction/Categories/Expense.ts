import Category from "./Category";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import TheatersIcon from "@material-ui/icons/Theaters";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

class Expense {
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

enum ExpenseName {
	Other = "Other",
	Groceries = "Groceries",
	Restaurant = "Restaurant",
	Leisure = "Leisure",
	Transport = "Transport",
	Health = "Health",
	Gifts = "Gifts",
	Shopping = "Shopping",
}

const Expenses: { [expenseName: string]: Expense } = {
	Other: new Expense(new Category(ExpenseName.Other, MoreHorizIcon, "#969899")),
	Groceries: new Expense(new Category(ExpenseName.Groceries, ShoppingBasketIcon, "#00adf3")),
	Restaurant: new Expense(new Category(ExpenseName.Restaurant, RestaurantIcon, "#405ab9")),
	Leisure: new Expense(new Category(ExpenseName.Leisure, TheatersIcon, "#ff4b8a")),
	Transport: new Expense(new Category(ExpenseName.Transport, DirectionsBusIcon, "#ffad3e")),
	Health: new Expense(new Category(ExpenseName.Health, LocalHospitalIcon, "#01b353")),
	Gifts: new Expense(new Category(ExpenseName.Gifts, CardGiftcardIcon, "#fe4f4f")),
	Shopping: new Expense(new Category(ExpenseName.Shopping, LocalMallIcon, "#8d6053")),
};

export { Expense as default, Expenses, ExpenseName };
