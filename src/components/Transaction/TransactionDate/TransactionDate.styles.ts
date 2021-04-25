import styled, { css } from "styled-components";
import { ThemeType } from "../../../Theme/Theme";

export const TransactionItemDate = styled.time<{ theme: ThemeType }>`
	height: auto;
	background-color: ${(props) => props.theme.colors.background.menu};
	color: ${(props) => props.theme.colors.text.special};

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
	color: ${(props) => props.theme.colors.text.primary};

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
