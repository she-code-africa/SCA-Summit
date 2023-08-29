import React from "react";
import schedImg from "../../assets/images/schedule-img.jpg";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";
import { AccordionContainer, AccordionItem } from "../Accordion";

const Schedule = () => {
  const PanelItems = () => {
    return (
      <ul className="flex-col flex gap-1 list-disc marker:text-primary-pink">
        <li>
          How Far? – A Real Assessment of Gender Equality in the African Tech
          Industry
        </li>
        <li>
          Cultivating Digital Leadership: Skills for Success in the Tech
          Industry{" "}
        </li>
      </ul>
    );
  };
  return (
    <section
      id="schedule"
      className="bg-primary-light-pink py-8 md:py-16 lg:py-36 relative"
    >
      <div className="container mx-auto px-2">
        <h1 className="text-primary-pink text-xs md:text-base uppercase font-bold">
          ~WHAT TO EXPECT AT SCA SUMMIT 2023?~
        </h1>
        <div className="grid sm:grid-cols-2">
          <div className="absolute left-0 top-16 md:top-72 lg:top-[30rem] w-1/6 sm:w-full">
            <img src={squiggly2} alt="" />
          </div>
          <div className="my-6 order-2 sm:order-1">
            <AccordionContainer className="flex flex-col gap-y-2">
              <AccordionItem title="Panel Sessions" content={<PanelItems />} />
              <AccordionItem title="Fun & Games" />
            </AccordionContainer>
          </div>
          <div className="absolute right-96 top-24 md:top-32">
            <img src={dot} alt="" />
          </div>
          <div className="rounded-3xl mt-16 md:mt-0 border-4 md:border-8 border-primary-pink sm:rotate-12 order-1 sm:order-2 max-w-full sm:max-w-sm lg:max-w-lg 2xl:max-w-full">
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
