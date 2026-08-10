import { motion } from "framer-motion";
import wavyBg from "../../assets/ticket-bg-pattern.png";
import ticketNextGen from "../../assets/ticket-blob-nextgen.png";
import ticketCommunityBuilder from "../../assets/ticket-blob-community.png";
import ticketImpactLeader from "../../assets/ticket-blob-impact-leader.png";
import ticketImpactArchitect from "../../assets/ticket-blob-impact-architect.png";

interface Ticket {
  key: string;
  image: string;
  alt: string;
}

const CHECKOUT_URL =
  "https://tix.africa/discover/she-code-africa-summit-2026/checkout?step=tickets";
const EVENT_PAGE_URL =
  "https://tix.africa/discover/she-code-africa-summit-2026";

const tickets: Ticket[] = [
  {
    key: "next-gen",
    image: ticketNextGen,
    alt: "Next Gen ticket — Lagos, Nigeria, Sept 19 2026"
  },
  {
    key: "community-builder",
    image: ticketCommunityBuilder,
    alt: "Community Builder ticket — Lagos, Nigeria, Sept 19 2026"
  },
  {
    key: "impact-leader",
    image: ticketImpactLeader,
    alt: "Impact Leader ticket — Lagos, Nigeria, Sept 19 2026"
  },
  {
    key: "impact-architect",
    image: ticketImpactArchitect,
    alt: "Impact Architect ticket — Lagos, Nigeria, Sept 19 2026"
  }
];

export function TicketsSection() {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Decorative wavy line background */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url(${wavyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-display section-header text-white tracking-tight mb-2">
            Get your tickets
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Get your tickets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-x-8 sm:gap-y-12 mb-16">
          {tickets.map((ticket, i) => (
            <motion.a
              key={ticket.key}
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="block w-full"
            >
              <img
                src={ticket.image}
                alt={ticket.alt}
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.a
            href={EVENT_PAGE_URL} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-9.75 py-4.25 rounded-lg bg-primary-magenta text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-primary-dark-pink transition-colors"
          >
            Buy Ticket
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
