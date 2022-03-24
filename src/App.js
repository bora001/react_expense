import React, { useState } from "react";
import NewExpense from "./components/NewExpense";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";

function App() {
  const [expenseOrigin, setExpenseOrigin] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

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

  return (
    <div className="expense_cnt">
      <h2>Account book</h2>
      <NewExpense sendData={getData} />
      <ExpenseFilter sendData={getMonth} />
      <ExpenseItem data={expenseData} />
    </div>
  );
}

export default App;
