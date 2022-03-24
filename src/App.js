import React, { useState } from "react";
import NewExpense from "./components/NewExpense";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";

function App() {
  const [expenseOrigin, setExpenseOrigin] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [createStatus, setCreateStatus] = useState(false);

  const getData = (newData) => {
    setExpenseData([...expenseData, newData]);
    setExpenseOrigin([...expenseOrigin, newData]);
  };

  const getMonth = (month) => {
    let filteredExpense = expenseOrigin.filter(
      (a) => a.date.split("-")[1] === month
    );
    if (month === "00") {
      setExpenseData(expenseOrigin);
    } else {
      setExpenseData(filteredExpense);
    }
  };

  const createExpense = (status) => {
    setCreateStatus(status);
  };

  return (
    <div className="expense_cnt">
      <h2>Let's get started!</h2>
      {createStatus ? (
        <NewExpense sendStatus={createExpense} sendData={getData} />
      ) : (
        <button onClick={createExpense}>Create Expense</button>
      )}
      <ExpenseFilter sendData={getMonth} />
      <ExpenseItem data={expenseData} />
    </div>
  );
}

export default App;
