import currency from "currency.js";
import {
	TransactionItemDate,
	DayNumber,
	DateWrapper,
	DateValue,
	DateSum,
} from "./TransactionDate.styles";

const TransactionDate = ({ date, sum }: { date: Date; sum: number }) => {
	const year = date.getFullYear();
	const month = date.toLocaleString("en-GB", { month: "long" });
	const day = date.toLocaleString("en-GB", { day: "2-digit" });
	const textDay = date.toLocaleString("en-GB", { weekday: "long" });

	return (
		<TransactionItemDate className="transaction-item__description_date">
			<div>
				<DayNumber>{day}</DayNumber>
				<DateWrapper className="transaction-item__description_date__wrapper">
					<DateValue textDay={true} className="transaction-item_date_text-day">
						{textDay}
					</DateValue>
					<DateValue className="transaction-item_date_text-month-and-year">{`${month} ${year}`}</DateValue>
				</DateWrapper>
			</div>
			<DateSum isPositive={sum >= 0}>
				{currency(sum).value.toString()[0] === "-" ? "- " : "+ "}
				{currency(sum).value.toString().replace("-", "")}$
			</DateSum>
		</TransactionItemDate>
	);
};

export default TransactionDate;
