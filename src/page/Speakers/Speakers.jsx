import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import "./Speakers.css";
import odun from "../../assets/image/Odunayo_Eweniyi.JPG";
import ashley from "../../assets/image/Ashley-Immanuel.jpg";
import esther from "../../assets/image/Esther-Olamoyegun.jpg";
import mbaoma from "../../assets/image/Mbaoma-Chioma-Mary.jpg";
import adebayo from "../../assets/image/Esther-Temi-Adebayo.jpeg";
import princess from "../../assets/image/Princess-Egbuna-Oluebube.jpeg";
export const Speakers = () => {
  return (
    <section className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="speakers">
        <Card
          className="itm"
          name="Odunayo Eweniyi"
          title="COO & Co-founder, Piggyvest"
          pic={odun}
          role="Keynote Speaker"
        />

        <Card
          className="itm"
          name="Ashley Immanuel "
          title="COO & Co-founder, Semicolon"
          pic={ashley}
          role="Keynote Speaker"
        />

        <Card
          className="itm"
          name="Esther Olamoyegun"
          title="Content Marketer & Writer"
          pic={esther}
          role="Panelist"
        />

        <Card
          className="itm"
          name="Mbaoma Chioma Mary"
          title="Software Engineer & Technical Writer"
          pic={mbaoma}
          role="Panelist"
        />

        <Card
          className="itm"
          name="Esther Adebayo"
          role="Panelist"
          title="Technical Recruiter, Decagon"
          pic={adebayo}
        />

        <Card
          className="itm"
          name="Oluebube Princess Egbuna"
          title="Engineering Lead, Well Beyond"
          role="Panelist"
          pic={princess}
        />
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
