import React from "react";
import AboutImg from "../../assets/images/about-image.png";
import { RxArrowTopRight } from "react-icons/rx";

const About = () => {
  return (
    <div className="bg-primary-light-pink">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 w-full items-center py-12 md:py-16 lg:py-24 gap-4 md:gap-8 lg:gap-16">
        <div className="justify-self-start">
          <img src={AboutImg} alt="speaker & participants" />
        </div>
        <div className=" md:max-w-lg justify-self-center mt-2 md:mt-0">
          <h4 className="uppercase text-primary-pink font-bold text-xs md:text-base">
            ~ About she code africa ~
          </h4>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-3">
            Connecting & Empowering Women in Tech across Africa
          </h3>
          <p>
            SCA is a non-profit organization focused on empowering Diam eget
            ullamcorper at elementum risus turpis. Ullam corper maece nas proin
            elit aenean. Maecenas eniven enatis egestas at. Massa felis ipsum
            tellus consectetur
          </p>
          <div className="my-2 md:my-4 flex gap-2 items-center md:gap-3 lg:gap-6">
            <a
              href="/"
              className="bg-primary-pink px-4 md:px-8 py-2 rounded-3xl text-white"
            >
              Register Now!
            </a>
            <a href="/" className="flex items-center gap-1">
              View Past Events <RxArrowTopRight color="#B70569" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
