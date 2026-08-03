import { useState } from "react";
import { faqTab } from "../../utils/appData";
import AddIcon from "../../icons/AddIcon";
import MinusIcon from "../../icons/MinusIcon";

const FaqSection = () => {
  const [faq, setFaq] = useState("accessibility");
  const [openFaq, setOpenFaq] = useState("1");

  return (
    <section className="w-full bg-pastel-pink">
      <div className="w-full py-25 max-w-310 mx-auto px-4 sm:px-6 lg:px-8 ">
        <h3 className="font-display text-black text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
          Frequently Asked Questions
        </h3>
        <div className="w-full flex flex-col xl:flex-row gap-16 mt-10">
          <ul className="w-full xl:max-w-63 flex gap-3 overflow-auto hide-scrollbar items-center xl:flex-col xl:items-start">
            {faqTab.map((item) => (
              <li
                className="font-sans shrink-0 xl:shrink-[unset]"
                key={item.value}
              >
                <button
                  className={`font-semibold cursor-pointer  text-2xl ${item.value === faq ? "text-primary-magenta" : "text-black"}`}
                  title={item.label}
                  onClick={() => setFaq(item.value)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-full space-y-4 xl:max-w-229.5">
            {[...Array(4)].map((_, i) => (
              <div
                className={`border-[#DDE6F0] border w-full py-8 px-6 md:py-12 md:px-10 ${openFaq === i.toString() ? "bg-[#F8F8F8] " : "bg-white "}`}
                key={i}
              >
                <article
                  className="w-full flex items-center gap-4 justify-between cursor-pointer"
                  onClick={() =>
                    setOpenFaq((prev) => (prev === i.toString() ? "" : `${i}`))
                  }
                >
                  <h4 className="w-full text-[#211F1F] font-sans font-extrabold text-xl">
                    Title
                  </h4>

                  {openFaq === i.toString() ? <MinusIcon /> : <AddIcon />}
                </article>

                {openFaq === i.toString() && (
                  <p className="mt-4 w-full text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    enim nulla aliquam nibh sodales pharetra ullamcorper lacus
                    eu. Sed turpis vitae maecenas commodo faucibus egestas at.
                    Eu velit nibh vel, etiam id feugiat malesuada sagittis.
                    Praesent commodo posuere sem et. Amet pellentesque sodales
                    sollicitudin ullamcorper nisi nunc viverra enim. Nisl sapien
                    tincidunt elit massa ornare magna. Dolor nullam luctus
                    ultrices amet odio.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
