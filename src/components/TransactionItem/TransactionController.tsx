import React from "react";
import styled, { css } from "styled-components";
import Category from "../../Transaction/Categories/Category";
import PaymentMethod from "../../Transaction/Categories/PaymentMethod";
import Transaction from "../../Transaction/Transaction";
import AutosizeInput from "react-input-autosize";

const FromOrToWrapper = styled.div<{ categoryOrPaymentMethod: Category | PaymentMethod }>`
	height: inherit;

	background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%234000000' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
	background-color: ${(props) => props.categoryOrPaymentMethod.color};

	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	place-content: center;
`;

const Description = styled.div`
	grid-column: span 2 / span 2;
	padding-left: 0.6rem;
`;
const DescriptionText = styled.p<{ propertyName?: boolean }>`
	color: white;
	font-size: 0.67rem;

	${(props) =>
		props.propertyName &&
		css`
			font-size: 1.2rem;
		`}
`;

const Icon = styled.div`
	background-color: white;
	border: 1px solid white;
	border-radius: 5px;

	justify-self: center;
	margin-right: 0.6rem;

	height: 2rem;
	width: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	bottom: 1.5rem;
`;

const FromOrTo = (props: {
	type: string;
	categoryOrPaymentMethod: Category | PaymentMethod;
	from: boolean;
}) => {
	return (
		<FromOrToWrapper
			className="from-or-to-components__component"
			categoryOrPaymentMethod={props.categoryOrPaymentMethod}
		>
			<Description className="from-or-to-components__component_description">
				<DescriptionText className="from-or-to-components__component_description_text">
					{props.from ? "From " : "To "}
					{(props.type === "Income" && props.from) || (props.type !== "Income" && !props.from)
						? "category"
						: "account"}
				</DescriptionText>
				<DescriptionText
					className="from-or-to-components__component_description_text"
					propertyName={true}
				>
					{props.categoryOrPaymentMethod.name}
				</DescriptionText>
			</Description>
			<Icon className="from-or-to-components__component_description_icon">
				<props.categoryOrPaymentMethod.ico style={{ color: props.categoryOrPaymentMethod.color }} />
			</Icon>
		</FromOrToWrapper>
	);
};

const Controller = styled.div`
	height: 18.75rem;
	width: 100%;

	position: fixed;
	right: 0px;
	left: 0px;
	bottom: 0px;

	z-index: 1;
	background-color: ${(props) => props.theme.colors.background.paper};
`;

const ControllerWrapper = styled.div`
	margin: 0 auto 0 auto;
	max-width: 430px;
`;

const FromAndToComponent = styled.div`
	width: inherit;
	height: 3.3rem;

	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Amount = styled.div<{ income?: boolean }>`
	width: inherit;
	height: 2.5rem;

	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;

	padding: 0.6rem 0 0.6rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.divider};

	color: ${(props) => props.theme.colors.text.expense};
	${(props) =>
		props.income &&
		css`
			color: ${(props) => props.theme.colors.text.income};
		`}
`;
const AmountText = styled.div<{ amount?: boolean }>`
	font-size: 0.67rem;
`;

const AmountInputWrapper = styled.div<{ income?: boolean }>`
	display: flex;
	justify-content: center;
	font-size: 1.7rem;

	.transaction-controller__wrapper__amount_input-wrapper_input input {
		font-size: 1.7rem;
		height: 1.6rem;
		width: 4.5rem;

		margin-left: 0.5rem;
		padding: 0;

		background-color: ${(props) => props.theme.colors.background.paper};
		border: none;

		color: ${(props) => props.theme.colors.text.expense};
		${(props) =>
			props.income &&
			css`
				color: ${(props) => props.theme.colors.text.income};
			`}

		&::-ms-clear {
			display: none;
		}
		&:focus {
			padding-bottom: 0.2rem;
			border-bottom: 1px solid ${(props) => props.theme.colors.divider};
			outline: none;
		}
	}
`;

const TitleWrapper = styled.div`
	width: inherit;
	height: 1.8rem;
	padding: 0.6rem 0 0.6rem 0;

	display: flex;
	justify-content: center;

	.transaction-controller__wrapper__title_input input {
		font-size: 1rem;
		height: 1.4rem;
		width: 10rem;

		padding: 0;

		color: ${(props) => props.theme.colors.text.secondary};
		background-color: ${(props) => props.theme.colors.background.paper};
		border: none;

		&::-ms-clear {
			display: none;
		}
		&:focus {
			padding-bottom: 0.2rem;
			border-bottom: 1px solid ${(props) => props.theme.colors.divider};
			color: ${(props) => props.theme.colors.text.primary};
			outline: none;
		}
	}
`;

const TransactionController = (props: {
	transaction: Transaction;
	close: () => any;
	changeTitleHandler: (eventValue: string, id: string) => void;
	changeAmountHandler: (eventValue: string, id: string) => void;
}) => {
	const [titleHandlerValue, updateTitleHandlerValue] = React.useState(
		props.transaction.details.title || ""
	);
	const [amountHandlerValue, updateAmountHandlerValue] = React.useState(
		props.transaction.details.amount.toString()
	);

	return (
		<Controller className="transaction-controller">
			<ControllerWrapper className="transaction-controller__wrapper">
				<FromAndToComponent
					className="transaction-controller__wrapper__from-or-to-components"
					onClick={() => {
						props.changeTitleHandler(titleHandlerValue, props.transaction.details.id);
						props.changeAmountHandler(amountHandlerValue, props.transaction.details.id);
						props.close();
					}}
				>
					<FromOrTo
						type={props.transaction.details.type}
						categoryOrPaymentMethod={
							props.transaction.details.type === "Income"
								? props.transaction.details.category
								: props.transaction.details.paymentMethod
						}
						from={true}
					></FromOrTo>
					<FromOrTo
						type={props.transaction.details.type}
						categoryOrPaymentMethod={
							props.transaction.details.type === "Income"
								? props.transaction.details.paymentMethod
								: props.transaction.details.category
						}
						from={false}
					></FromOrTo>
				</FromAndToComponent>
				<Amount
					className="transaction-controller__wrapper__amount"
					income={props.transaction.details.type === "Income"}
				>
					<AmountText className="transaction-controller__wrapper__amount_text">
						{props.transaction.details.type}
					</AmountText>
					<AmountInputWrapper
						className="transaction-controller__wrapper__amount_input-wrapper"
						income={props.transaction.details.type === "Income"}
					>
						<AutosizeInput
							className="transaction-controller__wrapper__amount_input-wrapper_input"
							type="text"
							placeholder="0"
							value={amountHandlerValue}
							onChange={(event) =>
								updateAmountHandlerValue(
									event.target.value.replace(/([^\d.,])|((?<=\.\d{2}).)|((?<=\..*)\.)/gm, "")
								)
							}
						/>
						<span className="transaction-controller__wrapper__amount_input-wrapper_dollar-sign">
							$
						</span>
					</AmountInputWrapper>
				</Amount>
				<TitleWrapper className="transaction-controller__wrapper__title">
					<AutosizeInput
						className="transaction-controller__wrapper__title_input"
						type="text"
						placeholder={"Title..."}
						value={titleHandlerValue}
						onChange={(event) => {
							updateTitleHandlerValue(event.target.value);
						}}
					/>
				</TitleWrapper>
			</ControllerWrapper>
		</Controller>
	);
};

export default TransactionController;
