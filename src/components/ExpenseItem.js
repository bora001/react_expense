import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <>
      {props.data &&
        props.data.map((item) => (
          <div className="expense_item" key={new Date()}>
            <div className="expense_item_desc">
              <div>{item.date}</div>
              <h2>{item.title}</h2>
              <p className="expense_item_price">${item.amount}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default ExpenseItem;
