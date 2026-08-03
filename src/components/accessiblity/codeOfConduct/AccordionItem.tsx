import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MotionChevronDown = motion(ChevronDown);

// Helper to convert raw text with [email] into clickable links
const parseText = (text: string) => {
  const parts = text.split(/(\[.*?@.*?\])/g);
  return parts.map((part, index) => {
    const match = part.match(/\[(.*?@.*?)\]/);
    if (match) {
      const email = match[1];
      return (
        <a
          key={index}
          href={`mailto:${email}`}
          className="text-primary-magenta font-semibold hover:underline"
        >
          {email}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export function AccordionItem({
  data,
  isOpen,
  toggle
}: {
  data: any;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="pt-2 border-b border-transparent">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between text-left py-2"
      >
        <span className="description-text font-bold text-black">
          {data.title}
        </span>
        <span className="text-slate-900">
          <MotionChevronDown
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-3">
              {data.sections.map((section: any, idx: number) => {
                if (section.type === "paragraph") {
                  return (
                    <p
                      key={idx}
                      className="text-black description-light"
                    >
                      {parseText(section.text)}
                    </p>
                  );
                }
                if (section.type === "list") {
                  return (
                    <ul
                      key={idx}
                      className="space-y-2 description-light text-black list-disc list-outside pl-5"
                    >
                      {section.items.map((item: string, liIdx: number) => (
                        <li key={liIdx}>{parseText(item)}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
