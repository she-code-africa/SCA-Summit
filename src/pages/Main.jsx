import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import About from "../components/About";
import YTDisplay from "../components/YTDisplay";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";

const Main = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Gallery />
      <YTDisplay />
      <Footer />
    </>
  );
};

export default Main;
