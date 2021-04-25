import styled, { css } from "styled-components";

export const Controller = styled.div`
	height: 18.75rem;
	width: 100%;

	position: fixed;
	right: 0px;
	left: 0px;
	bottom: 0px;

	z-index: 1;
	background-color: ${(props) => props.theme.colors.background.paper};
`;

export const ControllerWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 430px;
`;

export const FromAndToComponent = styled.div`
	width: inherit;
	height: 3.3rem;

	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const Amount = styled.div<{ income?: boolean }>`
	width: inherit;
	height: 2.7rem;

	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;

	padding: 0.6rem 0 0.6rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.divider};

	color: ${(props) => props.theme.colors.text.expense};
	${(props) =>
		props.income &&
		css`
			color: ${(props) => props.theme.colors.text.income};
		`}
`;
export const AmountText = styled.div<{ amount?: boolean }>`
	font-size: 0.67rem;
`;

export const AmountInputWrapper = styled.div<{ income?: boolean }>`
	display: flex;
	justify-content: center;
	font-size: 1.7rem;

	input {
		font-size: 1.7rem;
		height: 1.6rem;
		width: 4.5rem;

		margin-left: 0.5rem;

		background-color: ${(props) => props.theme.colors.background.paper};
		border: none;

		color: ${(props) => props.theme.colors.text.expense};
		${(props) =>
			props.income &&
			css`
				color: ${(props) => props.theme.colors.text.income};
			`}

		&::-ms-clear {
			display: none;
		}
		&:focus {
			outline: none;
		}
	}
`;

export const TitleWrapper = styled.div`
	width: inherit;
	height: 1.8rem;
	padding: 0.6rem 0 0.6rem 0;

	display: flex;
	justify-content: center;

	input {
		font-size: 1rem;
		height: 1.4rem;
		width: 10rem;

		padding: 0;

		color: ${(props) => props.theme.colors.text.secondary};
		background-color: ${(props) => props.theme.colors.background.paper};
		border: none;

		&::-ms-clear {
			display: none;
		}
		&:focus {
			color: ${(props) => props.theme.colors.text.primary};
			outline: none;
		}
	}
`;
