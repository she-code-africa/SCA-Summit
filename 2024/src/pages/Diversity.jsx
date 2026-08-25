import React from "react";
import heroImage from "../assets/images/2024/DandI/DI-Hero.png";
import CodeOFConduct from "../components/2024/Diversity/CodeOFConduct";
import InfoCard from "../components/2024/Diversity/InfoCard";
import { accessibilityData, infoCardData } from "../utils/diversityData";

const Diversity = () => {
  return (
    <main className="emboss-bg">
      <section className=" w-full pt-10 md:pt-0">
        <div className="max-w-[1009px] w-[90%] xl:w-full mx-auto h-full">
          <img src={heroImage} alt="hero" className="w-full h-full" />
        </div>
      </section>

      <section className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full">
        <article className="w-full my-6">
          <h4 className="uppercase text-primary-pink text-center font-bold text-xs md:text-base oswald-font w-[90%] mx-auto">
            ~ she code africa summit 2024 ~
          </h4>

          <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl my-3 oswald-font text-center">
            Diversity and Inclusion
          </h3>
          <p className="mullish-font text-sealBrown text-sm md:text-base leading-[2] md:leading-[2] text-center max-w-[662px] mx-auto w-full">
            Inclusion and representation are important to us at She Code Africa
            (SCA), and it is imperative to us that everyone in the community who
            wants to participate feels welcome to do so.
          </p>
        </article>

        <CodeOFConduct />

        <div className="my-16 lg:my-24 w-full">
          <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 justify-between">
            {infoCardData.map((cardData, i) => (
              <InfoCard
                key={i}
                heading={cardData.heading}
                paragraph={cardData.paragraph}
              />
            ))}
          </div>
        </div>

        <div className="my-16 lg:my-24 w-full">
          <h4 className="uppercase text-primary-pink text-center font-bold text-xs md:text-base oswald-font w-[90%] mx-auto">
            ~ she code africa summit 2024 ~
          </h4>

          <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl my-3 oswald-font text-center">
            Accessibilty
          </h3>
          <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 justify-between my-10 lg:my-20">
            {accessibilityData.map((cardData, i) => (
              <InfoCard
                key={i}
                heading={cardData.heading}
                paragraph={cardData.paragraph}
              />
            ))}
          </div>
        </div>

        <div className="my-16 lg:my-24 w-full">
          <h4 className="uppercase text-primary-pink text-center font-bold text-xs md:text-base oswald-font w-[90%] mx-auto">
            ~ she code africa summit 2024 ~
          </h4>

          <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl my-3 oswald-font text-center">
            First Aid/Medical Assistance
          </h3>
          <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 justify-between my-10 lg:my-20">
            <article className="w-fit">
              <p className="my-4 text-base leading-normal">
                If you require first aid or medical assistance, please inform a
                volunteer immediately. They will direct you to the appropriate
                personnel. In case of an emergency, dial 767 or 112 for police
                and ambulance services.
              </p>
            </article>
            <article className="w-fit">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-[38px] my-3 oswald-font">
                Need Help? Let Us Know
              </h3>
              <ul className="flex gap-1 flex-col list-disc list-inside">
                <li className="text-base">
                  MaryBlessing, Community Manager
                  <a
                    href="mailto:maryblessing@shecodeafrica.org"
                    className="underline"
                  >
                    {" "}
                    (maryblessing@shecodeafrica.org).
                  </a>
                </li>
                <li className="text-base">
                  Programs Team{" "}
                  <a
                    href="mailto:summit@shecodeafrica.org"
                    className="underline"
                  >
                    {" "}
                    (summit@shecodeafrica.org).
                  </a>{" "}
                </li>
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-10 mb-20">
          <p className="text-base leading-normal mullish-font">
            We're constantly striving to create a truly inclusive and welcoming
            environment for all attendees. Your feedback is invaluable in
            helping us achieve this goal. If you have suggestions on how we can
            make our events even more inclusive, please don't hesitate to share
            your thoughts with our Community Team at{" "}
            <a href="mailto:community@shecodeafrica.org" className="underline">
              {" "}
              community@shecodeafrica.org.
            </a>{" "}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Diversity;
