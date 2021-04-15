import styled from "styled-components";
import { ReactNode } from "react";

const StyledWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 1200px;

	display: grid;
	justify-items: stretch;
	align-items: center;
	padding: 0.25rem;

	grid-template-columns: repeat(1, minmax(0, 1fr));

	@media (min-width: 768px) {
		padding: 0;
		.expense-group {
			padding: 0.25rem;
		}
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
