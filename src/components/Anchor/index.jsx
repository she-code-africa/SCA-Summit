import { RxArrowTopRight } from "react-icons/rx";

export const SolidAnchor = ({ text, link }) => {
  return (
    <a
      className="bg-primary-pink rounded-30px text-white py-3.5 px-8 hover:bg-primary-light-pink hover:text-primary-pink hover:cursor-pointer border border-primary-pink transition ease-in delay-75 duration-300"
      href={link}
    >
      {text}
    </a>
  );
};

export const IconAnchor = ({ text, link }) => {
  return (
    <a
      href={link}
      className="flex items-center gap-1 transition ease-in delay-75 duration-300 hover:scale-110"
    >
      {text} <RxArrowTopRight color="#B70569" />
    </a>
  );
};
