import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const getData = (e) => {
    props.sendData(e.target.value);
  };
  return (
    <div className="expense_filter">
      <h3>Filter By Month</h3>
      <select onChange={getData} defaultValue="00">
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="00">All</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
