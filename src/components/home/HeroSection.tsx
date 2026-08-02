import heroImage from "../../assets/home/homeHeroBg.jpg";
import FlowerVector from "../../icons/FlowerVector";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full  bg-cover bg-no-repeat">
        <div className="relative min-h-screen bg-[#B70569]">
          {/* ABSOLUTE POSITIONED IMAGE */}
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={heroImage}
              rel="preload"
              alt="Who We Are"
              className="object-cover w-full h-full"
              fetchPriority="high"
            />
          </figure>

          <div className="w-full bg-black/35 min-h-screen flex items-center justify-center relative">
            <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* badge */}
              <div className="max-w-fit mx-auto bg-primary-magenta/20 text-sca-white sca-badges overflow-hidden">
                <span className="flex py-2 px-2.5 xl:py-4 xl:px-5 gap-2 items-center justify-center">
                  <FlowerVector className="text-sca-white size-3 sm:size-5.25" />
                  <span className="font-sans text-sm sm:text-base xl:text-[23px] inline-block font-semibold">
                    SHE CODE AFRICA SUMMIT 2026
                  </span>
                  <FlowerVector className="text-sca-white size-3 sm:size-5.25" />
                </span>
              </div>

              <h1 className=""></h1>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
