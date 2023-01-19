import Items from "./Items";

import "./Card.css";

const Card = (props) => {
  return (
    <div>
      {props.object.map((item) => (
        <Items
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
