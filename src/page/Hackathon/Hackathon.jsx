import { Container, Row, Col, Button } from "reactstrap";

import HackathonImg from "../../assets/image/hackton.png";

import HackathonImg1 from "../../assets/image/hackton2png.png";

import "./hackthon.css";

const Hackathon = () => {
  return (
    <>
      <div className="hackathon-container">
        <div className="hackathon-images">
          <img src={HackathonImg} id="hackthon-img" alt={HackathonImg} />

          <img
            src={HackathonImg1}
            alt={HackathonImg1}
            class="hackathon-img-2"
          />
        </div>

        <div className="shecode-hackthon-text">
          <h2>She Code Africa Hackathon</h2>

          <span>
            2022: <span>Gamification</span>
          </span>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
            maxime cupiditate magnam sed id ipsum, sequi sit aliquid quo porro
            mollitia quidem praesentium, a facere saepe tempora neque ad?
          </p>

          <ul>
            <li>
              {" "}
              <span className="start-date"> Start date:</span>{" "}
              <span className="date">October 20-21, 2022</span>
            </li>

            <li>
              <span className="start-date">Application deadline: </span>
              <span className="date">October 12, 2022</span>
            </li>
          </ul>

          <Button className="register-btn p-2">Apply now</Button>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
