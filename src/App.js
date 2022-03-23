import React, { useState } from "react";
import NewExpense from "./components/NewExpense";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const [expenseData, setExpenseData] = useState([]);

  const getData = (newData) => {
    console.log(newData);
    setExpenseData([...expenseData, newData]);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense sendData={getData} />
      <ExpenseItem data={expenseData} />
    </div>
  );
}

export default App;
