import "./ExpenseItem.css";
function ExpenseItem(props) {
  console.log(props.data);
  return (
    <>
      {props.data.length > 0 ? (
        props.data.map((item) => (
          <div className="expense_item" key={Math.random() * 9}>
            <div className="expense_item_desc">
              <div>{item.date}</div>
              <h2>{item.title}</h2>
              <p className="expense_item_price">${item.amount}</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Matched Result</p>
        </div>
      )}
    </>
  );
}

export default ExpenseItem;
