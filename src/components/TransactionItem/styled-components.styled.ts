import styled, { css } from "styled-components";
import { ThemeType } from "../../Theme/Theme";

/*------------------------------------------------------------------------------------------*/
// Transaction Date part

export const TransactionItemDate = styled.time<{ theme: ThemeType }>`
	height: auto;
	background-color: ${(props) => props.theme.colors.background.menu};
	color: ${(props) => props.theme.colors.text.primary};

	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));

	text-align: start;
	padding: 0.25rem 0.5rem;
`;

export const DayNumber = styled.div<{ theme: ThemeType }>`
	display: inline-block;
	color: ${(props) => props.theme.colors.text.special};
	font-size: ${(props) => props.theme.fontSizes.large};
`;

export const DateWrapper = styled.div`
	display: inline-block;
	text-transform: uppercase;
	margin-left: 0.5rem;
`;

export const DateValue = styled.span<{ textDay?: boolean; theme: ThemeType }>`
	display: block;
	font-size: ${(props) => props.theme.fontSizes.title};

	${(props) =>
		props.textDay &&
		css`
			color: ${(props) => props.theme.colors.text.secondary};
		`}
`;

export const DateSum = styled.div<{ theme: ThemeType; isPositive: boolean }>`
	color: ${(props) => props.theme.colors.text.expense};
	font-size: ${(props) => props.theme.fontSizes.preLarge};

	${(props) =>
		props.isPositive &&
		css`
			color: ${(props) => props.theme.colors.text.income};
		`}

	display: inline-flex;
	align-items: center;
	justify-content: flex-end;
`;
/*------------------------------------------------------------------------------------------*/
// Transaction Item part

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

export const TransactionAmmount = styled.div<{ income?: boolean }>`
	color: ${(props) => props.theme.colors.text.expense};
	font-size: ${(props) => props.theme.fontSizes.preLarge};

	${(props) =>
		props.income &&
		css`
			color: ${(props) => props.theme.colors.text.income};
		`}

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

/*------------------------------------------------------------------------------------------*/
// Transaction Group part

export const TransactionGroupArticle = styled.article`
	min-width: 17.5rem;
	max-width: 48rem;

	.transaction-item:last-child {
		border: none;
		box-shadow: 0 2px 1px -2px black;
	}

	&:hover {
		box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.25);
	}
`;
