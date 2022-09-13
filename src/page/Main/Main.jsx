import { Home } from "../Home/Home";
import { Attendees } from "../Attendees/Attendees";
import { About } from "../About/About";
// import { Schedule } from "../Schedule/Schedule";
import { Speakers } from "../Speakers/Speakers";
import { Sponsors } from "../Sponsors/Sponsors";
import Hackathon from "../Hackathon/Hackathon";
import { Tag } from "../../components/Tag/Tag";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Home />
      <Tag />
      <Attendees />

      <About />
      <Tag />
      <Speakers />
      <Tag />
      <Hackathon />

      {/* <Schedule /> */}
      <Tag />
      <Sponsors />
    </div>
  );
};

export default Main;
