// Create a new component
// use a dropdown and use a filter
// listen to changes on dropdown
// picked year value is forwarded to expenses component
// save slice of state in expenses with value

import "./ExpensesFilter.css";

import React from "react";

const ExpensesFilter = props => {
  const dropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
