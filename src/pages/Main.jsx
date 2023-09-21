import React from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import About from "../components/About";
import YTDisplay from "../components/YTDisplay";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Partners from "../components/Partners";

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Partners />
      <Gallery />
      <YTDisplay />
    </>
  );
};

export default Main;
