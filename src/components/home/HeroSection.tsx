import heroImage from "../../assets/home/homeHeroBg.jpg";
import FlowerVector from "../../icons/FlowerVector";
import CalendarIcon from "../../icons/CalendarIcon";
import MapPin from "../../icons/MapPin";
import Globe from "../../icons/Globe";

const HeroSection = () => {
  const venueInfo = [
    {
      icon: <CalendarIcon className="text-primary-magenta" />,
      label: "19th September 2026",
    },
    {
      icon: <MapPin className="text-primary-magenta" />,
      label: "Lagos, Nigeria",
    },
    {
      icon: <Globe className="text-primary-magenta" />,
      label: "In-Person + Virtual",
    },
  ];
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

          <div className="w-full bg-black/40 min-h-200 flex items-center justify-center relative">
            <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* badge */}
              <div className="max-w-fit mx-auto bg-primary-magenta/10 text-sca-white sca-badges overflow-hidden">
                <span className="flex py-2 px-2.5 xl:py-4 xl:px-5 gap-2 items-center justify-center">
                  <FlowerVector className="text-sca-white size-3 sm:size-5.25" />
                  <span className="font-sans text-sm sm:text-base xl:text-[23px] inline-block font-semibold">
                    SHE CODE AFRICA SUMMIT 2026
                  </span>
                  <FlowerVector className="text-sca-white size-3 sm:size-5.25" />
                </span>
              </div>

              <h1 className="mt-3.5 xl:mt-7.5 text-center w-full max-w-280.5 mx-auto text-sca-white font-display font-semibold text-[56px] sm:text-[64px] lg:text-[96px] xl:text-9xl">
                A Decade of Impact: <br />
                African Women Architecting the Digital Future
              </h1>

              <p className="font-sans mt-7.5 text-2xl font-medium max-w-220.5 text-center text-sca-white mx-auto w-full">
                The flagship summit of African women in tech; talent, builders,
                leaders, and funders shaping the ecosystem.
              </p>

              <div className="w-full max-w-280.5 mx-auto mt-4 xl:mt-8 flex justify-center flex-wrap gap-5">
                {venueInfo.map(({ icon, label }, idx) => (
                  <span
                    className="flex py-2.5 px-6 gap-2.5 items-center justify-center bg-pastel-pink rounded-[20px]"
                    key={idx}
                  >
                    {icon}

                    <span className="whitespace-nowrap text-primary-magenta font-medium text-base font-sans">
                      {label}
                    </span>
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
