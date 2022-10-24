import React, { useContext } from "react";
import "./Card.css";
import Context from "../../context/context";

export const Card = (props) => {
  const { setOpenModal, openModal } = useContext(Context);
  return (
    <div className="cd" onClick={ () => setOpenModal(true)}>
      <img src={props.pic} alt="Avatar" />
      <div className="cont">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.role}</p>
        {/* <p></p> */}
      </div>
    </div>
  );
};
