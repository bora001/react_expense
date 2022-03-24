import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [input, setInput] = useState({});
  const [createStatus, setCreateStatus] = useState(false);

  const changeData = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.target.reset();
    props.sendData(input);
  };

  const createForm = (e) => {
    setCreateStatus(e.target.value);
  };

  return (
    <div>
      {createStatus ? (
        <form className="create_expense" onSubmit={submitForm}>
          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={changeData} required />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" name="amount" onChange={changeData} required />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              onChange={changeData}
              min="2022-01-01"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button onClick={createForm}>Cancel</button>
          </div>
        </form>
      ) : (
        <button value={true} onClick={createForm}>
          Create Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
