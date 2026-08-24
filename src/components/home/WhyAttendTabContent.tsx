import { useEffect, useRef, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import SecondaryPattern2 from "../../icons/SecondaryPattern2";
import keynoteImg from "../../assets/home/keynoteImg.jpg";
import workshops from "../../assets/home/workshops.jpg";
import learning from "../../assets/home/learning.jpg";
import panelSessions from "../../assets/home/panelSession.jpg";
import networking from "../../assets/home/networking.jpg";
import { whyAttendTab } from "../../utils/appData";
import { tracks, whyAttendMediaContent } from "../../utils/whyAttend";
import starTrophy from "../../assets/home/StarTrophy.png";
import laptop from "../../assets/home/laptop.png";
import bottle from "../../assets/home/bottle.png";
import community from "../../assets/home/community.jpg";
import partner from "../../assets/home/partner.jpg";

type Props = {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

const images = {
  img1: keynoteImg,
  img2: workshops,
  img3: panelSessions,
  img4: learning,
  img5: community,
  img6: partner,
};

const ImageFigure = ({ src, value = "" }: { src: string; value?: string }) => (
  <div className="w-full block ">
    <figure
      className={`w-full xl:max-w-127  ${value === "panel-sessions" || value === "community-experience" ? "h-full" : "h-91"}`}
    >
      <img src={src} alt="why attend" className="object-cover w-full h-full" />
    </figure>
  </div>
);

const MediaBlock = ({ value }: { value: string }) => {
  const [expanded, setExpanded] = useState(false);
  const entry = whyAttendMediaContent[value];

  if (!entry) return null;

  const { title, description, bg, image, imageSide, readMore } = entry;

  return (
    <div
      className={`w-full flex ${imageSide === "left" ? "flex-col-reverse" : "flex-col"} md:flex-row ${bg}`}
    >
      {imageSide === "left" && (
        <ImageFigure src={images[image]} value={value} />
      )}

      <article className="w-full py-10 px-6 flex gap-5 items-start">
        <span className="w-fit inline-block mt-4">
          <SecondaryPattern2 />
        </span>
        <div className="w-full md:max-w-90.25">
          <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
            {title}
          </h3>

          <p className="mt-4 w-full text-lg font-sans">
            {description}
            {readMore && expanded && (
              <span className="block mt-4">{readMore}</span>
            )}
            {readMore && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="ml-2 text-primary-magenta font-semibold cursor-pointer"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </article>

      {imageSide === "right" && (
        <ImageFigure src={images[image]} value={value} />
      )}
    </div>
  );
};

const NetworkingBlock = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row bg-sca-citrine">
      <article className="w-full py-10 px-6 flex gap-5 items-start">
        <span className="w-fit inline-block mt-4">
          <SecondaryPattern2 />
        </span>
        <div className="w-full md:max-w-90.25 space-y-6">
          <div>
            <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
              Networking
            </h3>
            <p className="mt-4 w-full text-lg font-sans">
              Meet and connect with the people behind Africa's most exciting
              ideas, companies, and communities. Build meaningful relationships
              with your fellow professionals from across the continent. The
              summit provides opportunities for attendees to connect with
              students, professionals, founders, partners, community members,
              and other participants through networking sessions scheduled
              throughout the day.
              {!expanded && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="ml-2 text-primary-magenta font-semibold cursor-pointer"
                >
                  Read more
                </button>
              )}
            </p>
          </div>

          {expanded && (
            <>
              <p className="w-full text-lg font-sans">
                Networking experiences will include networking tables, sponsor
                engagement, alumni interactions, and dedicated networking
                breaks.
              </p>

              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="text-primary-magenta font-semibold cursor-pointer"
              >
                Read less
              </button>
            </>
          )}
        </div>
      </article>

      <div className="w-full flex flex-col">
        <figure className="w-full h-91 md:h-auto md:flex-1">
          <img
            src={networking}
            alt="Networking"
            className="object-cover w-full h-full"
          />
        </figure>

        {expanded && (
          <div className="w-full bg-[#FFFDE0] py-10 px-6 space-y-4">
            <p className="text-lg font-sans">
              Eligible ticket holders will have access to the Hiring Room, where
              participating organizations may conduct interviews, receive CV
              submissions, and engage with prospective candidates.
            </p>
            <p className="text-lg font-sans">
              Attendees will also be able to visit sponsor and partner booths to
              learn more about organizations, products, services, and available
              opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TrackSessionsBlock = () => (
  <div className="w-full flex md:flex-row flex-col bg-[#E7B8FF]">
    <article className="w-full py-10 px-6 flex gap-5 items-start">
      <span className="w-fit inline-block mt-4">
        <SecondaryPattern2 />
      </span>
      <div className="w-full md:max-w-90.25">
        <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
          Track Sessions
        </h3>
        <p className="mt-4 w-full text-lg font-sans">
          The summit will feature four thematic tracks designed to explore
          different aspects of technology, leadership, and innovation:
        </p>
      </div>
    </article>

    <div className="w-full bg-black text-white py-10 px-6 space-y-6">
      {tracks.map(({ title, description }) => (
        <div key={title}>
          <h4 className="font-sans font-semibold text-xl">{title}</h4>
          <p className="mt-1 text-base font-sans text-white/80">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const awards = [
  "Builder of the Decade",
  "Community Leader of the Decade",
  "Rising Star Award",
  "Ecosystem Champion Award",
];

const AwardsBlock = () => (
  <div className="w-full flex flex-col-reverse md:flex-row bg-sca-citrine">
    <div className="w-full bg-black text-white py-10 px-6 flex items-center gap-6">
      <figure className="w-41 h-54.25 hidden md:block">
        <img src={starTrophy} alt="Star Trophy" className="object-contain" />
      </figure>
      <ul className="space-y-6">
        {awards.map((award) => (
          <li key={award} className="font-sans font-medium text-xl">
            {award}
          </li>
        ))}
      </ul>
    </div>

    <article className="w-full py-10 px-6 flex gap-5 items-start">
      <span className="w-fit inline-block mt-4">
        <SecondaryPattern2 />
      </span>
      <div className="w-full md:max-w-90.25">
        <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
          Awards
        </h3>
        <p className="mt-4 w-full text-lg font-sans">
          The Decade Awards will recognize individuals and organizations for
          their contributions to the She Code Africa community and the
          technology ecosystem.
        </p>
      </div>
    </article>
  </div>
);

const giveaways = [
  "Scholarships such as Professional courses, Brand new Laptops",
  "Partner-sponsored offerings",
  "She Code Africa Access Fund Launch and other initiatives",
  "Branded souvenir giveaways",
];

const AccessFundBlock = () => (
  <div className="w-full flex flex-col md:flex-row bg-[#E7B8FF]">
    <article className="w-full py-10 px-6 flex gap-5 items-start">
      <span className="w-fit inline-block mt-4">
        <SecondaryPattern2 />
      </span>
      <div className="w-full md:max-w-90.25">
        <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
          Access Fund, Scholarships & Giveaways
        </h3>
        <p className="mt-4 w-full text-lg font-sans">
          During the summit, attendees will have the opportunity to participate
          in prize draws and announcements, including:
        </p>
      </div>
    </article>

    <div className="w-full bg-black flex gap-8.5 text-white py-10 px-6">
      {/*  */}
      <div className="md:flex flex-col justify-between gap-10 xl:gap-20 hidden">
        <figure className="w-[114.5px] h-[90.35px]">
          <img src={laptop} alt="Laptop" className="object-contain" />
        </figure>

        <figure className="w-[52.53px] h-[124.5px] mx-auto ">
          <img src={bottle} alt="Bottle" className="object-contain" />
        </figure>
      </div>
      <ul className="space-y-6">
        {giveaways.map((item) => (
          <li key={item} className="font-sans text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const customBlocks: Record<string, () => ReactNode> = {
  networking: NetworkingBlock,
  "track-sessions": TrackSessionsBlock,
  awards: AwardsBlock,
  "access-fund-scholarships-giveaways": AccessFundBlock,
};

const WhyAttendTabContent = ({ setTab }: Props) => {
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
    <section className="w-full space-y-10">
      {whyAttendTab.map(({ value }) => {
        const CustomBlock = customBlocks[value];

        return (
          <div
            key={value}
            id={`tab-${value}`}
            data-tab-value={value}
            ref={(el) => {
              sectionRefs.current[value] = el;
            }}
          >
            {CustomBlock ? <CustomBlock /> : <MediaBlock value={value} />}
          </div>
        );
      })}
    </section>
  );
};

export default WhyAttendTabContent;
