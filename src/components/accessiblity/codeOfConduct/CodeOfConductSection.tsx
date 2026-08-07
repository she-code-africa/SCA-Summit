import { useState } from "react";
import { motion } from "framer-motion";
import { CONTENT_MAP, tabs } from "../../../data/codeOfConductData";
import { AccordionItem } from "./AccordionItem";
import FlowerPinwheel from "../../FlowerPinwheel";
import codeOfConductImg from "../../../assets/code-of-conduct-photo.jpg";

export function CodeOfConductSection() {
  const [activeTab, setActiveTab] = useState("code-of-conduct");
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(
    {}
  );

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    const tabContent = CONTENT_MAP[key];
    const firstKey =
      tabContent.accordions && tabContent.accordions.length > 0
        ? tabContent.accordions[0].key
        : undefined;

    const newState: Record<string, boolean> = {};
    if (firstKey) {
      newState[firstKey] = true;
    }
    setOpenAccordions(newState);
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeContent = CONTENT_MAP[activeTab];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab navigation */}
        <div className="flex flex-wrap gap-3 mb-12 sm:mb-16">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="relative px-5 sm:px-8 py-4.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="conductTabBg"
                    className="absolute inset-0 rounded-lg bg-primary-magenta"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive ? "text-white" : "text-secondary-velvet"}`}
                >
                  {tab.label}
                </span>
                {!isActive && (
                  <span className="absolute inset-0 rounded-lg bg-sca-blush z-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content + image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-display section-header text-black">
              {activeContent.title}
            </h2>

            {/* Static Intro for Code of Conduct (Exact custom classes restored) */}
            {activeTab === "code-of-conduct" && (
              <div className="space-y-6">
                <p className="text-black description-light">
                  She Code Africa is committed to maintaining safe, respectful,
                  inclusive, and empowering spaces for everyone attending the
                  Summit. By registering for the Summit, all participants
                  including attendees, speakers, volunteers, sponsors, partners,
                  exhibitors, and staff agree to abide by the She Code Africa
                  Code of Conduct.
                </p>

                <div className="space-y-3">
                  <p className="text-black description-text">
                    We expect everyone to:
                  </p>
                  <ul className="space-y-2 text-black description-light list-disc list-outside pl-5">
                    <li>Treat every participant with dignity and respect.</li>
                    <li>Use inclusive and non-discriminatory language.</li>
                    <li>Respect personal boundaries and privacy.</li>
                    <li>Foster a welcoming and collaborative environment.</li>
                    <li>Provide constructive and respectful feedback.</li>
                    <li>
                      Refrain from harassment, discrimination, intimidation,
                      bullying, or disruptive behaviour.
                    </li>
                  </ul>
                </div>

                <p className="text-black description-light">
                  Any violation of the Code of Conduct may result in removal
                  from the Summit without refund and, where appropriate,
                  referral to the relevant authorities. If you experience or
                  witness inappropriate behaviour, please speak with a member of
                  the Community Team or email{" "}
                  <a
                    href="mailto:community@shecodeafrica.org"
                    className="text-primary-magenta font-semibold hover:underline"
                  >
                    community@shecodeafrica.org
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Fallback for First Aid (No accordions) */}
            {activeTab === "first-aid" && (
              <div className="space-y-6">
                <p className="text-black description-light">
                  If you require first aid or medical assistance during the
                  Summit, please notify the nearest volunteer or organizing team
                  member immediately. They will guide you to the appropriate
                  support available on-site.
                </p>
                <p className="text-black description-light">
                  In the event of an emergency, you may also contact the
                  appropriate emergency services by dialing{" "}
                  <span className="font-semibold">767</span> or{" "}
                  <span className="font-semibold">112</span> for police and
                  ambulance assistance.
                </p>
              </div>
            )}

            {activeContent.accordions &&
              activeContent.accordions.length > 0 && (
                <div className="space-y-2">
                  {activeContent.accordions.map((accordion: any) => (
                    <AccordionItem
                      key={accordion.key}
                      data={accordion}
                      isOpen={!!openAccordions[accordion.key]}
                      toggle={() => toggleAccordion(accordion.key)}
                    />
                  ))}
                </div>
              )}
          </motion.div>

          {/* Right Column - Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Pinwheel accent */}
            <motion.div
              initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute -top-8 -right-6 sm:-top-6 sm:-right-5 z-20"
            >
              <FlowerPinwheel
                className="w-16 h-16 sm:w-20 sm:h-20"
                color="#d4e157"
              />
            </motion.div>

            {/* Image frame with exact corner curves from your design */}
            <div className="relative border-[6px] sm:border-6 border-secondary-velvet overflow-hidden rounded-tl-none rounded-tr-[25px] rounded-br-none rounded-bl-[25px] sm:rounded-tr-[50px] sm:rounded-br-none sm:rounded-bl-[50px]">
              <img
                src={codeOfConductImg}
                alt="Attendee at the She Code Africa Summit"
                className="w-full h-full object-cover aspect-484/581"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
