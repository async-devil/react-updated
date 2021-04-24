import Transaction from "../../Transaction/Transaction";
import {
	TransactionItemArticle,
	TransactionItemDescription,
	TransactionInfo,
	TransactionCategory,
	TransactionCategoryValue,
	TransactionAmmount,
} from "./styled-components.styled";
import TransactionController from "./TransactionController";

const TransactionItem = (props: {
	transaction: Transaction;
	deleteTransaction: (id: string) => void;
	transactionController: {
		controllerState: {
			open: boolean;
			id: string;
		};
		open: (id: string) => void;
		close: () => void;
		changeTitleHandler: (eventValue: string, id: string) => void;
		changeAmountHandler: (eventValue: string, id: string) => void;
	};
}) => {
	return (
		<TransactionItemArticle className="transaction-item">
			<TransactionItemDescription
				className="transaction-item__description"
				onClick={() => {
					props.transactionController.open(props.transaction.details.id);
				}}
			>
				<TransactionInfo>
					<props.transaction.details.category.ico
						style={{
							color: props.transaction.details.category.color,
						}}
					/>
					<TransactionCategory>
						<TransactionCategoryValue className="transaction-item__description_category">
							{props.transaction.details.category.name}
						</TransactionCategoryValue>
						<TransactionCategoryValue
							paymentMethod={true}
							className="transaction-item__description_payment-method"
						>
							{props.transaction.details.paymentMethod.name}
						</TransactionCategoryValue>
					</TransactionCategory>
				</TransactionInfo>
				<TransactionAmmount
					className="transaction-item__description_details"
					income={props.transaction.details.type === "Income"}
				>
					<p>
						{props.transaction.details.type === "Income" ? "+ " : "- "}
						{props.transaction.details.amount}$
					</p>
				</TransactionAmmount>
			</TransactionItemDescription>
			{props.transactionController.controllerState.open &&
				props.transactionController.controllerState.id === props.transaction.details.id && (
					<TransactionController
						transaction={props.transaction}
						close={props.transactionController.close}
						changeTitleHandler={props.transactionController.changeTitleHandler}
						changeAmountHandler={props.transactionController.changeAmountHandler}
					/>
				)}
		</TransactionItemArticle>
	);
};

export default TransactionItem;
