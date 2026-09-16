import { AnimatePresence, motion } from "framer-motion";
import partner from "../../assets/home/transport-partner.png";
import driveMe from "../../assets/home/DriveMe.png";

const TransportationPartner = () => {
  return (
    <section className="w-full mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display capitalize text-black text-[48px] sm:text-[56px] lg:text-[60px] w-full text-center"
      >
        Transportation Partner
      </motion.h3>

      <div className="w-full mt-10">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5 * 0.06,
            }}
            className="w-full border border-[#E6DBE1] bg-sca-white flex flex-col lg:flex-row"
          >
            <figure className="h-87.5 sm:h-auto w-full xl:max-w-87.5">
              <img
                src={partner}
                alt="Transport Partner"
                className="w-full h-full object-cover"
              />
            </figure>
            <article className="w-full py-10 sm:py-17.5 px-6 sm:px-10">
              <figure className="w-full max-w-37.75 h-18.75">
                <img
                  src={driveMe}
                  alt="DriveMe"
                  className="w-full h-full object-contain"
                />
              </figure>

              {/* <p className="mt-6 font-sans hidden text-lg text-black font-normal">
                DriveMe is Nigeria's electric mobility platform — financing EV
                ownership for ride-hailing drivers through rent-to-own, and
                placing professional drivers with vetted corporate clients
                through our Matching Network.
              </p> */}

              <div className="mt-8 w-full">
                <a
                  href="https://www.instagram.com/driveme.carhire?stkn=MXZ3M2UzdDZobDF3ag%3D%3D"
                  target="_blank"
                  className="underline text-black font-bold text-lg"
                >
                  Driveme
                </a>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TransportationPartner;
