import { useState } from 'react';
import "components/domain/expense/NewExpense/NewExpense.css";
import ExpenseForm from "components/domain/expense/NewExpense/ExpenseForm";

function NewExpense({ onNewExpense }) {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseHandler = (expense) => {
        expense.amount = parseInt(expense.amount, 10);
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        onNewExpense(expenseData);
        setShowForm(false);
    }
    
    return (
        <div className="new-expense">
            {
                showForm ? (
                    <ExpenseForm 
                        onSaveExpense={saveExpenseHandler}
                        onCancel={() => {setShowForm(false)}}
                    />
                ) : (
                    <button type="button" onClick={() => {setShowForm(true)}}>
                        Add New Expense
                    </button>
                )
            }
        </div>
    );
}

export default NewExpense;