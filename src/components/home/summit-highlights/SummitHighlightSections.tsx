import { ChevronRight } from "lucide-react";
type Props = {
  highlightSection:
    | "general"
    | "awards"
    | "scholarship"
    | "panel"
    | "keynote"
    | "volunteer";
  title: string;
  url: string;
  subtitle?: string;
  images?: string[];
};

const SummitHighlightSections = ({
  highlightSection,
  title,
  url,
  subtitle = "",
  images = [],
}: Props) => {
  return (
    <>
      {highlightSection === "general" && (
        <>
          <div className="w-full flex flex-col lg:flex-row gap-4.25">
            <section className="lg:max-w-155.5 w-full flex flex-col gap-4.25">
              <figure className="w-full  overflow-hidden  h-201 rounded-[26.79px]">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-109.25 rounded-[26.79px]">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
            </section>
            {/* second section */}
            <section className="lg:max-w-147.75 w-full flex flex-col gap-4.25">
              <figure className="w-full overflow-hidden h-141.25 rounded-[26.79px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover "
                />
              </figure>
              <article className="w-full  h-auto flex-1 rounded-[26.79px] flex items-center justify-center">
                <div className="w-full mx-auto lg:max-w-[488.37px] py-10 lg:py-0">
                  <h3 className="font-extrabold text-black font-mulish text-[36px] sm:text-[48px] md:text-[56px] xl:text-[61px] text-center">
                    {title}
                  </h3>

                  <a
                    href={url}
                    className="flex mx-auto mt-1.5 max-w-58.75 items-center justify-center h-10 xl:h-13.75 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree text-sm xl:text-base"
                  >
                    Watch session recap <ChevronRight />
                  </a>
                </div>
              </article>
            </section>
          </div>

          <figure className="w-full h-98.75 overflow-hidden rounded-[26.79px]">
            <img
              src={images[3]}
              alt="Summit Pictures"
              className="w-full h-full object-cover"
            />
          </figure>
        </>
      )}

      {/* HIGHLIGHT CARD 2 */}

      {(highlightSection === "awards" ||
        highlightSection === "panel" ||
        highlightSection === "volunteer") && (
        <>
          <div className="w-full flex flex-col lg:flex-row gap-4.25">
            {/* second section */}
            <section className="lg:max-w-147.75 w-full flex flex-col gap-4.25">
              <figure className="w-full h-141.25 rounded-[26.79px] overflow-hidden">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover ${highlightSection === "panel" ? "rotate-y-180" : ""}`}
                />
              </figure>
              <article className="w-full h-auto flex-1 rounded-[26.79px] flex items-center justify-center">
                <div className="w-full lg:max-w-145 pr-6 py-10 lg:py-0">
                  <h3 className="font-extrabold text-black font-mulish text-[36px] sm:text-[48px]  md:text-[58px]">
                    {title}
                  </h3>

                  <p className="text-black mt-4.75 font-sans text-xl sm:text-2xl md:text-[31.03px] font-medium">
                    {subtitle}
                  </p>

                  <a
                    href={url}
                    className="flex mt-4.75 max-w-58.75 items-center justify-center rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree xl:h-13.75 h-10 text-sm xl:text-base"
                  >
                    Watch session recap <ChevronRight />
                  </a>
                </div>
              </article>
            </section>
            <section className="lg:max-w-155.5 w-full flex flex-col gap-4.25">
              <figure className="w-full  h-201 rounded-[26.79px] overflow-hidden">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover ${highlightSection === "awards" || highlightSection === "panel" ? "rotate-y-180" : ""}`}
                />
              </figure>
              <figure className="w-full  overflow-hidden h-109.25 rounded-[26.79px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover ${highlightSection === "awards" || highlightSection === "panel" ? "rotate-y-180" : ""}`}
                />
              </figure>
            </section>
          </div>

          <figure className="w-full h-98.75  overflow-hidden rounded-[26.79px]">
            <img
              src={images[3]}
              alt="Summit Pictures"
              className={`w-full h-full object-cover ${highlightSection === "awards" ? "rotate-y-180" : ""}`}
            />
          </figure>
        </>
      )}

      {(highlightSection === "scholarship" ||
        highlightSection === "keynote") && (
        <>
          {" "}
          <div className="w-full flex flex-col lg:flex-row gap-4.25">
            <section className="lg:max-w-[589.27px] w-full flex flex-col gap-4.25">
              <figure className="w-full  h-[540.58px] rounded-[26.79px] overflow-hidden">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  h-[540.58px] rounded-[26.79px] overflow-hidden">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  h-[540.58px] rounded-[26.79px] overflow-hidden">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover ${highlightSection === "keynote" ? "rotate-y-180" : ""}`}
                />
              </figure>
            </section>
            {/* second section */}
            <section className="lg:max-w-[589.27px] w-full flex flex-col gap-4.25">
              <figure className="w-full  h-[540.58px] rounded-[26.79px] overflow-hidden">
                <img
                  src={images[3]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <article className="w-full h-auto flex-1 rounded-[26.79px] flex items-center justify-center">
                <div className="w-full pl-6 py-10 lg:py-0">
                  <h3 className="font-extrabold text-black font-mulish text-[36px] sm:text-[48px]  md:text-[58px]">
                    {title}
                  </h3>

                  <p className="text-black mt-4.75 font-sans text-xl sm:text-2xl md:text-[28px] font-medium">
                    {subtitle}
                  </p>

                  <a
                    href={url}
                    className="flex mt-4.75 max-w-58.75 items-center justify-center rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree xl:h-13.75 h-10 text-sm xl:text-base"
                  >
                    Watch session recap <ChevronRight />
                  </a>
                </div>
              </article>
              <figure className="w-full h-[540.58px] rounded-[26.79px] overflow-hidden">
                <img
                  src={images[4]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default SummitHighlightSections;
