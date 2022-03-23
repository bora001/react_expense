import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
    console.log("change title", e.target.value);
  };
  const changeAmount = (e) => {
    setAmount(e.target.value);
    console.log("change Amount", e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
    console.log("change Date", e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      title,
      amount,
      date,
    };
    console.log("submit!", data);
  };

  return (
    <div>
      <form className="create_expense" onSubmit={submitForm}>
        <div>
          <label>Title</label>
          <input type="text" onChange={changeTitle} required />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" onChange={changeAmount} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" onChange={changeDate} required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
