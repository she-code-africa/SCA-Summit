import React from "react";
import { ScheduleTable } from "../components/Schedule";
import { Marquee } from "../components/Marquee";
import gear from "../assets/images/gear.svg";
import gear2 from "../assets/images/gear2.svg";
import gearFull from "../assets/images/gear-full.svg";

const Schedule = () => {
  return (
    <>
      <div className="hero sm:pt-8 min-h-[600px] flex justify-center items-center">
        <div className="text-center">
          <h1 className=" text-4xl lg:text-[64px] font-extrabold">Schedule</h1>
          <p className="uppercase text-primary-pink font-semibold text-sm sm:text-base lg:text-[18px]">
            Dive into a Day of Inspiration and Learning
          </p>
          <p className="max-w-2xl leading-7 text-sm sm:text-base lg:text-[18px] font-medium text-[#210D15]">
            The summit schedule consists of empowering sessions and enlightening
            discussions that pave the way for exploration, connection, and
            growth.
          </p>
        </div>
      </div>
      <Marquee />
      <ScheduleTable />
      <img
        src={gear}
        alt=""
        className="absolute right-0 top-16 w-16 h-16 sm:w-32 sm:h-32 lg:w-auto lg:h-auto"
      />
      <img
        src={gear2}
        alt=""
        className="absolute right-8 top-32 sm:top-56 lg:top-[17rem] w-16 h-16 sm:w-32 sm:h-32 lg:w-auto lg:h-auto"
      />
      <img
        src={gearFull}
        alt=""
        className="absolute -left-8 top-[20%]  sm:top-[15%] w-16 h-16 sm:w-32 sm:h-32 lg:w-auto lg:h-auto"
      />
    </>
  );
};

export default Schedule;
