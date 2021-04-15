import styled, { css } from "styled-components";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import ReceiptIcon from "@material-ui/icons/Receipt";
import BarChartIcon from "@material-ui/icons/BarChart";

const StyledFooter = styled.footer`
	width: 100%;

	display: flex;
	justify-content: center;

	position: fixed;
	left: 0;
	bottom: 0;

	opacity: 0.95;
	background-color: #444;
`;

const FooterWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 1200px;
`;

const Button = styled.div<{ active?: boolean }>`
	display: inline-block;
	text-align: center;

	padding: 0.25rem 1rem 0.25rem 1rem;

	color: #a7a7a7;

	${(props) =>
		props.active &&
		css`
			color: #fff;
			opacity: 1;
		`}

	&:hover {
		color: #fff;
		opacity: 1;
	}

	.footer__button_icon {
		display: block;
		margin: 0 auto 0 auto;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterWrapper>
				<Button className="footer__button">
					<CreditCardIcon className="footer__button_icon"></CreditCardIcon>
					<span className="footer__button_title">Accounts</span>
				</Button>
				<Button className="footer__button">
					<DataUsageIcon className="footer__button_icon"></DataUsageIcon>
					<span className="footer__button_title">Categories</span>
				</Button>
				<Button className="footer__button">
					<ReceiptIcon className="footer__button_icon"></ReceiptIcon>
					<span className="footer__button_title">Transactions</span>
				</Button>
				<Button className="footer__button">
					<BarChartIcon className="footer__button_icon"></BarChartIcon>
					<span className="footer__button_title">Overview</span>
				</Button>
			</FooterWrapper>
		</StyledFooter>
	);
};

export default Footer;
