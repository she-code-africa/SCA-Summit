import type { Dispatch, SetStateAction } from "react";
import { termsSections } from "../../utils/termsData";
import SecondaryPattern3 from "../../icons/SecondaryPattern3";

type Props = {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

const TermsNav = ({ tab, setTab }: Props) => {
  const handleClick = (value: string) => {
    setTab(value);
    document
      .getElementById(`terms-${value}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul className="w-full flex xl:flex-col overflow-auto hide-scrollbar gap-4 xl:max-w-90">
      {termsSections.map(({ label, value }) => (
        <li
          key={value}
          className="w-fit xl:w-full whitespace-nowrap xl:whitespace-normal  flex gap-4 items-start"
        >
          <span className="xl:inline-flex items-center mt-2 hidden">
            <SecondaryPattern3 />
          </span>
          <button
            type="button"
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

export default TermsNav;
