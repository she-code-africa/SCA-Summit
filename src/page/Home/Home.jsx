import React from "react";
import "./Home.css";
import calendar from "../../assets/icons/calendar.svg";
import mapPin from "../../assets/icons/map-pin.svg";

export const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-content">
        <h4>SHE CODE AFRICA TECH SUMMIT 2022</h4>
        <h1>
          LARGEST GATHERING OF WOMEN IN <span className="pink">TECH</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga id
          magni veniam adipisci ad veritatis.
        </p>
        <div className="details">
          <div>
            <img src={calendar} alt="date-time" />
            <span>10TH OCTOBER, 2022</span>
          </div>
          <div>
            <img src={mapPin} alt="map-pin" />
            <span>CIVIC CENTER, LAGOS NIGERIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
