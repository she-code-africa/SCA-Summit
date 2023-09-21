import React from "react";
import { partners } from "../../utils";

const Partners = () => {
  const platinum = partners.filter((partner) => partner.type === "platinum");
  const bronze = partners.filter((partner) => partner.type === "bronze");

  const support = partners.filter((partner) => partner.type === "support");

  return (
    <section className="container mx-auto px-2">
      <h3 className="text-primary-pink text-xs md:text-base uppercase font-bold">
        ~Partners/Sponsors~
      </h3>
      <div className="flex flex-col gap-y-5 my-4">
        <div>
          <h4 className="uppercase my-4 text-sm text-[#210D15] font-bold">
            Platinum Sponsors
          </h4>
          <div className="flex mt-4">
            {platinum.map(({ name, image }) => {
              return <img className="max-w-[300px]" src={image} alt={name} />;
            })}
          </div>
        </div>

        <div>
          <h4 className="uppercase my-4 text-sm text-[#210D15] font-bold">
            Bronze Sponsors
          </h4>
          <div className="flex mt-4">
            {bronze.map(({ name, image }) => {
              return <img className="max-w-[150px]" src={image} alt={name} />;
            })}
          </div>
        </div>

        <div>
          <h4 className="uppercase my-4 text-sm text-[#210D15] font-bold">
            Partners
          </h4>
          <div className="flex mt-4 gap-4 lg:gap-8 justify-between lg:flex-wrap max-lg:overflow-x-scroll">
            {support.map(({ name, image }) => {
              return (
                <img
                  className="h-[100px] max-w-[200px]"
                  src={image}
                  alt={name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
