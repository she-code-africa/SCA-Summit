import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import "./Speakers.css";
import { speakers } from "../../utils";
export const Speakers = () => {
  const speakersList = speakers.splice(0, 6);
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
        <button className="bn">
          <Link to="/speakers">View All Speakers</Link>
        </button>
        <button className="bn">
          <a href="https://docs.google.com/forms/d/1casH1J97QxffQ6WSvBxvWExFxX_WIV21ocj_lm2lx1E/edit">
            Become A Speaker
          </a>
        </button>
      </div>
    </section>
  );
};
