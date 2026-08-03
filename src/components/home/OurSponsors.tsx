import googleImg from "../../assets/home/dawfd.png";
import techCabal from "../../assets/home/techCabal.png";
import propel from "../../assets/home/propel.png";
import osca from "../../assets/home/osca.png";
import zaycodes from "../../assets/home/zaycodes.png";
import chaoss from "../../assets/home/chaoss.png";
import myCover from "../../assets/home/myCover.png";
import weTech from "../../assets/home/weTech.png";

const OurSponsors = () => {
  const partners = [
    googleImg,
    techCabal,
    propel,
    osca,
    zaycodes,
    chaoss,
    myCover,
    weTech,
  ];
  return (
    <section className="w-full bg-sca-white">
      <div className="w-full py-25 max-w-307 mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-display text-primary-magenta text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
          Our Past Sponsors
        </h3>

        <section className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-4">
          {partners.map((img, i) => (
            <div
              className="rounded-lg flex items-center justify-center bg-sca-white border border-[#E9E1E6] h-[99.29px] w-full "
              key={i}
            >
              <img
                src={img}
                alt="Partner"
                className="object-contain w-38.75 h-10"
              />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default OurSponsors;
