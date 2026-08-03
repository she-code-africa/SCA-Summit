// import SecondaryPattern2 from "../../icons/SecondaryPattern2";
// import whyAttendImg1 from "../../assets/home/whyAttendImg1.png";
// import whyAttendImg2 from "../../assets/home/whyAttendImg2.png";

// type Props = { tab: string };

// const WhyAttendTabContent = ({ tab }: Props) => {
//   return (
//     <section className="w-full space-y-10">
//       {/* 1st */}
//       <div className="w-full flex bg-sca-blush">
//         <article className="w-full py-10 px-6 flex gap-5 items-start">
//           <span className="w-fit inline-block mt-4">
//             <SecondaryPattern2 />
//           </span>
//           <div className="w-full md:max-w-90.25">
//             <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
//               Keynotes
//             </h3>

//             <p className="mt-4 w-full text-lg font-sans">
//               Hear directly from globally recognised founders, executives,
//               innovators and thought leaders as they share insights on
//               leadership, innovation, and their experiences shaping the future
//               od African technology.
//             </p>
//           </div>
//         </article>
//         <div className="w-full md:block hidden">
//           <figure className="w-full max-w-127 h-91 ">
//             <img
//               src={whyAttendImg1}
//               alt="why attend"
//               className="object-cover w-full h-full"
//             />
//           </figure>
//         </div>
//       </div>

//       {/* 2nd */}
//       <div className="w-full flex bg-sca-citrine">
//         <div className="w-full md:block hidden">
//           <figure className="w-full max-w-127 h-91 ">
//             <img
//               src={whyAttendImg2}
//               alt="why attend"
//               className="object-cover w-full h-full"
//             />
//           </figure>
//         </div>
//         <article className="w-full py-10 px-6 flex gap-5 items-start">
//           <span className="w-fit inline-block mt-4">
//             <SecondaryPattern2 />
//           </span>
//           <div className="w-full md:max-w-90.25">
//             <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
//               Workshops
//             </h3>

//             <p className="mt-4 w-full text-lg font-sans">
//               Move beyond inspiration with expert-led workshops that turn your
//               ideas into action. Build practical, in-demand skills, and gain the
//               tools needed to grow your career
//             </p>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default WhyAttendTabContent;

import { useState, type ReactNode } from "react";
import SecondaryPattern2 from "../../icons/SecondaryPattern2";
import whyAttendImg1 from "../../assets/home/whyAttendImg1.png";
import whyAttendImg2 from "../../assets/home/whyAttendImg2.png";
import { whyAttendMediaContent } from "../../utils/whyAttend";

type Props = { tab: string };

const images = {
  img1: whyAttendImg1,
  img2: whyAttendImg2,
};

const ImageFigure = ({ src }: { src: string }) => (
  <div className="w-full md:block hidden">
    <figure className="w-full max-w-127 h-91">
      <img src={src} alt="why attend" className="object-cover w-full h-full" />
    </figure>
  </div>
);

const MediaBlock = ({ tab }: { tab: string }) => {
  const [expanded, setExpanded] = useState(false);
  const entry = whyAttendMediaContent[tab];

  if (!entry) return null;

  const { title, description, bg, image, imageSide, readMore } = entry;

  return (
    <div className={`w-full flex ${bg}`}>
      {imageSide === "left" && <ImageFigure src={images[image]} />}

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

      {imageSide === "right" && <ImageFigure src={images[image]} />}
    </div>
  );
};

const tracks = [
  {
    title: "1. Scale Track",
    description: "Conversations on leadership, visibility, and growth.",
  },
  {
    title: "2. Capital Track",
    description:
      "Discussions on fundraising, investment, and access to capital.",
  },
  {
    title: "3. Future Track",
    description:
      "Conversations on AI, digital infrastructure, and Africa's digital future.",
  },
  {
    title: "4. Impact Track",
    description:
      "Stories from alumni, scholarship recipients, community members, and beneficiaries highlighting the impact of She Code Africa's programs.",
  },
];

const TrackSessionsBlock = () => (
  <div className="w-full flex bg-sca-lilac">
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
          <h4 className="font-display font-semibold text-xl">{title}</h4>
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
  <div className="w-full flex bg-sca-citrine">
    <div className="w-full bg-black text-white py-10 px-6 flex flex-col items-start gap-6">
      {/* Swap for the actual trophy illustration asset */}
      <span className="text-5xl" aria-hidden>
        🏆
      </span>
      <ul className="space-y-3">
        {awards.map((award) => (
          <li key={award} className="font-display font-semibold text-xl">
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
  "Laptops giveaway",
  "Scholarships",
  "Partner-sponsored giveaways",
  "Updates on the She Code Africa Access Fund and other initiatives",
  "Branded souvenir giveaways",
];

const AccessFundBlock = () => (
  <div className="w-full flex bg-sca-lilac">
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

    <div className="w-full bg-black text-white py-10 px-6">
      <ul className="space-y-4">
        {giveaways.map((item) => (
          <li key={item} className="font-sans text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Tabs with a bespoke layout that doesn't fit the generic MediaBlock.
const customBlocks: Record<string, () => ReactNode> = {
  "track-sessions": TrackSessionsBlock,
  awards: AwardsBlock,
  "access-fund-scholarships-giveaways": AccessFundBlock,
};

const WhyAttendTabContent = ({ tab }: Props) => {
  const CustomBlock = customBlocks[tab];

  return (
    <section className="w-full">
      {CustomBlock ? <CustomBlock /> : <MediaBlock tab={tab} />}
    </section>
  );
};

export default WhyAttendTabContent;
