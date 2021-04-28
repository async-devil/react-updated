import styled, { css } from "styled-components";

import { ThemeType } from "../../../Theme/Theme";

export const TransactionItemArticle = styled.div<{ theme: ThemeType }>`
	color: white;
	border-bottom: 0.08rem solid ${(props) => props.theme.colors.divider};
`;

export const TransactionItemDescription = styled.div<{ theme: ThemeType }>`
	cursor: pointer;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));

	background-color: ${(props) => props.theme.colors.background.paper};
	padding: 0.25rem 0.5rem;

	&:hover {
		background-color: ${(props) => props.theme.colors.action.hover};
	}
`;

export const TransactionInfo = styled.div<{ theme: ThemeType }>`
	display: inline-block;

	svg {
		border-right: 0.08rem solid ${(props) => props.theme.colors.divider};
		padding-right: 0.25rem;
	}
`;

export const TransactionCategory = styled.div`
	display: inline-block;
	margin-left: 0.5rem;
`;

export const TransactionCategoryValue = styled.span<{ paymentMethod?: boolean; theme: ThemeType }>`
	display: block;
	font-size: ${(props) => props.theme.fontSizes.big};

	${(props) =>
		props.paymentMethod &&
		css`
			font-size: ${(props) => props.theme.fontSizes.title};
			color: ${(props) => props.theme.colors.text.secondary};
		`}
`;

export const TransactionAmmount = styled.div<{ amount: number; income?: boolean }>`
	color: ${(props) => props.theme.colors.text.expense};
	font-size: ${(props) => props.theme.fontSizes.preLarge};

	${(props) => {
		if (props.amount === 0) {
			return css`
				color: ${(props) => props.theme.colors.text.secondary};
			`;
		}
		if (props.income) {
			return css`
				color: ${(props) => props.theme.colors.text.income};
			`;
		}
	}}

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
