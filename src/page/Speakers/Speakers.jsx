import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { faker } from "@faker-js/faker";
import "./Speakers.css";
export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    console.log(faker.image.imageUrl("woman"));
    setIsShown((current) => !current);
  };

  return (
    <div className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="speakers">
        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://media.istockphoto.com/photos/happy-african-woman-working-online-using-laptop-in-bar-restaurant-picture-id1328142737?b=1&k=20&m=1328142737&s=170667a&w=0&h=iYzSBQhnwRZtRe-jF02Os2WaQmZu9zBHIUgArepbVXE="
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://images.unsplash.com/photo-1573496800440-5c9c48a8d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwd29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://images.unsplash.com/photo-1604933762021-54a5858c9832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwd29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://images.unsplash.com/photo-1642928825702-4595a49823fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsYWNrJTIwd29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://images.unsplash.com/photo-1641759653573-d5cbadb2b45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxibGFjayUyMHdvbWFuJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />

        <Card
          className="itm"
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          pic="https://images.unsplash.com/photo-1642929264315-ada2f8c9ecb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMHdvbWFuJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />

        {isShown && (
          <>
            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic="https://images.unsplash.com/photo-1641759653573-d5cbadb2b45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxibGFjayUyMHdvbWFuJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />

            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic="https://images.unsplash.com/photo-1573496800440-5c9c48a8d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwd29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />

            <Card
              className="itm"
              name={`${faker.name.firstName()} ${faker.name.lastName()}`}
              title={faker.name.jobTitle()}
              pic="https://images.unsplash.com/photo-1604933762021-54a5858c9832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwd29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </>
        )}
      </div>
      <button className="bn" onClick={handleClick}>
        {isShown ? "Hide" : "View All Speakers"}
      </button>
      <button className="bn" onClick={handleClick}>Become A Speaker</button>
    </div>
  );
};
