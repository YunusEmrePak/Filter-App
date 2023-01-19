import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

let DUMMY_ARRAY = [
  {
    id: "1",
    year: 2022,
    month: "August",
    day: "3",
    title: "First",
    explanation: "Hello World 1",
  },
  {
    id: "2",
    year: 2021,
    month: "March",
    day: "29",
    title: "Second",
    explanation: "Hello World 2",
  },
  {
    id: "3",
    year: 2023,
    month: "January",
    day: "18",
    title: "Third",
    explanation: "Hello World 3",
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
