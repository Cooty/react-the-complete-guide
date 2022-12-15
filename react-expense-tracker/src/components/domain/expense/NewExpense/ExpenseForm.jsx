import { useState } from "react";
import "components/domain/expense/NewExpense/ExpenseForm.css";
import FormControl from "components/domain/expense/NewExpense/FormControl";

function ExpenseForm({ onSaveExpense, onCancel }) {
    const defaultFormState = {title: '', amount: '', date: ''}
    const [formState, setFormState] = useState(defaultFormState);
    
    const titleChangeHandler = (e) => {
        setFormState((prevState)=> ({
                ...prevState,
                title: e.target.value
            })
        )
    }
    const amountChangeHandler = (e) => {
        setFormState((prevState)=> ({
            ...prevState,
            amount: e.target.value
        }));
    }
    const dateChangeHandler = (e) => {
        setFormState((prevState)=> ({
            ...prevState,
            date: e.target.value
        }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            ...formState,
            date: new Date(formState.date)
        };
        onSaveExpense(formData);
        setFormState(defaultFormState);
    }

    return (
        <form 
            onSubmit={submitHandler}
        >
            <div className="new-expense__controls">
                <FormControl 
                    label="Title"
                    type="text"
                    value={formState.title}
                    onChange={titleChangeHandler}
                />
                <FormControl 
                    label="Amount"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={formState.amount}
                    onChange={amountChangeHandler}
                />
                <FormControl 
                    label="Date"
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={formState.date}
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="reset" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
}

export default ExpenseForm;