import styled, { css } from "styled-components";

export const BalanceCardItemWrapper = styled.div<{ special: boolean }>`
	width: 11rem;
	height: 1.8rem;

	padding: 0.3rem 0.5rem 0.3rem 0.5rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.divider};

	&:last-child {
		border-bottom: none;
	}

	&:nth-child(3) {
		border-top: 1px solid ${(props) => props.theme.colors.divider};
	}

	display: inline-flex;
	align-content: center;
	align-items: center;

	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;

	${(props) =>
		props.special &&
		css`
			background-color: #009989;
			margin-bottom: 0.4rem;
			p {
				color: ${(props) => props.theme.colors.text.primary} !important;
			}
		`};
`;

export const BalanceIcon = styled.div<{ background: string; color: string }>`
	width: 2rem;
	height: 1.5rem;

	background-color: ${(props) => props.background};
	color: ${(props) => props.color};

	border: 1px solid transparent;
	border-radius: 2px;
`;

export const BalanceProps = styled.div`
	margin-left: 0.5rem;

	color: ${(props) => props.theme.colors.text.primary};
	font-size: 0.76rem;

	text-align: start;
`;

export const BalanceAmount = styled.p<{ amount: number }>`
	${(props) => {
		if (props.amount > 0)
			return css`
				color: ${props.theme.colors.text.income};
			`;
		if (props.amount < 0)
			return css`
				color: ${props.theme.colors.text.expense};
			`;
		if (props.amount === 0)
			return css`
				color: ${props.theme.colors.text.secondary};
			`;
	}}
`;
