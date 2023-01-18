import "./Card.css";

const Card = (props) => {
  const index = props.i;
  const prps = props.object[index];

  return (
    <div className="card">
      <div className="card-date">
        <div className="card-month date">{prps.month}</div>
        <div className="card-year date">{prps.year}</div>
        <div className="card-day date">{prps.day}</div>
      </div>
      
      <div className="card-information">
        <h3>{prps.title}</h3>
        <p className="card-explanation">{prps.explanation}</p>
      </div>
    </div>
  );
};

export default Card;

