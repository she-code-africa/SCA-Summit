import React from "react";
import "./Sponsors.css";
import google from "../../assets/image/google-logo.svg";
import tetra from "../../assets/image/tetra.svg";

export const Sponsors = () => {
  return (
    <div className="sponsors">
      <h5>SPONSORSHIP</h5>
      <h3>OFFICIAL SPONSORS OF EVENT</h3>
      <div>
        <p>PREMIUM SPONSORS</p>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div>
      <div>
        <p>GOLD SPONSORS</p>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
      </div>
      <div>
        <p>SILVER SPONSORS</p>
        <img src={google} alt="google-logo" />
        <img src={tetra} alt="tetra-logo" />
      </div>
      <div>
        <p>BRONZE SPONSORS</p>
        <img src={tetra} alt="tetra-logo" />
        <img src={google} alt="google-logo" />
      </div>
    </div>
  );
};
