import React from "react";
import Button from "./Button";

const Card = (props) => {
  const { title, description, imageUrl } = props.destination;
  return (
    <div className="card">
      <img src={imageUrl} width="300px" alt="destination" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={props.onClick} />
    </div>
  );
};

export default Card;
