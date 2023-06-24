import React from "react";
import "./Sponsors.css";
import outreachy from "../../assets/image/outreachy.png";
import womenTechmakers from "../../assets/image/Women-Techmakers.png";
import oseq from "../../assets/image/OSEQ-logo.png";
import zaycodes from "../../assets/image/Zaycodes-white.jpg";
import yellowCard from "../../assets/image/yellowcard-logo.png";
import wiicreate from "../../assets/image/WiiCreate.png";
import shuttler from "../../assets/image/shuttler.png";

export const Sponsors = () => {
  return (
    <section className="sponsors">
      <h5>SPONSORSHIP</h5>
      <h3>OFFICIAL SPONSORS OF EVENT</h3>
      <p>HACKATHON SPONSORS</p>
      <div>
        <img src={oseq} alt="OSEQ-logo" />
        <img src={zaycodes} alt="zaycodes-logo" />
      </div>

      <p>GOLD SPONSORS</p>
      <div>
        <img src={yellowCard} alt="yellowcard-logo" />
      </div>
      <p>SILVER SPONSORS</p>
      <div>
        <img src={outreachy} alt="outreachy-logo" />
      </div>
      <p>BRONZE SPONSORS</p>
      <div>
        <img src={womenTechmakers} alt="women-techmakers-logo" />
      </div>

      <div>
        <h3>PARTNERS</h3>
        <div>
          <img src={wiicreate} alt="wiicreate-logo" />
        </div>
        <div>
          <img src={shuttler} alt="shuttler-logo" />
        </div>
      </div>
    </section>
  );
};
