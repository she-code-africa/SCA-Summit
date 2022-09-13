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
        <h2>
          She Code Africa Hackathon 2022: <span>Gamification</span>
        </h2>

        <p>
          SCA HackFest aims to be an annual open source hackathon organized by
          She Code Africa dedicated to building and improving open source
          projects that serve people and solve problems around the world. We'll
          be calling on female hackers who identify as African women in tech, to
          join us for a month, to work on open-source projects to solve
          challenging problems.
          <br />
          <br />
          All solutions built will be released as open source projects so they
          can be of use and contributed worldwide.
        </p>

        <h6 className="text-start">Objectives</h6>
        <ul className="objectives">
          <li>
            Support open source projects solving prevalent problems globally
            with special preference for open source projects supporting
            underrepresented communities.
          </li>
          <li>
            Bring open source projects supporting underrepresented groups into
            the limelight.
          </li>
          <li>
            Encourage more diversity and inclusion within the open source
            community through the female hackers' contributions.
          </li>
        </ul>

        <h6 className="text-start">Benefits</h6>
        <ul>
          <li>Explore new technologies</li>
          <li>Drive innovation</li>
          <li>Create solutions for social good</li>
          <li>Reward innovative thinking</li>
        </ul>
        <p className="fw-bold lh-base">
          Duration: October 10, 2022 - October 31st, 2022
        </p>
        <p className="fw-bold lh-base">
          Application deadline: October 12, 2022
        </p>

        <a
          className="register-btn p-2 text-center"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfsMX2ZRdf0uXkLJZZxiBgE-g8JHupLv_cc9IqH9_ch4U2PIA/viewform"
        >
          Apply now
        </a>
      </div>
    </div>
  );
};

export default Hackathon;
