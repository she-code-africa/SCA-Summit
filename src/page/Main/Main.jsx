import { Home } from "../Home/Home";
import { Attendees } from "../Attendees/Attendees";
import { About } from "../About/About";
// import { Schedule } from "../Schedule/Schedule";
import { Speakers } from "../Speakers/Speakers";
import { Sponsors } from "../Sponsors/Sponsors";
import Hackathon from "../Hackathon/Hackathon";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Home />

      <Attendees />

      <About />

      <Speakers />

      <Hackathon />

      {/* <Schedule /> */}

      <Sponsors />
    </div>
  );
};

export default Main;
