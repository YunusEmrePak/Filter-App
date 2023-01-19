const Items = (props) => {
  return (
    <div className="card">
      <div className="card-date">
        <div className="card-month date">{props.month}</div>
        <div className="card-year date">{props.year}</div>
        <div className="card-day date">{props.day}</div>
      </div>

      <div className="card-information">
        <h3>{props.title}</h3>
        <p className="card-explanation">{props.explanation}</p>
      </div>
    </div>
  );
};

export default Items;
