import React from "react";
import "./About.css";
import deco from "../../assets/image/deco.png";

export const About = () => {
  return (
    <section className="about-container">
      <div className="img-container">
        <img src={deco} alt="deco" />
      </div>
      <h2>Elevating The African Women in Tech</h2>
      <div className="about-content">
        <blockquote>
          Our first edition of what we intend to make our annual headline
          conference this year aims to change that. Our goal is to gather our
          members from different states in Nigeria and neighbouring African
          countries for a hybrid summit themed "Elevating the African Woman in
          Tech". We plan to host 1,000 women participants for the first edition.
          <br />
          <br />
          Our goal is to create a space safe where these women attendees can
          have different empowering conversations and training on different
          skills/career fields in tech while networking with notable women in
          the tech industry and paterning Companies.
        </blockquote>
      </div>
    </section>
  );
};
