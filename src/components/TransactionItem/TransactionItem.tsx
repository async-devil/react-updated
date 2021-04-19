import Transaction from "../../Transaction/Transaction";
import {
	TransactionItemArticle,
	TransactionItemDescription,
	TransactionInfo,
	TransactionCategory,
	TransactionCategoryValue,
	TransactionAmmount,
} from "./styled-components.styled";

const TransactionItem = (props: { transaction: Transaction }) => {
	return (
		<TransactionItemArticle className="transaction-item">
			<TransactionItemDescription className="transaction-item__description">
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
		</TransactionItemArticle>
	);
};

export default TransactionItem;
