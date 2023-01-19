import React, { useState } from "react";
import Items from "./Items";
import Filter from "./Filter";

import "./Card.css";

const Card = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.object.filter((item) => {
    return item.year.toString() === filteredYear;
  });

  let expensesData = <p className="alert">No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesData = filteredExpenses.map((item) => (
      <Items
        key={item.id}
        title={item.title}
        price={item.price}
        year={item.year}
        month={item.month}
        day={item.day}
      />
    ));
  }

  return (
    <div className="card-container">
      <Filter onChangeFilter={onChangeFilter} selected={filteredYear} />
      {expensesData}
    </div>
  );
};

export default Card;
