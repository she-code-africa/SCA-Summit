import SecondaryPattern2 from "../../icons/SecondaryPattern2";
import whyAttendImg1 from "../../assets/home/whyAttendImg1.png";
import whyAttendImg2 from "../../assets/home/whyAttendImg2.png";

type Props = { tab: string };

const WhyAttendTabContent = ({ tab }: Props) => {
  return (
    <section className="w-full space-y-10">
      {/* 1st */}
      <div className="w-full flex bg-sca-blush">
        <article className="w-full py-10 px-6 flex gap-5 items-start">
          <span className="w-fit inline-block mt-4">
            <SecondaryPattern2 />
          </span>
          <div className="w-full md:max-w-90.25">
            <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
              Keynotes
            </h3>

            <p className="mt-4 w-full text-lg font-sans">
              Hear directly from globally recognised founders, executives,
              innovators and thought leaders as they share insights on
              leadership, innovation, and their experiences shaping the future
              od African technology.
            </p>
          </div>
        </article>
        <div className="w-full md:block hidden">
          <figure className="w-full max-w-127 h-91 ">
            <img
              src={whyAttendImg1}
              alt="why attend"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>
      </div>

      {/* 2nd */}
      <div className="w-full flex bg-sca-citrine">
        <div className="w-full md:block hidden">
          <figure className="w-full max-w-127 h-91 ">
            <img
              src={whyAttendImg2}
              alt="why attend"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>
        <article className="w-full py-10 px-6 flex gap-5 items-start">
          <span className="w-fit inline-block mt-4">
            <SecondaryPattern2 />
          </span>
          <div className="w-full md:max-w-90.25">
            <h3 className="text-primary-magenta flex items-center font-display font-semibold text-[40px]">
              Workshops
            </h3>

            <p className="mt-4 w-full text-lg font-sans">
              Move beyond inspiration with expert-led workshops that turn your
              ideas into action. Build practical, in-demand skills, and gain the
              tools needed to grow your career
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyAttendTabContent;
