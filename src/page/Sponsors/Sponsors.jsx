import React from "react";
import "./Sponsors.css";
// import google from "../../assets/image/google-logo.svg";
// import tetra from "../../assets/image/tetra.svg";
import oseq from "../../assets/image/OSEQ-logo.png";
import zaycodes from "../../assets/image/Zaycodes-white.jpg";
import yellowCard from "../../assets/image/yellowcard-logo.png";

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
      {/* <p>PREMIUM SPONSORS</p>
      <div>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div> */}
      <p>GOLD SPONSORS</p>
      <div>
        <img src={yellowCard} alt="yellowcard-logo" />
      </div>
      {/* <p>SILVER SPONSORS</p>
      <div>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div>
      <p>BRONZE SPONSORS</p>
      <div>
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
      </div> */}
    </section>
  );
};
