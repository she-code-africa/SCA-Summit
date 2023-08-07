import React from "react";
import HeroImg from "../../assets/images/hero-image.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Location from "../../assets/icons/location.svg";
import { RxArrowTopRight } from "react-icons/rx";
import CountdownTimer from "../CountdownTimer";
import { BsClockFill } from "react-icons/bs";
import squiggly from "../../assets/images/squiggly.svg";
import squirl from "../../assets/images/squirl.svg";
import triangle from "../../assets/images/triangle.svg";
import wavy from "../../assets/images/wavy.svg";
import { Marquee } from "../Marquee";

const Hero = () => {
  const eventDate = new Date("09/30/2023");
  const currentDate = new Date();
  const Difference_In_time = eventDate.getTime() - currentDate.getTime();
  const Difference_In_Days = Difference_In_time / (1000 * 3600 * 24);
  const DAYS_IN_MS = Difference_In_Days * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = currentDate.getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_IN_MS;
  return (
    <div className="hero sm:pt-8">
      <div className="relative mt-8 pb-8 md:pb-16 lg:pb-32">
        <div className="absolute top-10 md:top-28 left-1">
          <img src={squiggly} alt="squiggly" className=" w-12 md:w-auto" />
        </div>
        <div className="absolute right-6 md:right-96 top-32">
          <img src={triangle} alt="illustration-triangle" />
        </div>
        <section className="flex flex-col container mx-auto px-4 w-full md:gap-4 lg:gap-0 justify-between items-center py-8 md:pt-16 lg:pt-32">
          <div className="mt-12 md:mt-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-center lg:text-7xl font-extrabold md:max-w-4xl">
              She Code Africa{" "}
              <span className="inline-flex flex-col w-auto">
                Summit
                <img src={wavy} alt="" />
              </span>{" "}
              2023 ‎
            </h1>
            <div className="border border-black px-2 lg:px-4 py-1 max-w-xs mx-auto md:mx-0 md:max-w-xl rounded-3xl my-3 md:my-5">
              <p className="font-medium text-xs md:text-lg lg:text-2xl">
                The Largest Women In Tech Summit in Africa.
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:mt-4 md:w-auto gap-2 md:gap-6 items-center mb-8 md:md-0">
              <a
                href="https://tix.africa/discover/scasummit2"
                className="bg-primary-pink px-8 py-2 md:py-3.5 rounded-30px text-white hover:bg-primary-light-pink hover:text-primary-pink hover:border border-primary-pink transition ease-in delay-75 duration-300"
              >
                Register Now!
              </a>

              <a
                href="https://drive.google.com/drive/folders/1tRQkG3jzcST71OOZqlT5_binwsdUQdhm"
                className="flex items-center gap-1 transition ease-in delay-75 duration-300 hover:scale-110"
              >
                View Past Events <RxArrowTopRight color="#B70569" />
              </a>
            </div>
            <div className="absolute top-80 md:top-[26rem] left-4 md:left-24">
              <img src={triangle} alt="" />
            </div>
            <div className="absolute top-80 right-0">
              <img src={squirl} alt="" className="w-16 md:w-auto" />
            </div>
          </div>
        </section>
        <div className="">
          <img src={HeroImg} alt="SCA Summit 2022" className="w-full" />
        </div>
      </div>
      <div className="bg-primary-light-pink pb-8 md:pb-16 lg:pb-32">
        <Marquee />
      </div>

      <div className="py-8 md:py-12 lg:py-20 bg-primary-pink-opacity">
        <div className="flex flex-col md:flex-row font-bold uppercase justify-center text-sm md:text-base lg:text-2xl gap-3 md:gap-6">
          <p className="flex items-center gap-2 justify-center">
            <img src={Calendar} alt="date" className="w-6 md:w-auto" />
            <span>30th September, 2023</span>
          </p>
          <p className="flex items-center gap-2 justify-center">
            <img src={Location} alt="location" className="w-6 md:w-auto" />
            <span>Queen's Park Event Centre, Lagos</span>
          </p>
          <p className="flex items-center gap-2 justify-center">
            <BsClockFill color="#B70569" size="1.5rem" />
            <span>9:00 am - 5:00 pm</span>
          </p>
        </div>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
  );
};

export default Hero;
