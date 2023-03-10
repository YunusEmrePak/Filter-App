import "./Items.css";

const Items = (props) => {
  return (
    <div className="outCard">
      <div className="card">
        <div className="card-date">
          <div className="card-month date">{props.month}</div>
          <div className="card-year date">{props.year}</div>
          <div className="card-day date">{props.day}</div>
        </div>

        <div className="card-information">
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
