import styled, { css } from "styled-components";

/*------------------------------------------------------------------------------------------*/
// Expense Date part

export const ExpenseItemDate = styled.time`
	height: auto;
	background-color: #272727;
	color: white;

	display: block;

	text-align: start;
	padding: 0.25rem 0.5rem;
`;

export const DayNumber = styled.div`
	display: inline-block;
	color: gainsboro;
	font-size: 2rem;
`;

export const DateWrapper = styled.div`
	display: inline-block;
	text-transform: uppercase;
	margin-left: 0.5rem;
`;

export const DateValue = styled.span<{ textDay?: boolean }>`
	display: block;
	font-size: 0.7rem;

	${(props) =>
		props.textDay &&
		css`
			color: lightgray;
		`}
`;

/*------------------------------------------------------------------------------------------*/
// Expense Item part

export const ExpenseItemArticle = styled.div`
	color: white;
	border-bottom: 0.08rem solid #444444;
`;

export const ExpenseItemDescription = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));

	background-color: #363636;
	padding: 0.25rem 0.5rem;
`;

export const ExpenseInfo = styled.div`
	display: inline-block;
`;

export const ExpenseCategory = styled.div`
	display: inline-block;
	margin-left: 0.5rem;
`;

export const ExpenseCategoryValue = styled.span<{ paymentMethod?: boolean }>`
	display: block;
	font-size: 0.8rem;

	${(props) =>
		props.paymentMethod &&
		css`
			font-size: 0.7rem;
			color: lightgray;
		`}
`;

export const ExpensePrice = styled.div`
	color: tomato;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

/*------------------------------------------------------------------------------------------*/
// Expense Group part

export const ExpenseGroupArticle = styled.article`
	min-width: 17.5rem;
	max-width: 48rem;

	.expense-item:last-child {
		border: none;
		box-shadow: 0 2px 1px -2px black;
	}
`;
