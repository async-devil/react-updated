import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SaveIcon from "@material-ui/icons/Save";
import currency from "currency.js";
import DatePicker from "react-datepicker";
import AutosizeInput from "react-input-autosize";

import Transaction, { TransactionDetails } from "../../../Transaction/Transaction";
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

const TransactionController = (props: {
	transaction: Transaction;
	close: () => void;
	saveTransaction: (transaction: TransactionDetails) => void;
	deleteTransaction: (id: string) => void;
}) => {
	const [title, updateTitle] = useState(props.transaction.details.title);
	const [amount, updateAmount] = useState(props.transaction.details.amount.toString());
	const [date, updateDate] = useState(props.transaction.details.date);

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
							value={amount}
							onChange={(event) => {
								updateAmount(
									event.target.value.replace(/([^\d.])|((?<=\.\d{2}).)|((?<=\..*)\.)/gm, "")
								);
							}}
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
						value={title}
						onChange={(event) => {
							updateTitle(event.target.value);
						}}
					/>
				</TitleWrapper>
				<DateWrapper className="transaction-controller__wrapper__date">
					<DatePicker
						dateFormat="yyyy/MM/dd"
						selected={date}
						onChange={(date: Date) => updateDate(date)}
						onSelect={(date: Date) => updateDate(date)}
					/>
				</DateWrapper>
				<ButtonsWrapper className="transaction-controller__wrapper__buttons">
					<IconWrapper className="transaction-controller__wrapper__button-wrapper delete-button">
						<Icon
							className="transaction-controller__wrapper__button"
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
					<IconWrapper className="transaction-controller__wrapper__button-wrapper exit-button">
						<Icon
							className="transaction-controller__wrapper__button"
							type="exit"
							onClick={props.close}
						>
							<ExitToAppIcon />
						</Icon>
						<p>Exit</p>
					</IconWrapper>
					<IconWrapper className="transaction-controller__wrapper__button-wrapper save-button">
						<Icon
							className="transaction-controller__wrapper__button"
							type="save"
							onClick={() => {
								props.saveTransaction(
									Object.assign(props.transaction.details, {
										title,
										date,
										amount: currency(amount).value,
									})
								);
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
