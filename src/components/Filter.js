import React from "react";

import "./Filter.css";

const Filter = (props) => {
  const filterChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="filter-card">
      <label>Filter by year</label>
      <select value={props.selected} onChange={filterChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Filter;
