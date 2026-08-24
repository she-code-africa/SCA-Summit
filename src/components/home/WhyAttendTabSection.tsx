import type { Dispatch, SetStateAction } from "react";
import SecondaryPattern3 from "../../icons/SecondaryPattern3";
import { whyAttendTab } from "../../utils/appData";

type Props = {
  setTab: Dispatch<SetStateAction<string>>;
  tab: string;
};

const WhyAttendTabSection = ({ setTab, tab }: Props) => {
  const handleClick = (value: string) => {
    setTab(value);
    document
      .getElementById(`tab-${value}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul className="w-full flex xl:flex-col overflow-auto hide-scrollbar gap-6  xl:max-w-46.75">
      {whyAttendTab.map(({ label, value }, idx) => (
        <li
          key={idx}
          className="w-fit xl:w-full whitespace-nowrap xl:whitespace-normal  flex gap-4 items-start"
        >
          <span className="xl:inline-flex items-center hidden">
            <SecondaryPattern3 />
          </span>

          <button
            onClick={() => handleClick(value)}
            className={`inline-block cursor-pointer xl:text-left text-2xl sm:text-[28px] xl:text-[32px] font-display font-semibold ${tab === value ? "text-primary-magenta" : "text-[#8E8E93]"}`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WhyAttendTabSection;
