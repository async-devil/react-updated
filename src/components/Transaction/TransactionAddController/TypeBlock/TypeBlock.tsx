import React from "react";

import Category from "../../../../Transaction/Categories/Category";
import Wallet from "../../../../Transaction/Wallet";
import {
	TypeBlockWrapper,
	TypeBlockTitle,
	TypeItem,
	TypeBlockItemsWrapper,
} from "./TypeBlock.styles";

const ExpenseBlock = (props: {
	wallet: Wallet;
	categories: { [name: string]: Category };
	type: string;
	select: (type: string, category: Category) => void;
}) => {
	let categoriesArray = [];

	categoriesArray = Object.keys(props.categories).map((categoryName) => {
		const category = props.categories[categoryName];
		let amount = 0;
		try {
			amount = props.wallet.getAmountByTransactionCategoryName(category.name);
		} catch (err) {}
		return (
			<TypeItem
				className="type-block__category-item"
				color={category.color}
				amount={amount}
				key={category.name}
				onClick={() => props.select(props.type, category)}
			>
				<h1 className="type-block__category-item_name">{category.name}</h1>
				<div className="type-block__category-item_ico-wrapper">
					<category.ico className="expense-block__category-item_ico" />
				</div>
				<p className="type-block__category-item_amount">{amount}$</p>
			</TypeItem>
		);
	});
	return (
		<TypeBlockWrapper className={"type-block type-block-" + props.type.toLowerCase()}>
			<TypeBlockTitle className="type-block_title">Expense</TypeBlockTitle>
			<TypeBlockItemsWrapper className="type-block_category-items-wrapper">
				{categoriesArray}
			</TypeBlockItemsWrapper>
		</TypeBlockWrapper>
	);
};

export default ExpenseBlock;
