import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agendaItems } from "../data/scheduleData";
import { ScheduleHero } from "../components/schedule/ScheduleHero";
import { AgendaCard } from "../components/schedule/AgendaCard";

export default function SchedulePage() {
  const [activeSession, setActiveSession] = useState<"morning" | "afternoon">(
    "morning",
  );
  const filteredItems = agendaItems.filter(
    (item) => item.session === activeSession,
  );

  return (
    <div className="min-h-screen bg-white">
      <ScheduleHero />

      <section className="relative max-w-310.5 mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-14 sm:pb-20">
        <div className="relative z-30 flex flex-wrap gap-3 mb-10">
          {(["morning", "afternoon"] as const).map((session) => {
            const isActive = activeSession === session;
            return (
              <button
                key={session}
                onClick={() => setActiveSession(session)}
                className="relative cursor-pointer px-8 py-4.5 rounded-lg text-sm font-semibold transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="scheduleTabBg"
                    className="absolute inset-0 rounded-lg bg-[#be0e69]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive ? "text-white" : "text-[#be0e69]"}`}
                >
                  {session === "morning"
                    ? "Morning session"
                    : "Afternoon session"}
                </span>
                {!isActive && (
                  <span className="absolute inset-0 rounded-lg bg-pink-100 z-0" />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSession}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-30 space-y-6"
          >
            {filteredItems.map((item, i) => (
              <AgendaCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
