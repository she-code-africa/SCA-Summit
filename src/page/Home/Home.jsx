import React from "react";
import "./Home.css";
import calendar from "../../assets/icons/calendar.svg";
import mapPin from "../../assets/icons/map-pin.svg";

export const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-content">
        <h4>SHE CODE AFRICA SUMMIT 2022</h4>
        <h1>
          LARGEST GATHERING OF WOMEN IN <span className="pink">TECH</span>
        </h1>
        <p>Elevating the African Women in Tech</p>
        <div className="details">
          <div>
            <img src={calendar} alt="date-time" />
            <span>12TH NOVEMBER, 2022</span>
          </div>
          <div>
            <img src={mapPin} alt="map-pin" />
            <span>Zone Tech Park, Gbagada, Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
};
