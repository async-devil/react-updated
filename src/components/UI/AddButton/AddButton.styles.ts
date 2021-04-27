import styled from "styled-components";

export const AddButtonWrapper = styled.div`
	position: fixed;
	bottom: 4rem;
	right: 0px;

	margin-right: 4vw;

	width: 3rem;
	height: 3rem;

	background-color: #009989;
	color: #fff;
	cursor: pointer;

	border: 1px solid transparent;
	border-radius: 30px;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #006d62;
	}
`;
