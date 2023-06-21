import React from "react";
import { Card } from "../../components/Card/Card";
import "./Speakers.css";
import { speakers } from "../../utils";

const ViewSpeakers = () => {
  return (
    <div className="speakers-container">
      <div className="speakers mt-md-5">
      {speakers.map(({ name, role, title, pic, bio }, index) => {
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
      
    </div>
  );
};

export default ViewSpeakers;
