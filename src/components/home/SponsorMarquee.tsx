import * as MarqueeModule from "react-fast-marquee";
import FlowerVector from "../../icons/FlowerVector";

const Marquee =
  (MarqueeModule as any).default?.default ?? (MarqueeModule as any).default;

const SponsorMarquee = () => {
  return (
    <section className="w-full bg-primary-magenta py-4.5 sm:py-9 text-sca-white font-display">
      <Marquee speed={60} gradient={false} autoFill>
        <article className="w-fit flex items-center gap-5 sm:gap-7 mr-5 sm:mr-7">
          <h4 className="text-[48px] sm:text-[60px]">
            Our Sponsors & Partners
          </h4>
          <FlowerVector className="text-sca-white size-6 sm:size-8.75" />
        </article>
      </Marquee>
    </section>
  );
};

export default SponsorMarquee;
