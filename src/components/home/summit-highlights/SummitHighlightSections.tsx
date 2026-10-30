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
          <div className="w-full space-y-2.5 ">
            <section className=" w-full flex flex-col lg:flex-row gap-[19.11px]">
              <figure className="w-full  overflow-hidden  h-[318.4px] rounded-[14.55px]">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-[318.4px] rounded-[14.55px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover "
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-[318.4px] rounded-[14.55px]">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
            </section>
            {/* second section */}
            <section className=" w-full flex flex-col lg:flex-row gap-[19.11px]">
              <figure className="w-full flex-1 h-[287.88px] overflow-hidden rounded-[15.49px]">
                <img
                  src={images[3]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              {/*  */}
              <article className="w-full  h-auto lg:max-w-86 rounded-[26.79px] flex items-center justify-center">
                <div className="w-full mx-auto lg:max-w-[488.37px] py-10 lg:py-0">
                  <h3 className="font-extrabold text-black font-mulish text-[36px] sm:leading-[41.88px] sm:text-[40px]  text-center">
                    {title}
                  </h3>

                  <a
                    href={url}
                    target="_blank"
                    className="flex mx-auto mt-2.5 max-w-45.75 items-center justify-center h-13.75 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree text-base"
                  >
                    Watch recap <ChevronRight size={19} />
                  </a>
                </div>
              </article>
            </section>
          </div>
        </>
      )}

      {/* HIGHLIGHT CARD 2 */}

      {(highlightSection === "awards" ||
        highlightSection === "panel" ||
        highlightSection === "keynote") && (
        <>
          <div className="w-full space-y-2.5">
            <section className="w-full flex flex-col lg:flex-row gap-[19.11px]">
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover `}
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover `}
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className={`${highlightSection === "awards" ? "rotate-y-180" : ""} w-full h-full object-cover `}
                />
              </figure>
            </section>
            {/* second section */}
            <section
              className={`w-full flex flex-col  gap-[27.5px] ${highlightSection === "keynote" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <article className="h-auto rounded-[26.79px] flex items-center ">
                <div className="w-full lg:max-w-85.5 py-10 lg:py-0">
                  <h3 className="font-bold text-black font-sans text-[34.2px]">
                    {title}
                  </h3>

                  <p className="text-black mt-2 font-sans text-base font-medium">
                    {subtitle}
                  </p>

                  <a
                    href={url}
                    target="_blank"
                    className="flex mt-2.5 max-w-45.75 items-center justify-center h-13.75 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree text-base"
                  >
                    Watch recap <ChevronRight size={19} />
                  </a>
                </div>
              </article>

              <figure className="w-full h-81.5 flex-1 overflow-hidden rounded-[26.79px]">
                <img
                  src={images[3]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover`}
                />
              </figure>
            </section>
          </div>
        </>
      )}

      {highlightSection === "volunteer" && (
        <>
          <div className="w-full space-y-2.5">
            <section className="w-full flex flex-col lg:flex-row gap-[19.11px]">
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70 rounded-[14.55px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover`}
                />
              </figure>
            </section>
            {/* second section */}
            <section className=" w-full flex flex-col lg:flex-row gap-[27.5px]">
              <article className="w-full  h-auto lg:max-w-86 rounded-[26.79px] flex items-center justify-center">
                <div className="w-full py-10 lg:py-0">
                  <h3 className="font-bold text-black font-sans text-[34.2px]">
                    {title}
                  </h3>

                  <p className="text-black mt-2 font-sans text-base font-medium">
                    {subtitle}
                  </p>

                  <a
                    href={url}
                    target="_blank"
                    className="flex mt-2.5 max-w-45.75 items-center justify-center h-13.75 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree text-base"
                  >
                    Watch recap <ChevronRight size={19} />
                  </a>
                </div>
              </article>

              <figure className="w-full flex-1 h-81.5 overflow-hidden rounded-[15.49px]">
                <img
                  src={images[3]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
            </section>
          </div>
        </>
      )}

      {highlightSection === "scholarship" && (
        <>
          <div className="w-full space-y-2.5">
            <section className="w-full flex flex-col lg:flex-row gap-[19.11px]">
              <figure className="w-full  overflow-hidden  h-70 rounded-[26.79px]">
                <img
                  src={images[0]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70  rounded-[26.79px]">
                <img
                  src={images[3]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="w-full  overflow-hidden  h-70  rounded-[26.79px]">
                <img
                  src={images[1]}
                  alt="Summit Pictures"
                  className={`w-full h-full object-cover `}
                />
              </figure>
            </section>
            {/* second section */}
            <section className=" w-full flex flex-col lg:flex-row gap-[27.5px]">
              <figure className="w-full h-81.5 overflow-hidden rounded-[26.79px]">
                <img
                  src={images[2]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>

              <figure className="w-full  h-81.5  overflow-hidden rounded-[26.79px]">
                <img
                  src={images[4]}
                  alt="Summit Pictures"
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* text */}
              <article className="w-full h-auto  rounded-[26.79px] flex items-center justify-center">
                <div className="w-full py-10 lg:py-0">
                  <h3 className="font-bold text-black font-sans text-[34.2px]">
                    {title}
                  </h3>

                  <p className="text-black mt-2 font-sans text-base font-medium">
                    {subtitle}
                  </p>

                  <a
                    href={url}
                    target="_blank"
                    className="flex mt-2.5 max-w-45.75 items-center justify-center h-13.75 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink duration-300 transition-colors gap-1 text-white font-figtree text-base"
                  >
                    Watch recap <ChevronRight size={19} />
                  </a>
                </div>
              </article>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default SummitHighlightSections;
