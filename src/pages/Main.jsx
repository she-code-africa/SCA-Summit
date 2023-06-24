import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import About from "../components/About";

const Main = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  );
};

export default Main;
