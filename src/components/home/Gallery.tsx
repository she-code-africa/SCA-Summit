import gallery1 from "../../assets/home/gallery/gallery-1.jpg";
import gallery2 from "../../assets/home/gallery/gallery-2.jpg";
import gallery3 from "../../assets/home/gallery/gallery-3.jpg";
import gallery4 from "../../assets/home/gallery/gallery-4.jpg";
import gallery5 from "../../assets/home/gallery/gallery-5.jpg";
import gallery6 from "../../assets/home/gallery/gallery-6.jpg";
import gallery7 from "../../assets/home/gallery/gallery-7.jpg";

const Gallery = () => {
  return (
    <section className="w-full py-25 bg-[#F5FFDE]">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <h3 className="font-display text-primary-magenta mt-5 text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
          Gallery
        </h3>
        <div className="w-full mx-auto max-w-316.75 mt-12 space-y-5">
          <section className="flex flex-col lg:flex-row gap-5 lg:justify-between">
            <figure className="flex-1 w-full h-117 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery1}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="flex-1 h-117 w-full lg:max-w-102.25 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery2}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
          </section>
          <section className="flex flex-col lg:flex-row gap-5 lg:justify-between">
            <figure className="flex-1 h-117 w-full lg:max-w-102.25 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery3}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="flex-1 h-117 w-full lg:max-w-102.25 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery4}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="flex-1 h-117 w-full lg:max-w-102.25 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery5}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
          </section>
          <section className="flex flex-col lg:flex-row gap-5 lg:justify-between">
            <figure className="flex-1 h-117 w-full lg:max-w-102.25 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery6}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="flex-1 w-full h-117 rounded-[26.79px] overflow-hidden">
              <img
                src={gallery7}
                alt="Gallery Pics"
                className="w-full h-full object-cover"
              />
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
