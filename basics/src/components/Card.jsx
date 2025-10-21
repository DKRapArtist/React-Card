const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2> <p>{props.title} </p> <p>{props.age} </p>
    </div>
  );
};

export default Card;
