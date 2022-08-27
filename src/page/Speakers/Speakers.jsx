import React, { useState } from "react";
import { Card } from "../../components/Card";
import { faker } from "@faker-js/faker";
import "./Speakers.css";
export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="wp">
        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic={faker.image.avatar()}
        />

        {isShown && (
          <>
            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic={faker.image.avatar()}
            />

            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic={faker.image.avatar()}
            />

            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic={faker.image.avatar()}
            />
          </>
        )}
      </div>
      <button className="bn" onClick={handleClick}>
        {isShown ? "Hide" : "View All Speakers"}
      </button>
    </div>
  );
};
