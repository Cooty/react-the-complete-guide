import { useEffect, useState } from "react"
import Expenses from "components/domain/expense/Expenses/Expenses";
import NewExpense from "components/domain/expense/NewExpense/NewExpense";

const EXPENSES_KEY = 'expenses';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const cachedExpenses = JSON.parse(localStorage.getItem(EXPENSES_KEY));

    return cachedExpenses || [];
  });

  const newExpenseHandler = (expense) => {
    setExpenses((prevState)=> {
      return [expense, ...prevState];
    })
  }

  useEffect(() => {
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  }, [expenses])


  return (
    <>
      <NewExpense onNewExpense={newExpenseHandler} />
      
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
