import { Button } from "reactstrap";

import HackathonImg from "../../assets/image/hackathon.png";

import HackathonImg1 from "../../assets/image/hackathon2png.png";

import "./Hackathon.css";

const Hackathon = () => {
  return (
    <div className="hackathon-container" id="hackathon">
      <div className="hackathon-images">
        <img src={HackathonImg} id="hackathon-img" alt={HackathonImg} />

        <img
          src={HackathonImg1}
          alt={HackathonImg1}
          className="hackathon-img-2"
        />
      </div>

      <div className="shecode-hackathon-text">
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
  );
};

export default Hackathon;
