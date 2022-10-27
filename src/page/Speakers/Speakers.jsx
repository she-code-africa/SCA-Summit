import React from "react";
import { Card } from "../../components/Card/Card";
import "./Speakers.css";
import { speakers } from "../../utils";
export const Speakers = ({ handleClick }) => {
  let list = speakers.filter((sp) => {
    return sp;
  });
  const speakersList = list.splice(0, 8);
  return (
    <section className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="speakers">
        {speakersList.map(({ name, role, title, pic, bio }, index) => {
          return (
            <Card
              key={index}
              name={name}
              role={role}
              title={title}
              pic={pic}
              bio={bio}
            />
          );
        })}
      </div>
      <div className="btns-container">
        <button className="bn" onClick={() => handleClick()}>
          View All Speakers
        </button>
      </div>
    </section>
  );
};
