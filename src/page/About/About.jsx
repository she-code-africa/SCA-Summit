import React from "react";
import "./About.css";
import deco from "../../assets/image/Deco.svg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <h5>ABOUT EVENT</h5>
        <h3>THE LARGEST COMMUNITY OF WOMEN IN TECH SUMMIT</h3>
        <p>
          Our first edition of what we intend to make our annual headline
          conference this year aims to change that. Our goal is to gather our
          members from different states in Nigeria and neighbouring African
          countries for a hybrid summit themed "Elevating the African Woman in
          Tech". We plan to host 1,000 women participants for the first edition.
        </p>
        <p>
          Our goal is to create a space safe where these women attendees can
          have different empowering conversations and training on different
          skills/career fields in tech while networking with notable women in
          the tech industry and paterning Companies.
        </p>
      </div>
      <img src={deco} alt="deco" />
    </div>
  );
};
