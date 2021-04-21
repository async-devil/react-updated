import styled from "styled-components";
import { ReactNode } from "react";
import { ThemeType } from "../../Theme/Theme";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
	margin: ${(props) => props.theme.height.header} auto ${(props) => props.theme.height.footer} auto;
	padding: 0.25rem;
	max-width: 1200px;

	display: grid;
	justify-items: stretch;
	align-items: center;

	.transaction-group {
		margin: 0 0.25rem 0.5rem 0.25rem;
	}

	grid-template-columns: repeat(1, minmax(0, 1fr));

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
`;

const ExpensesWrapper = ({ children }: { children: ReactNode }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default ExpensesWrapper;
