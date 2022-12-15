import "components/domain/expense/ExpenseDate/ExpenseDate.css";
import { getDateParts } from "utils/date-time";

function ExpenseDate({date}) {
    const { year, month, day } = getDateParts(date);

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;