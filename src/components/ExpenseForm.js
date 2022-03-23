import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div>
      <form className="create_expense">
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
