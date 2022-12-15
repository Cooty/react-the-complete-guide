import { useState } from "react";
import "components/domain/expense/Expenses/Expenses.css";
import Card from "components/ui/Card/Card";
import ExpensesFilter from "components/domain/expense/ExpenseFilter/ExpenseFilter";
import ExpensesList from "components/domain/expense/ExpensesList/ExpensesList";
import ExpenseChart from "components/domain/expense/ExpenseChart";

function Expenses({ expenses }) {
    const [filter, setFilter] = useState("2021");
    const filterHandler = (filter) => {
        setFilter(filter);
    }
    const byYear = (expense) => {
        const date = typeof expense.date === Date ? expense.date : new Date(expense.date);

        return date.getFullYear() === parseInt(filter, 10);
    }
    const expensesByYear = expenses.filter(byYear);

    return expenses && expenses.length ? (
        <Card className="expenses" as="ul">
            <ExpensesFilter
                selected={filter}
                onFilter={filterHandler}
                as="li"
            />
            <ExpenseChart expensesByYear={expensesByYear} />
            <ExpensesList expensesByYear={expensesByYear} year={filter} />
        </Card>
    ) : null;

}

export default Expenses;
