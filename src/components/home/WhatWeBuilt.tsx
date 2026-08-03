import whatWeBuilt from "../../assets/home/youtubePoster.jpg";
import PlayButton from "../../icons/PlayButton";

const WhatWeBuilt = () => {
  return (
    <section className="w-full bg-pastel-pink py-25">
      <div className="w-full mx-auto max-w-314.5">
        <h3 className="font-display text-black text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
          See What We Built Last Summit
        </h3>

        <div className="mt-10 w-full">
          <section className="px-6 py-6 md:px-12.5 bg-sca-white md:py-12.5 rounded-[30px]">
            <div className="w-full h-85.5 relative overflow-hidden rounded-[20px]">
              <figure className="w-full h-full">
                <img
                  src={whatWeBuilt}
                  alt="Youtube Poster"
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="absolute inset-0 bg-[#b00c68]/52 flex items-center justify-center">
                <button className="w-20.5 h-20.5 cursor-pointer" title="Play">
                  <PlayButton />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuilt;
