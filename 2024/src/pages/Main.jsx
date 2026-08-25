import React from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import About from "../components/About";
import YTDisplay from "../components/YTDisplay";
// import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
// import Partners from "../components/Partners";
import themeUnion from "../assets/images/2024/theme-union.png";
import TicketsSection from "../components/tickets-section";
import PartnersComponent from "../components/2024/Partners/PartnersComponent";

const Main = () => {
  return (
    <main className="emboss-bg overflow-hidden">
      <Hero />
      <About />
      <section className="w-full bg-[rgba(252,230,242,1)] squiggly text-center">
        <div className="py-16 theme-bg ">
          <h4 className="uppercase text-primary-pink font-bold text-xs md:text-base oswald-font w-[90%] mx-auto">
            ~ sca summit 2024 theme ~
          </h4>
          <div className="w-[90%] max-w-[900px] mt-3 mx-auto">
            <h3 className="uppercase oswald-font text-2xl md:text-4xl lg:text-5xl font-semibold justify-center items-center flex gap-1">
              <span>
                <img
                  src={themeUnion}
                  alt="theme-union-pic"
                  className="object-contain"
                />
              </span>{" "}
              Women in Tech:
            </h3>
            <h3 className="uppercase oswald-font text-2xl md:text-4xl lg:text-5xl font-semibold text-center mt-3">
              Driving Innovation for Africa’s Economy.
            </h3>
          </div>
        </div>
      </section>

      <section className="w-full">
        <PartnersComponent />
      </section>
      {/* <Speakers /> */}
      <Schedule />
      <TicketsSection />
      {/* <Partners /> */}
      <Gallery />
      <YTDisplay />
    </main>
  );
};

export default Main;
