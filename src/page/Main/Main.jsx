import { Home } from "../Home/Home";
import { Attendees } from "../Attendees/Attendees";
import { About } from "../About/About";
// import { Schedule } from "../Schedule/Schedule";
import { Speakers } from "../Speakers/Speakers";
import { Sponsors } from "../Sponsors/Sponsors";
import Hackathon from "../Hackathon/Hackathon";
import { Tag } from "../../components/Tag/Tag";

import "./Main.css";

import ViewSpeakers from "../Speakers/ViewSpeakers";

const Main = ({isShown, handleClick}) => {
  
  return (
    <div className="main">
      {isShown ? (
        <ViewSpeakers />
      ) : (
        <>
          <Home />
          <Tag />
          <Attendees />

          <About />
          <Speakers handleClick={handleClick}/>
          <Hackathon />

          {/* <Schedule /> */}
          <Sponsors />
        </>
      )}
    </div>
  );
};

export default Main;
