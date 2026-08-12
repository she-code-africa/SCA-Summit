import { motion } from "framer-motion";

import sponsorPhoto from "../../assets/get-involved-sponsor.jpg";
import brandPhoto from "../../assets/get-involved-brand.jpg";
import mediaPhoto from "../../assets/get-involved-media.jpg";
import logisticsPhoto from "../../assets/get-involved-logistics.jpg";
import diversityPhoto from "../../assets/get-involved-diversity.jpg";

interface GetInvolvedCard {
  key: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  bgColor: string;
  ctaColor: string;
  size: "large" | "small";
  image: string;
}

const cards: GetInvolvedCard[] = [
  {
    key: "sponsor",
    title: "Sponsor SCA Summit 2026",
    description:
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology professionals, emerging talent, founders and industry leaders.",
    ctaLabel: "Become a Sponsor",
    ctaHref: " https://forms.gle/s6bhvvSeEXFWzT5Y7",
    bgColor: "#ffffff",
    ctaColor: "#B70569",
    size: "large",
    image: sponsorPhoto
  },
  {
    key: "brand",
    title: "Showcase your Brand",
    description:
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology professionals, emerging talent, founders and industry leaders.",
    ctaLabel: "Exhibit your brand",
    ctaHref: " https://forms.gle/s6bhvvSeEXFWzT5Y7",
    bgColor: "#FFEAF6",
    ctaColor: "#B70569",
    size: "large",
    image: brandPhoto
  },
  {
    key: "media",
    title: "Media Partner",
    description:
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology",
    ctaLabel: "Become a Partner",
    ctaHref: " https://forms.gle/s6bhvvSeEXFWzT5Y7",
    bgColor: "#FFFDDE",
    ctaColor: "#B70569",
    size: "small",
    image: mediaPhoto
  },
  {
    key: "logistics",
    title: "Logistics Partner",
    description:
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology",
    ctaLabel: "Become a Partner",
    ctaHref: " https://forms.gle/s6bhvvSeEXFWzT5Y7",
    bgColor: "#F8EAFF",
    ctaColor: "#B70569",
    size: "small",
    image: logisticsPhoto
  },
  {
    key: "diversity",
    title: "Diversity ticket Partner",
    description:
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology",
    ctaLabel: "Partner with us",
    ctaHref: " https://forms.gle/s6bhvvSeEXFWzT5Y7",
    bgColor: "#FFFDDE",
    ctaColor: "#B70569",
    size: "small",
    image: diversityPhoto
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) =>
    ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: "easeOut" }
    }) as const
};

function GetInvolvedCardItem({
  card,
  delay
}: {
  card: GetInvolvedCard;
  delay: number;
}) {
  return (
    <motion.div
      custom={delay}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl overflow-hidden shadow-lg flex flex-col h-full p-4 sm:p-6 gap-8"
      style={{ backgroundColor: card.bgColor }}
    >
      <div
        className={`w-full overflow-hidden ${card.size === "large" ? "aspect-700/610" : "aspect-4/5 sm:aspect-699/400"}`}
      >
        <img
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-cover scale-115 transition-transform duration-300 ease-in-out hover:scale-120"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="subsection-header text-black mb-3">{card.title}</h3>
        <p className="text-black card-text flex-1 mb-6">{card.description}</p>
        <a
          href={card.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-start px-8 py-4.5 rounded-md text-white text-base font-semibold transition-colors hover:brightness-110"
          style={{ backgroundColor: card.ctaColor }}
        >
          {card.ctaLabel}
        </a>
      </div>
    </motion.div>
  );
}

export function GetInvolvedSection() {
  const largeCards = cards.filter((c) => c.size === "large");
  const smallCards = cards.filter((c) => c.size === "small");

  return (
    <section className="relative w-full bg-secondary-velvet py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-14 sm:mb-16"
        >
          <h2 className="font-display hero-title text-white">
            Get Involved
          </h2>
          <p className="max-w-4xl mx-auto text-white text-lg sm:text-2xl leading-relaxed">
            There's more than one way to show up, sponsor, exhibit, partner on
            media or logistics, or fund a ticket for someone who couldn't
            otherwise attend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {largeCards.map((card, i) => (
            <GetInvolvedCardItem key={card.key} card={card} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {smallCards.map((card, i) => (
            <GetInvolvedCardItem
              key={card.key}
              card={card}
              delay={0.2 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
