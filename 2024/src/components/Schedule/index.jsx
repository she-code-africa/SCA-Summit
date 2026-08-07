import React from "react";
import scheduleImage from "../../assets/images/2024/schedule-img.png";

const Schedule = () => {
  return (
    <section
      className="w-full my-28 py-5 relative overflow-hidden"
      id="schedule"
    >
      <div className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full">
        <div className="flex w-full flex-col-reverse lg:flex-row gap-20 lg:items-center lg:justify-between py-5">
          <article className="w-full lg:max-w-[550px]">
            <h4 className="uppercase text-primary-pink font-bold text-xs md:text-base oswald-font">
              ~ WHAT TO EXPECT AT SCA SUMMIT 2024? ~
            </h4>
            <ul className=" mullish-font text-black text-sm md:text-base leading-[2] md:leading-[2] mt-4 flex flex-col gap-4">
              <li className="capitalize text-base md:text-xl font-semibold custom-list-one relative custom-list">
                keynote presentation
              </li>
              <li className="capitalize text-base md:text-xl font-semibold custom-list custom-list-two">
                workshops
              </li>
              <li className="capitalize text-base md:text-xl font-semibold custom-list custom-list-three">
                talks
              </li>
              <li className="capitalize text-base md:text-xl font-semibold custom-list custom-list-four">
                panel sessions
              </li>
              <li className="capitalize text-base md:text-xl font-semibold custom-list custom-list-five">
                exhibitions
              </li>
              <li className="text-base md:text-xl font-semibold custom-list custom-list-six">
                Awards and Scholarship
              </li>
            </ul>
          </article>

          <figure className="w-full max-w-[567px] double-angle">
            <img src={scheduleImage} alt="about-pic" />
          </figure>
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
