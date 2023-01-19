import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredExplanation, setEnteredExplanation] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const randomId = Math.random();

    const date = new Date(enteredDate);

    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const data = {
      id: randomId.toString(),
      year: year,
      month: month,
      day: day,
      title: enteredTitle,
      explanation: enteredExplanation,
    };

    setEnteredTitle("");
    setEnteredExplanation("");
    setEnteredDate("");

    props.onCarryData(data);
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const explanationHandler = (event) => {
    setEnteredExplanation(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const deleteHandler = (event) => {
    setEnteredTitle("");
    setEnteredExplanation("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-title">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="form-explanation">
          <label>Explanation</label>
          <input
            type="text"
            value={enteredExplanation}
            onChange={explanationHandler}
          />
        </div>
        <div className="form-date">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateHandler}
            min="2020-01-01"
            max="2024-12-31"
          />
        </div>
        <div className="form-buttons">
          <button className="buttons submit-button" type="submit">
            Submit
          </button>
          <button
            className="buttons delete-button"
            type="clear"
            onClick={deleteHandler}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
