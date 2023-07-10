import React from "react";
import HeroImg from "../../assets/images/Hero-Image.png";
import Calendar from "../../assets/icons/calendar.svg";
import Location from "../../assets/icons/location.svg";
import { RxArrowTopRight } from "react-icons/rx";
import CountdownTimer from "../CountdownTimer";
import { BsClockFill } from "react-icons/bs";

const Hero = () => {
  const eventDate = new Date("09/30/2023");
  const currentDate = new Date();
  const Difference_In_time = eventDate.getTime() - currentDate.getTime();
  const Difference_In_Days = Difference_In_time / (1000 * 3600 * 24);
  const DAYS_IN_MS = Difference_In_Days * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = currentDate.getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_IN_MS;
  return (
    <div className="bg-primary-light-pink pt-8 md:pt-16 lg:pt-24">
      <section className="flex flex-col md:flex-row container mx-auto px-4 w-full md:gap-4 lg:gap-0 justify-between items-center py-8 md:py-16 lg:py-24">
        <div>
          <h1 className="text-4xl text-center md:text-start lg:text-7xl font-black md:max-w-2xl">
            She Code Africa Summit 2023!
          </h1>
          <div className="border border-black px-2 lg:px-4 py-1 max-w-xs mx-auto md:mx-0 md:max-w-xl mt-3 mb-3 rounded-3xl">
            <p className="font-medium text-xs md:text-lg lg:text-2xl">
              The Largest Women In Tech Summit in Africa
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-6 items-center mb-8 md:md-0">
            <a
              href="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/view"
              className="bg-primary-pink px-8 py-2 rounded-3xl text-white"
            >
              Become A Sponsor
            </a>

            <a
              href="https://tix.africa/discover/scasummit2"
              className="flex items-center gap-1"
            >
              Register to attend <RxArrowTopRight color="#B70569" />{" "}
            </a>
          </div>
        </div>
        <div className="">
          <img src={HeroImg} alt="hero" />
        </div>
      </section>

      <div className="py-8 md:py-12 lg:py-20 bg-primary-pink-opacity">
        <div className="flex flex-col md:flex-row font-bold uppercase justify-center text-sm md:text-2xl gap-3 md:gap-6">
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
