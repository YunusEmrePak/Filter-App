import "./Card.css";

const Card = (props) => {
  const index = props.i;
  const prps = props.object[index];

  return (
    <div className="card">
      <img src={require(`../img/${prps.img}`)} alt={index} />
      <div className="card-information">
        <h3>{prps.title}</h3>
        <p className="card-explanation">{prps.explanation}</p>
      </div>
    </div>
  );
};

export default Card;
