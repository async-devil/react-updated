import styled, { css } from "styled-components";

export const TypeBlockWrapper = styled.div`
	width: 100%;
`;

export const TypeBlockItemsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-items: center;
	align-items: center;
`;

export const TypeBlockTitle = styled.div`
	width: 100%;

	text-align: center;
	text-transform: uppercase;

	padding: 0.6rem 0 0.6rem 0;

	background-color: ${(props) => props.theme.colors.background.menu};
	color: ${(props) => props.theme.colors.text.primary};

	border-bottom: 2px solid ${(props) => props.theme.colors.divider};
`;

export const TypeItem = styled.div<{ color: string; amount: number }>`
	width: 4rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	text-align: center;

	padding: 0.5rem 1rem 0.5rem 1rem;

	cursor: pointer;

	p {
		width: 100%;

		font-size: 0.75rem;

		color: ${(props) => props.color};
	}

	h1 {
		width: 100%;

		font-size: 0.8rem;
		font-weight: normal;

		color: ${(props) => props.theme.colors.text.primary};
	}

	div {
		width: 2.5rem;
		height: 2.5rem;

		margin: 0.3rem auto 0.3rem auto;

		background-color: ${(props) => props.color};
		color: #fff;
		cursor: pointer;

		border: 1px solid transparent;
		border-radius: 30px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:hover {
		color: white;
		background-color: ${(props) => props.color};

		border: 0px solid transparent;
		border-radius: 2px;

		p {
			color: white;
		}
		h1 {
			color: white;
		}
		div {
			background-color: white;
			color: ${(props) => props.color};
		}
	}

	${(props) => {
		if (props.amount === 0)
			return css`
				p {
					color: ${(props) => props.theme.colors.text.secondary};
				}
				h1 {
					color: ${(props) => props.theme.colors.text.special};
				}
				div {
					background-color: ${(props) => props.color}55;
				}
			`;
	}}
`;
