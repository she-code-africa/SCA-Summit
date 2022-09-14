import React from "react";
import "./Sponsors.css";
import google from "../../assets/image/google-logo.svg";
import tetra from "../../assets/image/tetra.svg";

export const Sponsors = () => {
  return (
    <section className="sponsors">
      <h5>SPONSORSHIP</h5>
      <h3>OFFICIAL SPONSORS OF EVENT</h3>
      <p>PREMIUM SPONSORS</p>
      <div>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div>
      <p>GOLD SPONSORS</p>
      <div>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
      </div>
      <p>SILVER SPONSORS</p>
      <div>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div>
      <p>BRONZE SPONSORS</p>
      <div>
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
      </div>
    </section>
  );
};
