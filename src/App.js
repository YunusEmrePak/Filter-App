import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  let objects = [
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


  const onCarryData = (data) => {
    objects = [...objects, data];
    console.log(objects);
  };

  return (
    <div className="container">
      <Form onCarryData={onCarryData} />
      <Card object={objects} i={0} />
      <Card object={objects} i={1} />
      <Card object={objects} i={2} />
    </div>
  );
};

export default App;
