import React from "react";
import squiggly from "../assets/images/squiggly.svg";
import squirl from "../assets/images/squirl.svg";
import triangle from "../assets/images/triangle.svg";
import innerO from "../assets/images/2024/innero.png";
import outerO from "../assets/images/2024/outero.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IconAnchor } from "../components/Anchor";

const DoubleO = () => {
  return (
    <span className="inline-flex flex-col w-9  relative items-center md:w-[55px] lg:w-auto">
      <img src={outerO} alt="polygon-pic" className="" />
      <span className="inline-flex flex-col absolute top-2/4 -translate-y-2/4 w-5 md:w-[25px] lg:w-auto">
        <img src={innerO} alt="polygon-pic" className="" />
      </span>
    </span>
  );
};

const Register = () => {
  return (
    <>
      <section className="hero sm:pt-2 oswald-font w-full text-sealBrown ">
        <div className="relative  w-full vector-bgs">
          <div className="emboss-bg mt-8 sm:pt-8 pb-8 md:pb-16 lg:pb-32">
            <section className="flex flex-col w-[90%] mx-auto xl:max-w-[1200px] min-h-screen xl:w-full items-center justify-center">
              <img
                src={squiggly}
                alt="illustration"
                className="absolute top-24 md:top-32 lg:top-52 -left-8"
              />
              <img
                src={squirl}
                alt="illustration"
                className="absolute top-48 md:top-52 lg:top-72 right-0 w-1/6 md:w-1/12"
              />
              <img
                src={triangle}
                alt="illustration"
                className="absolute top-2/4 right-72"
              />
              <div className="w-full max-w-[900px] mx-auto sm:mt-16 mt-20 lg:mt-28">
                <h3 className="oswald-font text-primary-pink font-bold text-5xl md:text-[75px] lg:text-[150px] text-center">
                  Coming S<DoubleO />n
                </h3>
                <p className="my-7 text-center mullish-font w-full max-w-[820px] mx-auto">
                  Get ready to be inspired by a diverse lineup of speakers who
                  are making waves in the tech industry. Our team is diligently
                  working to finalize the details, and we can't wait to
                  introduce you to these incredible women.
                </p>

                <div className="w-[90%] xl:w-full xl:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
                  <div className="flex mullish-font">
                    <Link
                      to="/"
                      className="bg-primary-pink text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink flex items-center justify-center gap-2"
                    >
                      <FaArrowLeft />
                      Go back
                    </Link>
                  </div>

                  <div className=" mullish-font">
                    <IconAnchor text="Register Now" link="/register" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
