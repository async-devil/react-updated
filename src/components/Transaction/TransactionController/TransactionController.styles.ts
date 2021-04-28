import styled, { css } from "styled-components";

export const Controller = styled.div`
	height: 16.5rem;
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
	margin: 0.4rem 0 0 0;

	display: flex;
	justify-content: center;

	border-bottom: 1px solid ${(props) => props.theme.colors.divider};

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

export const DateWrapper = styled.div`
	width: inherit;
	height: 1.4rem;

	display: flex;
	justify-content: center;

	background-color: ${(props) => props.theme.colors.background.menuHighlighted};

	.react-datepicker__header {
		text-align: center;
		background-color: ${(props) => props.theme.colors.background.menu};
		border-bottom: 0px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		padding-top: 8px;
		position: relative;

		div {
			color: ${(props) => props.theme.colors.text.primary};
		}

		.react-datepicker__current-month {
			color: ${(props) => props.theme.colors.text.secondary};
		}
	}

	.react-datepicker__day--today {
		background-color: ${(props) => props.theme.colors.background.menu};
	}

	.react-datepicker__day--keyboard-selected {
		background-color: ${(props) => props.theme.colors.background.menu};
	}

	.react-datepicker {
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 0.8rem;

		background-color: ${(props) => props.theme.colors.background.menuHighlighted};
		color: ${(props) => props.theme.colors.text.primary};

		border: 1px solid ${(props) => props.theme.colors.background.paper};
		border-radius: 0;

		box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.25);

		display: inline-block;
		position: relative;
		right: 5.5rem;
	}

	.react-datepicker__day {
		background-color: ${(props) => props.theme.colors.background.paper};
		color: ${(props) => props.theme.colors.text.primary};

		border: 1px solid ${(props) => props.theme.colors.divider};
		border-radius: 5px;

		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}

	.react-datepicker__triangle {
		display: none;
	}

	input {
		font-size: 1rem;
		height: 1.4rem;
		width: 5.4rem;

		padding: 0;

		cursor: pointer;

		color: ${(props) => props.theme.colors.text.secondary};
		background-color: ${(props) => props.theme.colors.background.menuHighlighted};
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

export const ButtonsWrapper = styled.div`
	width: 100%;
	height: 5rem;

	padding: 0.5rem 0 0 0;

	display: flex;
	justify-content: center;
`;

export const Icon = styled.div<{ type: string }>`
	border: 1px solid transparent;
	border-radius: 10px;

	cursor: pointer;

	height: 2.5rem;
	width: 2.5rem;

	margin-bottom: 0.2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	${(props) => {
		if (props.type === "delete")
			return css`
				background-color: #80000055;
				color: #f00;
			`;
		if (props.type === "save")
			return css`
				background-color: #1f838355;
				color: #0cc;
			`;
		if (props.type === "exit")
			return css`
				background-color: #555555;
				color: #a5a5a5;
			`;
	}}
`;

export const IconWrapper = styled.div`
	text-align: center;
	margin: 0 2rem 0 2rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		color: ${(props) => props.theme.colors.text.secondary};
		font-size: 0.75rem;
	}
`;
