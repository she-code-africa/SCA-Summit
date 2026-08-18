import { motion } from "framer-motion";
import { speakers } from "../../utils/speakers";


const SpeakersSection = () => {
  // Duplicate the list so the track can loop seamlessly (0% -> -50%)
  const marqueeSpeakers = [...speakers, ...speakers];

  return (
    <section className="bg-secondary-velvet w-full relative">
      <div className="absolute inset-0 bg-homeSpeaker bg-cover bg-no-repeat"></div>
      <div className="w-full py-25">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 sm:px-6 lg:px-8 w-full"
        >
          <p className="max-w-fit mx-auto text-2xl rounded-[30px] px-7 py-4.25 bg-pastel-pink text-primary-magenta font-sans font-semibold capitalize text-center">
            speakers
          </p>

          <h3 className="font-display text-sca-white text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
            Who's taking the stage?
          </h3>
        </motion.article>

        {/*
          The scrolling track below stays on a plain CSS keyframe animation
          (animate-marquee) rather than Framer Motion — it needs to run
          continuously and infinitely, which fights against Motion's
          mount/viewport-triggered model. We only fade the section itself
          in on scroll; the marquee is left alone.
        */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-11.5 w-full overflow-hidden group"
        >
          <div className="flex gap-7.5 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeSpeakers.map((speaker, i) => (
              <div
                className="shrink-0 w-full max-w-93.5 bg-sca-white border-2 border-primary-magenta rounded-[15.29px] p-5"
                key={speaker.id}
              >
                <figure className="rounded-[15px] w-full h-62.25 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt="speaker"
                    className="object-cover w-full h-full"
                  />
                </figure>

                <article className="mt-5 w-full">
                  <h4 className="text-2xl font-sans font-bold text-primary-magenta">
                    {speaker.name}
                  </h4>

                  <p className="text-xl text-black font-medium">
                    {speaker.title}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default SpeakersSection;
