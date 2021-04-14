import Category from "./Category";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import TheatersIcon from "@material-ui/icons/Theaters";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const CategoriesNames: { [langName: string]: { [categoryName: string]: string } } = {
	eng: {
		Other: "Other",
		Groceries: "Groceries",
		Restaurant: "Restaurant",
		Leisure: "Leisure",
		Transport: "Transport",
		Health: "Health",
		Gifts: "Gifts",
		Shopping: "Shopping",
	},
};

function getCategoryNames(categoryName: string) {
	const languages = Object.keys(CategoriesNames);

	const names: { [langName: string]: string } = {};
	languages.forEach((lang) => {
		const name = CategoriesNames[`${lang}`][`${categoryName}`];
		if (name) names[`${lang}`] = name;
	});

	if (Object.keys(names).length !== languages.length)
		throw new Error("Category names count are not equal languages count");
	return names;
}

const Categories: { [categoryName: string]: Category } = {
	Other: new Category(getCategoryNames("Other"), MoreHorizIcon, "#969899"),
	Groceries: new Category(getCategoryNames("Groceries"), ShoppingBasketIcon, "#00adf3"),
	Restaurant: new Category(getCategoryNames("Restaurant"), RestaurantIcon, "#405ab9"),
	Leisure: new Category(getCategoryNames("Leisure"), TheatersIcon, "#ff4b8a"),
	Transport: new Category(getCategoryNames("Transport"), DirectionsBusIcon, "#ffad3e"),
	Health: new Category(getCategoryNames("Health"), LocalHospitalIcon, "#01b353"),
	Gifts: new Category(getCategoryNames("Gifts"), CardGiftcardIcon, "#fe4f4f"),
	Shopping: new Category(getCategoryNames("Shopping"), LocalMallIcon, "#8d6053"),
};

export default Categories;
