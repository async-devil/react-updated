import { ExpenseItemDate, DayNumber, DateWrapper, DateValue } from "./styled-components.styled";

function ExpenseDate({ date }: { date: Date }) {
	const year = date.getFullYear();
	const month = date.toLocaleString("en-GB", { month: "long" });
	const day = date.toLocaleString("en-GB", { day: "2-digit" });
	const textDay = date.toLocaleString("en-GB", { weekday: "long" });

	return (
		<ExpenseItemDate className="expense-item__description_date">
			<DayNumber>{day}</DayNumber>
			<DateWrapper className="expense-item__description_date__wrapper">
				<DateValue textDay={true} className="expense-item_date_text-day">
					{textDay}
				</DateValue>
				<DateValue className="expense-item_date_text-month-and-year">{`${month} ${year}`}</DateValue>
			</DateWrapper>
		</ExpenseItemDate>
	);
}

export default ExpenseDate;
