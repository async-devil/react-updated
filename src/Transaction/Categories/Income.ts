import Category from "./Category";

import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

class Income {
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

enum IncomeName {
	Other = "Other",
	Salary = "Salary",
}

const Incomes: { [categoryName: string]: Category } = {
	Other: new Income(new Category(IncomeName.Other, MoreHorizIcon, "#969899")),
	Salary: new Income(new Category(IncomeName.Salary, LocalAtmIcon, "#009885")),
};

export { Income as default, Incomes, IncomeName };
