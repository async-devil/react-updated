import {
	ExpenseItemArticle,
	ExpenseItemDescription,
	ExpenseInfo,
	ExpenseCategory,
	ExpenseCategoryValue,
	ExpensePrice,
} from "./styled-components.styled";

import Categories from "../../Categories/Categories";
import Category from "../../Categories/Category";

export interface IExpenseItem {
	title: string;
	price: number;
	paymentMethod: string;
	category: string;
}

const getName = (category: Category, lang: string) => {
	try {
		return category.getNameLang(lang);
	} catch (err) {
		return category.toString();
	}
};

function ExpenseItem(props: IExpenseItem) {
	const category = Categories[props.category] ? Categories[props.category] : Categories.Other;

	return (
		<ExpenseItemArticle className="expense-item">
			<ExpenseItemDescription className="expense-item__description">
				<ExpenseInfo>
					<category.ico
						style={{
							color: category.color,
							borderRight: "0.08rem solid #444444",
							paddingRight: "0.25rem",
						}}
					/>
					<ExpenseCategory>
						<ExpenseCategoryValue className="expense-item__description_category">
							{getName(category, "eng")}
						</ExpenseCategoryValue>
						<ExpenseCategoryValue
							paymentMethod={true}
							className="expense-item__description_payment-method"
						>
							{props.paymentMethod}
						</ExpenseCategoryValue>
					</ExpenseCategory>
				</ExpenseInfo>
				<ExpensePrice className="expense-item__description_details">
					<p>- {props.price}$</p>
				</ExpensePrice>
			</ExpenseItemDescription>
		</ExpenseItemArticle>
	);
}

export default ExpenseItem;
