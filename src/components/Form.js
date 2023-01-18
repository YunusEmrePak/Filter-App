import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredExplanation, setEnteredExplanation] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const data = [
        {
            id: Math.random().toString(),
            title: enteredTitle,
            explanation: enteredExplanation,
            date: new Date(enteredDate)
        }
    ]

    setEnteredTitle('');
    setEnteredExplanation('');
    setEnteredDate('');

    console.log(data);
    
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const explanationHandler = (event) => {
    setEnteredExplanation(event.target.value);
  }

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-title">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="form-explanation">
          <label>Explanation</label>
          <input type="text" value={enteredExplanation} onChange={explanationHandler} />
        </div>
        <div className="form-date">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandler} min="2020-01-01" max="2024-12-31"/>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
