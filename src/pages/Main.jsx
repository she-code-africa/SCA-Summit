import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import About from "../components/About";
import YTDisplay from "../components/YTDisplay";

const Main = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <YTDisplay />
      <Footer />
    </>
  );
};

export default Main;
