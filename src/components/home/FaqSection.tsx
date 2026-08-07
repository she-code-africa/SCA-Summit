import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqTab, faqData } from "../../utils/appData";
import AddIcon from "../../icons/AddIcon";
import MinusIcon from "../../icons/MinusIcon";

const FaqSection = () => {
  const [faq, setFaq] = useState("general-information");
  const [openFaq, setOpenFaq] = useState("");

  useEffect(() => {
    setOpenFaq("");
  }, [faq]);

  const currentFaqs = faqData[faq] || [];

  return (
    <section className="w-full bg-pastel-pink">
      <div className="w-full py-25 max-w-310 mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-black text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center"
        >
          Frequently Asked Questions
        </motion.h3>
        <div className="w-full flex flex-col xl:flex-row gap-16 mt-10">
          <ul className="w-full xl:max-w-63 flex gap-3 overflow-auto hide-scrollbar items-center xl:flex-col xl:items-start">
            {faqTab.map((item) => (
              <li
                className="font-sans shrink-0 xl:shrink-[unset]"
                key={item.value}
              >
                <button
                  className={`font-semibold cursor-pointer text-2xl whitespace-nowrap xl:whitespace-normal ${
                    item.value === faq ? "text-primary-magenta" : "text-black"
                  }`}
                  title={item.label}
                  onClick={() => setFaq(item.value)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-full space-y-4 xl:max-w-229.5">
            {currentFaqs.map((item) => {
              const isOpen = openFaq === item.question;

              return (
                <div
                  className={`border-[#DDE6F0] border w-full py-8 px-6 md:py-12 md:px-10 ${
                    isOpen ? "bg-[#F8F8F8]" : "bg-white"
                  }`}
                  key={item.question}
                >
                  <article
                    className="w-full flex items-center gap-4 justify-between cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? "" : item.question)}
                  >
                    <h4 className="w-full text-[#211F1F] font-sans font-extrabold text-xl">
                      {item.question}
                    </h4>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-flex"
                    >
                      {isOpen ? <MinusIcon /> : <AddIcon />}
                    </motion.span>
                  </article>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 w-full text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
