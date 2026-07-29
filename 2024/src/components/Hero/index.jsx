import React from "react";
// import HeroImg from "../../assets/images/hero-img.png";
import heroRing from "../../assets/images/2024/hero-ring.png";
import polygon from "../../assets/images/2024/polygon.png";
import innerPolygon from "../../assets/images/2024/inner-polygon.png";
import splash from "../../assets/images/2024/splash.png";
import { Marquee } from "../Marquee";
import { Link } from "react-router-dom";
// import spring from "../../assets/images/2024/spring.png";
import heroImg from "../../assets/images/2024/heroIMG.png";

const Hero = () => {
  // const eventDate = new Date("09/30/2023 09:00:00");
  // const dateTimeAfterThreeDays = new Date(eventDate.getTime() + 60 * 60 * 1000);

  return (
    <section className="hero sm:pt-8 oswald-font w-full text-sealBrown">
      <div className="relative mt-8 pb-8 md:pb-16 lg:pb-32 w-full pt-28 lg:pt-32 vector-bgs">
        <div className="absolute top-6 sm:-top-8 md:-top-10 lg:-top-6 bg-primary-pink text-white left-0 right-0 pt-8 md:pt-6 pb-3">
          <div className="w-[90%] mx-auto flex justify-center">
            <h3 className="text-base mullish-font text-center">
              SHE CODE AFRICA SUMMIT 2024.{" "}
              <a
                href="https://shecodeafrica.org/events"
                target="_blank"
                className="text-white underline"
                rel="noreferrer"
              >
                View our upcoming Pre-summit events.
              </a>{" "}
            </h3>
          </div>
        </div>

        <section className="flex flex-col justify-between w-[90%] mx-auto xl:max-w-[1200px] xl:w-full items-center">
          <div className="w-full mullish-font relative flex justify-center my-4">
            <p className="text-center text-sm md:text-base">
              21st September, 2024 • Lagos, Nigeria
            </p>
            <figure className="m-0 p-0 absolute top-2/4 -translate-y-2/4">
              <img src={heroRing} alt="hero-ring-img" />
            </figure>
          </div>
          <article className="flex flex-col items-center oswald-font lg:max-w-[800px] w-full my-5">
            <h1 className="text-4xl md:text-5xl text-center lg:text-[100px] font-extrabold w-full">
              She Code Africa Summit{" "}
              <span className="inline-flex flex-col w-9 relative items-center lg:w-auto">
                <img src={polygon} alt="polygon-pic" className="" />
                <span className="inline-flex flex-col absolute top-2/4 -translate-y-2/4 w-5 lg:w-auto">
                  <img src={innerPolygon} alt="polygon-pic" className="" />
                </span>
              </span>{" "}
              <span className="inline-flex flex-col w-auto relative">
                2024
                <span className="absolute w-3 bottom-2 -right-[0.7rem] lg:w-auto lg:bottom-6 lg:-right-4">
                  <img src={splash} alt="polygon-pic" className="" />
                </span>
              </span>
            </h1>

            <p className="text-sm md:text-base w-full max-w-[600px] text-[rgba(80,57,70,1)] font-medium mullish-font leading-normal md:leading-normal mt-3 text-center">
              She Code Africa Summit is the largest women in tech summit in
              Africa, with the purpose of connecting & empowering women in tech
              across Africa.
              {/* Theme: Women in Tech: Driving Innovation for
              Africa's Economy */}
            </p>

            <div className="flex w-full justify-center mullish-font my-4">
              <Link
                to="https://tix.africa/scasummit3"
                className="bg-primary-pink text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink"
              >
                Grab your ticket!
              </Link>
            </div>
          </article>
        </section>
        <div className="wave-bg w-full py-10">
          <img src={heroImg} alt="SCA Summit 2023" className="w-full" />
        </div>
      </div>
      <div className="bg-primary-light-pink pb-8 md:pb-16 lg:pb-32">
        <Marquee />
      </div>
    </section>
  );
};

export default Hero;
