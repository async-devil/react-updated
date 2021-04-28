import styled from "styled-components";

export const TransactionAdd = styled.div`
	height: 18;
	width: 100%;

	position: fixed;
	right: 0px;
	left: 0px;
	bottom: 0px;

	z-index: 1;
	background-color: ${(props) => props.theme.colors.background.paper};

	.delete-button {
		display: none;
	}
`;

export const TransactionAddWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 430px;

	.type-block_category-items-wrapper {
		width: 100%;

		margin: 1rem 0 1rem 0;

		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.type-block-income {
		.type-block_category-items-wrapper {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.type-block_title {
		display: none;
	}
`;

export const TransactionAddTypeSelector = styled.div<{ selectedIndex: number }>`
	width: 100%;

	color: ${(props) => props.theme.colors.text.secondary};
	background-color: ${(props) => props.theme.colors.background.menu};

	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));

	text-align: center;
	text-transform: uppercase;
	font-size: 0.9rem;

	box-shadow: 0 0.7px 1.1px -5px rgba(0, 0, 0, 0.045), 0 2.2px 3.6px -5px rgba(0, 0, 0, 0.076),
		0 10px 16px -5px rgba(0, 0, 0, 0.14);

	p {
		padding: 0.8rem 0 0.8rem 0;

		&:nth-child(${(props) => 1 + props.selectedIndex}) {
			border-bottom: 2px solid ${(props) => props.theme.colors.divider};
		}

		&:hover {
			color: ${(props) => props.theme.colors.text.special};
		}
	}
`;
