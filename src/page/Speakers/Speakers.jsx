import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
// import { faker } from "@faker-js/faker";
import "./Speakers.css";
import placeholder from "../../assets/image/avatar.png";
export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <section className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="speakers">
        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        <Card
          className="itm"
          name="TBD"
          // title={faker.name.jobTitle()}
          pic={placeholder}
        />

        {isShown && (
          <>
            <Card
              className="itm"
              name="TBD"
              // title={faker.name.jobTitle()}
              pic={placeholder}
            />

            <Card
              className="itm"
              name="TBD"
              // title={faker.name.jobTitle()}
              pic={placeholder}
            />

            <Card
              className="itm"
              name="TBD"
              // title={faker.name.jobTitle()}
              pic={placeholder}
            />
          </>
        )}
      </div>
      <div className="btns-container">
        <button className="bn" onClick={handleClick}>
          {isShown ? "Hide" : "View All Speakers"}
        </button>
        <button className="bn">
          <a
            href="https://docs.google.com/forms/d/1casH1J97QxffQ6WSvBxvWExFxX_WIV21ocj_lm2lx1E/edit"
            // className="bn"
          >
            Become A Speaker
          </a>
        </button>
      </div>
    </section>
  );
};
