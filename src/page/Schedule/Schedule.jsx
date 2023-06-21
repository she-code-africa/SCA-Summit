import React, { useState } from "react";
import { dayOne, dayTwo, dayThree } from "../../data/program";
import "./Schedule.css";

export const Schedule = () => {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const handleClick1 = (event) => {
    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
  };

  const handleClick2 = (event) => {
    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
  };

  const handleClick3 = (event) => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
  };

  return (
    <div className="schedule" id="schedules">
      <div className="lt">
        <h4>SCHEDULE PLAN</h4>
        <h5>SUMMIT SCHEDULE</h5>
        <p>
          A general overview of the event at She Code Africa Summit Schedule
          2022
        </p>
      </div>

      <div className="rt">
        <table className="s-1">
          <div className="tab">
            <button
              className={isShown1 ? "bn active" : "bn"}
              onClick={handleClick1}
            >
              First Session
            </button>
            <button
              className={isShown2 ? "bn active" : "bn"}
              onClick={handleClick2}
            >
              Second Session
            </button>
            <button
              className={isShown3 ? "bn active" : "bn"}
              onClick={handleClick3}
            >
              Third Session
            </button>
          </div>
          <tbody>
            {isShown1 &&
              dayOne.map((dayOne, key) => {
                return (
                  <>
                    <tr key={key}>
                      <th>{dayOne.duration}</th>
                      <td>{dayOne.programme}</td>
                    </tr>
                    <tr key={key}>
                      <th></th>
                      <td>{dayOne.summary}</td>
                    </tr>
                  </>
                );
              })}

            {isShown2 &&
              dayTwo.map((dayTwo, key) => {
                return (
                  <>
                    <tr key={key}>
                      <th>{dayTwo.duration}</th>
                      <td>{dayTwo.programme}</td>
                    </tr>
                    <tr key={key}>
                      <th></th>
                      <td>{dayTwo.summary}</td>
                    </tr>
                  </>
                );
              })}
            {isShown3 &&
              dayThree.map((dayThree, key) => {
                return (
                  <>
                    <tr key={key}>
                      <th>{dayThree.duration}</th>
                      <td>{dayThree.programme}</td>
                    </tr>
                    <tr key={key}>
                      {dayThree.summary && <td>{dayOne.summary}</td>}
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
