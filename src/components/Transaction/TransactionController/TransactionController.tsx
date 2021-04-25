import React from "react";
import Transaction from "../../../Transaction/Transaction";
import AutosizeInput from "react-input-autosize";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import FromOrTo from "./FromOrTo";
import {
	Controller,
	ControllerWrapper,
	FromAndToComponent,
	Amount,
	AmountText,
	AmountInputWrapper,
	TitleWrapper,
	DateWrapper,
	ButtonsWrapper,
	Icon,
	IconWrapper,
} from "./TransactionController.styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const TransactionController = (props: {
	transaction: Transaction;
	close: () => any;
	changeTitleHandler: (eventValue: string, id: string) => void;
	changeAmountHandler: (eventValue: string, id: string) => void;
	changeDateHandler: (eventValue: Date, id: string) => void;
	deleteTransaction: (id: string) => void;
}) => {
	const [titleHandlerValue, updateTitleHandlerValue] = React.useState(
		props.transaction.details.title || ""
	);
	const [amountHandlerValue, updateAmountHandlerValue] = React.useState(
		props.transaction.details.amount.toString()
	);
	const [dateHandlerValue, updateDateHandlerValue] = React.useState(props.transaction.details.date);

	return (
		<Controller className="transaction-controller">
			<ControllerWrapper className="transaction-controller__wrapper">
				<FromAndToComponent className="transaction-controller__wrapper__from-or-to-components">
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
									event.target.value.replace(/([^\d.])|((?<=\.\d{2}).)|((?<=\..*)\.)/gm, "")
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
				<DateWrapper>
					<DatePicker
						dateFormat="yyyy/MM/dd"
						selected={dateHandlerValue}
						onChange={(date: Date) => updateDateHandlerValue(date)}
						onSelect={(date) => updateDateHandlerValue(date)}
					/>
				</DateWrapper>
				<ButtonsWrapper>
					<IconWrapper>
						<Icon
							type="delete"
							onClick={() => {
								props.deleteTransaction(props.transaction.details.id);
								props.close();
							}}
						>
							<DeleteIcon />
						</Icon>
						<p>Delete</p>
					</IconWrapper>
					<IconWrapper>
						<Icon type="exit" onClick={props.close}>
							<ExitToAppIcon />
						</Icon>
						<p>Exit</p>
					</IconWrapper>
					<IconWrapper>
						<Icon
							type="save"
							onClick={() => {
								props.changeTitleHandler(titleHandlerValue, props.transaction.details.id);
								props.changeAmountHandler(amountHandlerValue, props.transaction.details.id);
								props.changeDateHandler(dateHandlerValue, props.transaction.details.id);
								props.close();
							}}
						>
							<SaveIcon />
						</Icon>
						<p>Save</p>
					</IconWrapper>
				</ButtonsWrapper>
			</ControllerWrapper>
		</Controller>
	);
};

export default TransactionController;
