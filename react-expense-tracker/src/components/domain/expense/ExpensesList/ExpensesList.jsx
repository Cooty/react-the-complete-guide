import "components/domain/expense/ExpensesList/ExpensesList.css";
import ExpenseItem from "components/domain/expense/ExpenseItem/ExpenseItem";

function ExpensesList({ expensesByYear, year }) {
    if (expensesByYear.length === 0) {
        return (
            <p role="alert" className="expenses-list__fallback">
                {`No expenses found the year ${year}`}
            </p>
        );
    }

    return (
        expensesByYear.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={typeof expense.date === Date ? expense.date : new Date(expense.date) }
            />
        ))
    );
}

export default ExpensesList;
