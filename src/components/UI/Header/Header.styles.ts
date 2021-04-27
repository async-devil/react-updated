import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{ isCurrent: boolean }>`
	width: 100%;
	height: ${(props) => props.theme.height.header};

	right: 0px;
	left: 0px;
	top: 0px;

	position: fixed;

	color: white;
	background-color: #444444;
	background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%234e4e4e' fill-opacity='0.53' fill-rule='evenodd'/%3E%3C/svg%3E");
	${(props) =>
		props.isCurrent &&
		css`
			background-color: #009989;
			background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23128379' fill-opacity='0.34' fill-rule='evenodd'/%3E%3C/svg%3E");
		`};
`;

export const HeaderBalanceWrapper = styled.div`
	height: ${(props) => props.theme.height.footer};
	margin: 0.2rem auto 0 auto;
	padding: 0 2rem 0 2rem;
	max-width: 430px;

	display: flex;
	justify-content: space-between;

	.header_icon {
		&:hover {
			color: ${(props) => props.theme.colors.text.special};
		}
	}
`;

export const Menu = styled.div`
	margin-top: 0.3rem;
	width: 1rem;
	height: 1rem;

	cursor: pointer;
`;

export const Sync = styled.div`
	margin-top: 0.3rem;
	width: 1rem;
	height: 1rem;

	cursor: pointer;
`;

export const BalanceInfo = styled.div`
	text-align: center;
`;

export const AccountName = styled.p`
	font-size: 0.7rem;
	margin-bottom: 0.1rem;
	margin-left: 0.3rem;

	&::after {
		margin-left: 0.3rem;
		content: "▼";
	}
`;
export const BalanceAmmount = styled.p`
	font-size: 1rem;
`;
