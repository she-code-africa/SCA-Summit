import React from "react";
import { scheduleData } from "../../../utils/scheduleData";

const ScheduleComponent = () => {
  return (
    <section className="w-full flex flex-nowrap overflow-x-auto text-sealBrown no-scrollbar">
      <div className="flex-shrink-0 w-[1000px] xl:w-full">
        {scheduleData.map((data, i) => (
          <div
            className="w-full grid grid-cols-3  py-10 place-items-center border-b border-b-[rgba(204,195,200,1)]"
            key={i}
          >
            <p className="mullish-font uppercase w-full text-lg font-semibold">
              {data.time}
            </p>

            <article className="w-full">
              <h3 className="oswald-font text-primary-pink text-[28px] p-0 font-semibold">
                {data.activity}
              </h3>
              <p className="text-base font-medium">{data.description}</p>
            </article>

            <p className="mullish-font text-lg font-semibold w-full text-center">
              {data.venue}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleComponent;
