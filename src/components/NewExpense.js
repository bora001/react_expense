import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [input, setInput] = useState({});

  const changeData = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.target.reset();
    props.sendData(input);
    props.sendStatus(false);
  };
  const cancelForm = () => {
    props.sendStatus(false);
  };

  return (
    <div>
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
          <button onClick={cancelForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
