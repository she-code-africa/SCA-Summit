import { Home } from "./Home/Home";

import { Attendees } from "./Attendees/Attendees";

import { About } from "./About/About";

import { Schedule } from "./Schedule/Schedule";

import { Speakers } from "./Speakers/Speakers";

import { Sponsors } from "./Sponsors";

const AllHomeComponent = () => {
  return (
    <>
      <Home />

      <Attendees />

      <About />

      <Speakers />

      {/* <Schedule /> */}

      <Sponsors />
    </>
  );
};

export default AllHomeComponent;
