import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { termsSections, type TermsBlock } from "../../utils/termsData";

type Props = {
  setTab: Dispatch<SetStateAction<string>>;
};

const Block = ({ block }: { block: TermsBlock }) => {
  if (block.type === "p") {
    return (
      <p className="text-lg sm:text-2xl font-medium font-sans">{block.text}</p>
    );
  }

  return (
    <ul className="space-y-2">
      {block.items.map((item) => (
        <li key={item} className="text-lg sm:text-2xl font-medium font-sans">
          {item}
        </li>
      ))}
    </ul>
  );
};

const TermsContent = ({ setTab }: Props) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const closest = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );

        const value = closest.target.getAttribute("data-tab-value");
        if (value) setTab(value);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setTab]);

  return (
    <section className="w-full space-y-12">
      {termsSections.map(({ value, label, content }) => (
        <div
          key={value}
          id={`terms-${value}`}
          data-tab-value={value}
          ref={(el) => {
            sectionRefs.current[value] = el;
          }}
          className="space-y-4 scroll-mt-40"
        >
          <h2 className="font-display text-black text-4xl sm:text-[44px]">
            {label}
          </h2>
          {content.map((block, idx) => (
            <Block key={idx} block={block} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default TermsContent;
