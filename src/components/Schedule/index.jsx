import React from "react";
import schedImg from "../../assets/images/schedule-img.jpg";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="bg-primary-light-pink py-8 md:py-16 lg:py-36 relative"
    >
      <div className="container mx-auto px-2">
        <h1 className="text-primary-pink text-xs md:text-base uppercase font-bold">
          ~WHAT TO EXPECT AT SCA SUMMIT 2023?~
        </h1>
        <div className="grid sm:grid-cols-2 lg:gap-12">
          <div className="absolute left-0 top-16 md:top-72 lg:top-[30rem] w-1/6 sm:w-full">
            <img src={squiggly2} alt="" />
          </div>
          <div className="my-6 order-2 sm:order-1">
            <ul className="flex-col flex gap-1 list-disc text-sm lg:text-lg font-medium marker:text-primary-pink max-w-xl pl-5">
              <li>
                Insightful keynote speeches, technical workshops & lightning
                talks.
              </li>

              <li>
                Engaging panel sessions covering various topics in technology –
                <ul>
                  <li>
                    Diversity, Equity, and Inclusion (DEI), Employability, Skill
                    Building, and Growth, Engineering, No Code in Tech,
                    Community,
                  </li>
                </ul>
              </li>

              <li>Award show</li>
              <li>Free headshot opportunities</li>
              <li>Fun and games and many more!</li>
            </ul>
          </div>
          <div className="absolute right-96 top-24 md:top-32">
            <img src={dot} alt="" />
          </div>
          <div className="rounded-3xl mt-8 sm:mt-10 md:mt-0 border-4 md:border-8 border-primary-pink sm:rotate-12 order-1 sm:order-2 max-w-full sm:max-w-[22rem] lg:max-w-lg 2xl:max-w-full h-fit ">
            <img src={schedImg} alt="Panel Session" className="rounded-2xl" />
          </div>
          <div className="absolute rotate-90 right-0 top-96 w-1/6 sm:w-auto sm:top-72 order-3">
            <img src={squiggly2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
