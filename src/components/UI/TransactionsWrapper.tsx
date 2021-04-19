import styled from "styled-components";
import { ReactNode } from "react";

const StyledWrapper = styled.div`
	margin: 0 auto 3.125rem auto;
	padding: 0.25rem;
	max-width: 1200px;

	display: grid;
	justify-items: stretch;
	align-items: center;

	.expense-group {
		margin-bottom: 0.5rem;
	}

	.expense-group:last-child {
		margin-bottom: 0;
	}

	grid-template-columns: repeat(1, minmax(0, 1fr));

	@media (min-width: 768px) {
		padding: 0;
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
