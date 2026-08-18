import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { speakers, speakersTab } from "../../utils/speakers";
import SpeakersHero from "./SpeakersHero";

const SpeakersComponent = () => {
  const [tabs, setTabs] = useState("all");
  const filteredSpeakers =
    tabs === "all"
      ? speakers
      : speakers.filter((speaker) => speaker.category === tabs);

  return (
    <div className="min-h-screen w-full">
      <SpeakersHero />

      <section className="w-full bg-white py-25">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-310.5">
          <div className="w-full gap-7.5 overflow-auto hide-scrollbar flex items-center">
            {speakersTab.map((item) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`transition-colors whitespace-nowrap font-sans cursor-pointer duration-300 ease-in px-8 py-4.5 rounded-lg ${tabs === item.key ? "bg-primary-magenta text-sca-white" : "bg-sca-blush text-secondary-velvet"}`}
                key={item.key}
                onClick={() => setTabs(item.key)}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <section className="w-full space-y-10 mt-11">
            <AnimatePresence mode="popLayout">
              {filteredSpeakers.map((data, i) => {
                const isReversed = (i + 1) % 2 === 0;

                return (
                  <motion.div
                    layout
                    key={data.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: i * 0.06,
                    }}
                    style={{ background: data.bg }}
                    className={`w-full   flex ${isReversed ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"}`}
                  >
                    <figure className="h-90 sm:h-auto w-full xl:max-w-99.5">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <article
                      className={`py-6  md:py-8.5 space-y-6 w-full xl:max-w-182.25 ${isReversed ? "pl-6 md:pl-0 pr-6 md:pr-14.25" : "px-6 md:px-14.25"}`}
                    >
                      <div className="w-full">
                        <h4 className="text-black font-bold text-[32px] font-sans">
                          {data.name}
                        </h4>

                        <p className="font-sans mt-1 text-2xl text-black">
                          {data.title}
                        </p>
                      </div>

                      {data.bio.map((data, i) => (
                        <p
                          className="text-lg font-sans font-medium text-black"
                          key={i}
                        >
                          {data}
                        </p>
                      ))}
                    </article>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SpeakersComponent;
