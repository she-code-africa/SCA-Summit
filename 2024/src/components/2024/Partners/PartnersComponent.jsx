import React from "react";
import { diversitySponsors, partnersImages } from "../../../utils/partners";

const PartnersComponent = () => {
  return (
    <section className="w-[90%] mx-auto xl:max-w-[1200px] my-20 ">
      <article className="w-full">
        <h4 className="capitalize text-primary-pink font-bold text-xl md:text-2xl oswald-font text-center">
          ~ Diversity Ticket Sponsors ~
        </h4>

        <div className="w-full flex items-center justify-center gap-10 my-6 flex-wrap">
          {diversitySponsors.map((sponsor, i) => {
            return (
              <img
                src={sponsor.image}
                alt={sponsor.name}
                key={i}
                className="object-contain"
              />
            );
          })}
        </div>
      </article>

      <article className="w-full my-10">
        <h4 className="capitalize text-primary-pink font-bold text-xl md:text-2xl oswald-font text-center">
          ~ Partners ~
        </h4>

        <div className="w-full xl:w-[90%] xl:mx-auto my-6 flex flex-nowrap gap-5 items-center xl:justify-center xl:flex-wrap overflow-x-auto no-scrollbar">
          {partnersImages.map((sponsor, i) => {
            return (
              <figure
                className="flex-shrink-0 xl:flex-shrink-[unset] w-fit"
                key={i}
              >
                <img src={sponsor.image} alt={sponsor.name} />
              </figure>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default PartnersComponent;
