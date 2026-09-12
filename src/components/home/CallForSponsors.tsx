import { motion, type Variants } from "framer-motion";
import sponsorCall from "../../assets/home/sponsorCall.png";

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const CallForSponsors = () => {
  return (
    <section className="w-full mt-20 bg-sca-white">
      <div className="w-full py-17.5 max-w-307 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center gap-10.25 justify-between">
          <article className="xl:max-w-185 w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display capitalize text-black text-[48px] sm:text-[56px] lg:text-[64px] w-full "
            >
              Call for partners & sponsors
            </motion.h3>

            <motion.p
              variants={heroItem}
              className="font-sans mt-6 text-base sm:text-2xl font-medium text-black mx-auto w-full"
            >
              We’re looking to work with organisations that want to support the
              next generation of African women building and leading in
              technology.
              <span className="inline-block mt-6">
                From Sponsorship and Media to Logistics, Hiring and Exhibition
                opportunities, there are different ways to partner with us.
              </span>
              <span className="inline-block mt-6">
                Interested in partnering with She Code Africa?
              </span>
            </motion.p>

            <div className="flex items-center w-full mt-6.25">
              <a
                href="https://drive.google.com/file/d/1pZxpSxCmeiPC6sYWyuVNPPlzI30NRdfc/view"
                className="px-8 py-4.5 w-full max-w-56.5 text-base flex items-center justify-center rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white transition shadow-sm hover:shadow"
              >
                View Partnership Deck
              </a>
            </div>
          </article>

          <div className="hidden xl:block max-w-108.5 w-full h-130.75">
            <img
              src={sponsorCall}
              alt="Sponsor call"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForSponsors;
