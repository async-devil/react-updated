import styled from "styled-components";

export const BalancesCardWrapper = styled.div`
	width: 12rem;
	height: auto;

	position: relative;
	top: 0px;
	right: 0px;

	background-color: ${(props) => props.theme.colors.background.paper};
	box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.25);

	padding-bottom: 0.3rem;
`;

export const BalancesCardTitle = styled.div`
	height: 1.5rem;
	margin-bottom: 0.3rem;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${(props) => props.theme.colors.text.secondary};
	border-bottom: 2px solid ${(props) => props.theme.colors.divider};

	text-align: center;
	text-transform: uppercase;
	font-size: 0.8rem;
`;
