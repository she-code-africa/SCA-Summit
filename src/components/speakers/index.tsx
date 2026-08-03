import { useState } from "react";
import { speakersData, speakersTab } from "../../utils/speakers";
import SpeakersHero from "./SpeakersHero";

const SpeakersComponent = () => {
  const bgColors = [
    "bg-[#FFFDDE]",
    "bg-[#FFEAF6]",
    "bg-[#F8EAFF]",
    "bg-[#F5FFDE]",
  ];
  const [tabs, setTabs] = useState("all");
  const filteredSpeakers =
    tabs === "all"
      ? speakersData
      : speakersData.filter((speaker) => speaker.category === tabs);

  return (
    <div className="min-h-screen w-full">
      <SpeakersHero />

      <section className="w-full bg-white py-25">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-310.5">
          <div className="w-full gap-7.5 overflow-auto hide-scrollbar flex items-center">
            {speakersTab.map((item) => (
              <button
                className={`transition-all font-sans cursor-pointer duration-300 ease-in px-8 py-4.5 rounded-lg ${tabs === item.key ? "bg-primary-magenta text-sca-white" : "bg-sca-blush text-secondary-velvet"}`}
                key={item.key}
                onClick={() => setTabs(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <section className="w-full space-y-10 mt-11">
            {filteredSpeakers.map((data, i) => {
              const colorIndex = i % bgColors.length;

              return (
                <div
                  className={`${bgColors[colorIndex]} w-full   flex ${(i + 1) % 2 === 0 ? "flex-col-reverse sm:flex-row-reverse" : "flex-col sm:flex-row"}`}
                  key={data.id}
                >
                  <figure className="h-90 sm:h-auto w-full xl:max-w-99.5">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <article
                    className={`py-6  md:py-8.5 space-y-6 w-full xl:max-w-182.25 ${(i + 1) % 2 === 0 ? "pr-6 md:pr-14.25" : "px-6 md:px-14.25"}`}
                  >
                    <h4 className="text-black font-bold text-[32px] font-sans">
                      {data.name}
                    </h4>

                    <p className="text-lg font-sans font-medium">{data.bio}</p>
                  </article>
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default SpeakersComponent;
