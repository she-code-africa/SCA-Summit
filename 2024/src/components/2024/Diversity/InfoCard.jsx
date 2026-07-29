import React from "react";

const InfoCard = ({ heading, paragraph }) => {
  return (
    <article className="w-fit">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-[38px] my-3 oswald-font">
        {heading}
      </h3>
      <p className="my-4 text-base leading-normal">{paragraph}</p>
    </article>
  );
};

export default InfoCard;
