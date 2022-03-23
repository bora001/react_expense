import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense_item">
      <div className="expense_item_desc">
        <div>March 23th 2021</div>
        <h2>Car Insurance</h2>
        <p className="expense_item_price">$294.67</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
