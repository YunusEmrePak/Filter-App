import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

import "./components/Card.css";

let DUMMY_ARRAY = [
  {
    id: "1",
    year: 2022,
    month: "August",
    day: "3",
    title: "First",
    price: "5.99",
  },
  {
    id: "2",
    year: 2021,
    month: "March",
    day: "29",
    title: "Second",
    price: "10.75",
  },
  {
    id: "3",
    year: 2023,
    month: "January",
    day: "18",
    title: "Third",
    price: "2.99",
  },
];

const App = () => {
  const [objects, setObjects] = useState(DUMMY_ARRAY);

  const onCarryData = (data) => {
    setObjects((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <div className="container">
      <Form onCarryData={onCarryData} />
      <Card object={objects} />
    </div>
  );
};

export default App;
