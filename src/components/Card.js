import React, { useState } from "react";
import Items from "./Items";
import Filter from "./Filter";

import "./Card.css";

const Card = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearArray = props.object.filter((item) => {
    return item.year.toString() === filteredYear;
  });

  return (
    <div className="card-container">
      <Filter onChangeFilter={onChangeFilter} selected={filteredYear} />
      {filteredYearArray.map((item) => (
        <Items
          key={item.id}
          title={item.title}
          explanation={item.explanation}
          year={item.year}
          month={item.month}
          day={item.day}
        />
      ))}
    </div>
  );
};

export default Card;
