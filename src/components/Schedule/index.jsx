import React from "react";
import schedImg from "../../assets/images/schedule-img.jpg";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";
import { SolidAnchor } from "../Anchor";

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
            <div className="mt-6">
              <SolidAnchor text="View Full Schedule" link="/schedule" />
            </div>
          </div>

          <div className="absolute right-96 top-24 md:top-32">
            <img src={dot} alt="" />
          </div>
          <div className="rounded-3xl mt-8 sm:mt-10 md:mt-0 border-4 md:border-8 border-primary-pink sm:rotate-12 order-1 sm:order-2 max-w-full sm:max-w-[22rem] lg:max-w-[29rem] 2xl:max-w-full h-fit ">
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

export const ScheduleTable = () => {
  return (
    <div className="flex justify-center my-8">
      <ul className="flex mt-2 border-t-2 border-t-primary-pink">
        <li className="text-xs sm:text-lg lg:text-xl sm:px-4 lg:px-8 py-4 border-r-2 border-r-primary-pink">
          <ul className="flex flex-col gap-y-5 w-max">
            <h5>
              <b>09:00 - 10:00</b>
            </h5>
            <h5>
              <b>10:00 - 10:05</b>
            </h5>
            <h5>
              <b>10:05 - 10:10</b>
            </h5>
            <h5>
              <b>10:10 - 10:20</b>
            </h5>
            <h5>
              <b>10:20 - 10:40</b>
            </h5>
            <h5>
              <b>10:40 - 10:45</b>
            </h5>
            <h5>
              <b>10:45 - 11:30</b>
            </h5>
            <h5>
              <b>11:30 - 11:35</b>
            </h5>
            <h5>
              <b>11:35 - 11:45</b>
            </h5>
            <h5>
              <b>11:45 - 12:05</b>
            </h5>
            <h5>
              <b>12:05 - 12:25</b>
            </h5>
            <h5>
              <b>12:25 - 12:35</b>
            </h5>
            <h5>
              <b>12:35 - 12:40</b>
            </h5>
            <h5>
              <b>12:40 - 13:00</b>
            </h5>
            <h5>
              <b>13:00 - 13:20</b>
            </h5>
            <h5>
              <b>13:20 - 13:40</b>
            </h5>
            <h5>
              <b>13:40 - 14:10</b>
            </h5>
            <h5>
              <b>14:10 - 14:25</b>
            </h5>
            <h5>
              <b>14:25- 15:10</b>
            </h5>
            <h5>
              <b>15:10- 15:15</b>
            </h5>
            <h5>
              <b>15:15 - 15:35</b>
            </h5>
            <h5>
              <b>15:35 - 15:50</b>
            </h5>
            <h5>
              <b>15:50 - 15:55</b>
            </h5>
            <h5>
              <b>15:55 - 16:15</b>
            </h5>
            <h5>
              <b>16:15 - 16:30</b>
            </h5>
            <h5>
              <b>16:30 - 16:45</b>
            </h5>
            <h5>
              <b>16:45 - 16:50</b>
            </h5>
            <h5>
              <b>16:50</b>
            </h5>
          </ul>
        </li>
        <li className="text-[10px] sm:text-lg lg:text-xl px-1 sm:px-4 lg:px-8 py-4">
          <ul className="flex flex-col gap-y-5">
            <h5>
              <b>Arrival</b>
            </h5>
            <h5>
              <b>Welcome to SCA Summit</b>
            </h5>
            <h5>
              <b>Welcome Address</b>
            </h5>
            <h5>
              <b>
                From Beneficiary to Data Analyst:{" "}
                <span className="hidden sm:inline sm:text-sm lg:text-base">
                  {" "}
                  A Story of Gratitude, Gorwth, and the Power of Community
                </span>
              </b>
            </h5>
            <h5>
              <b>1st Keynote Speech [Live]</b>
            </h5>
            <h5>
              <b>Sponsor Session & Community Highlight</b>
            </h5>
            <h5>
              <b>
                1st Panel Session: {""}
                <span className="hidden sm:inline sm:text-sm lg:text-base">
                  How Far? – A Real Assessment of Gender Equality in the African
                  Tech Industry
                </span>
              </b>
            </h5>
            <h5>
              <b>Sponsor Session & Community Highlight</b>
            </h5>
            <h5>
              <b>Games: Improv Speaking + Others</b>
            </h5>
            <h5>
              <b>1st Talk: Financial Mastery for Women in Tech</b>
            </h5>
            <h5>
              <b>Harnessing AI to Improve your Work as a Writer in Tech</b>
            </h5>
            <h5>
              <b>2nd Keynote Speech [Virtual]</b>
            </h5>
            <h5>
              <b>Sponsor Session & Community Highlight</b>
            </h5>
            <h5>
              <b>Building Digital Products for Kids</b>
            </h5>
            <h5>
              <b>2nd Talk </b>
            </h5>
            <h5>
              <b>3rd (Founder's) Keynote Speech</b>
            </h5>

            <h5>
              <b>Pictures x Lunch Break </b>
            </h5>
            <h5>
              <b>The Role of Microinteractions in UX Design </b>
            </h5>
            <h5>
              <b>
                2nd Panel Session: {""}
                <span className="hidden sm:inline sm:text-sm lg:text-base">
                  Cultivating Digital Leadership: Skills for Success in the Tech
                  Industry
                </span>
              </b>
            </h5>
            <h5>
              <b>Sponsor Session & Community Highlight </b>
            </h5>
            <h5>
              <b>
                The Anatomy of a Phishing Attack - Safeguarding Your Digital
                Identity{" "}
              </b>
            </h5>

            <h5>
              <b>Building a Career in Network Engineering </b>
            </h5>
            <h5>
              <b>Sponsor Session & Community Highlight</b>
            </h5>
            <h5>
              <b>Revolutionizing Health Tech with machine learning</b>
            </h5>
            <h5>
              <b>TechElle Awards Presentation</b>
            </h5>
            <h5>
              <b>Laptop Scholarship//Raffle Draw</b>
            </h5>
            <h5>
              <b>Announcements/Closing Address</b>
            </h5>
            <h5>
              <b>Departure</b>
            </h5>
          </ul>
        </li>
      </ul>
    </div>
  );
};
