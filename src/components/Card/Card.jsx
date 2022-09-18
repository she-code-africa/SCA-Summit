import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="cd">
      <img src={props.pic} alt="Avatar" />
      <div className="cont">
        {/* <p>Speaker</p> */}
        <h2>{props.name}</h2>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
