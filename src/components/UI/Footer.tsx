import BarChartIcon from "@material-ui/icons/BarChart";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import ReceiptIcon from "@material-ui/icons/Receipt";
import styled, { css } from "styled-components";

import { ThemeType } from "../../Theme/Theme";

const StyledFooter = styled.footer<{ theme: ThemeType }>`
	width: 100%;
	height: ${(props) => props.theme.height.footer};

	position: fixed;
	left: 0;
	bottom: 0;

	display: flex;
	align-content: center;

	opacity: 0.95;
	background-color: ${(props) => props.theme.colors.background.default};
`;

const FooterWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 430px;

	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	justify-items: center;
	align-items: center;
`;

const Button = styled.div<{ active?: boolean; theme: ThemeType }>`
	cursor: pointer;
	display: inline-block;

	vertical-align: middle;
	text-align: center;

	padding: 0.25rem 1rem 0.25rem 1rem;

	color: ${(props) => props.theme.colors.text.secondary};

	${(props) =>
		props.active &&
		css`
			color: ${(props) => props.theme.colors.text.primary};
			opacity: 1;
		`}

	&:hover {
		color: ${(props) => props.theme.colors.text.primary};
		opacity: 1;
	}

	.footer__button_icon {
		display: block;
		margin: 0 auto 0 auto;
	}

	@media (max-width: 428px) {
		font-size: 0.9rem;
	}

	@media (max-width: 355px) {
		.footer__button_icon {
			font-size: 1.5rem;
		}

		.footer__button_title {
			display: none;
		}
	}
`;

const Footer = ({ activePageIndex }: { activePageIndex: number }) => {
	return (
		<StyledFooter>
			<FooterWrapper className="footer-wrapper">
				<Button className="footer-wrapper__button" active={activePageIndex === 1 ? true : false}>
					<CreditCardIcon className="footer__button_icon"></CreditCardIcon>
					<span className="footer-wrapper__button_title">Accounts</span>
				</Button>
				<Button className="footer-wrapper__button" active={activePageIndex === 2 ? true : false}>
					<DataUsageIcon className="footer__button_icon"></DataUsageIcon>
					<span className="footer__button_title">Categories</span>
				</Button>
				<Button className="footer-wrapper__button" active={activePageIndex === 3 ? true : false}>
					<ReceiptIcon className="footer__button_icon"></ReceiptIcon>
					<span className="footer__button_title">Transactions</span>
				</Button>
				<Button className="footer-wrapper__button" active={activePageIndex === 4 ? true : false}>
					<BarChartIcon className="footer__button_icon"></BarChartIcon>
					<span className="footer-wrapper__button_title">Overview</span>
				</Button>
			</FooterWrapper>
		</StyledFooter>
	);
};

export default Footer;
