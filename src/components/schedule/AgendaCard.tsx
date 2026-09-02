import { motion } from "framer-motion";
import type { AgendaItem } from "../../data/scheduleData";

export function AgendaCard({
  item,
  index,
}: {
  item: AgendaItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="relative border-2 bg-white border-primary-light-pink rounded-2xl px-5 sm:px-8 py-5 sm:py-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        {/* Time */}
        <div className="shrink-0 w-full sm:w-40">
          <span className="text-sm sm:text-base text-black font-medium">
            {item.time}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-magenta leading-snug">
              {item.title}
            </h3>
            <span className="text-sm sm:text-base hidden text-black shrink-0 lg:pt-1">
              {item.tag}
            </span>
          </div>
          {/* hide for now: subtitle and speakers */}
          {item.subtitle && (
            <p className="mt-2 text-sm sm:text-base text-black hidden">
              {item.subtitle}
            </p>
          )}
          {item.speakers && (
            <div className="mt-2 space-y-1">
              {item.speakers.map((speaker, i) => (
                <p key={i} className="text-sm sm:text-base text-black hidden">
                  {speaker}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
