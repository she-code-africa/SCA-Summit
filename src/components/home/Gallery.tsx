import { motion } from "framer-motion";
import gallery1 from "../../assets/home/gallery/gallery-1.jpg";
import gallery2 from "../../assets/home/gallery/gallery-2.jpg";
import gallery3 from "../../assets/home/gallery/gallery-3.jpg";
import gallery4 from "../../assets/home/gallery/gallery-4.jpg";
import gallery5 from "../../assets/home/gallery/gallery-5.jpg";
import gallery6 from "../../assets/home/gallery/gallery-6.jpg";
import gallery7 from "../../assets/home/gallery/gallery-7.jpg";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../../utils/motion";
import { ChevronRight } from "lucide-react";

const GalleryImage = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => (
  <motion.figure
    variants={scaleIn}
    className={`h-117 rounded-[26.79px] overflow-hidden ${className}`}
  >
    <img src={src} alt="Gallery Pics" className="w-full h-full object-cover" />
  </motion.figure>
);

// Each row is its own group, so its photos animate when that row is on screen
const Row = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={stagger(0.12)}
    className="flex flex-col lg:flex-row gap-5 lg:justify-between"
  >
    {children}
  </motion.section>
);

const Gallery = () => {
  return (
    <section className="w-full py-25 bg-[#F5FFDE]">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="font-display text-primary-magenta mt-5 text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center"
        >
          Gallery
        </motion.h3>

        <div className="w-full mx-auto max-w-316.75 mt-12 space-y-5">
          <Row>
            <GalleryImage src={gallery1} className="flex-1 w-full" />
            <GalleryImage
              src={gallery2}
              className="flex-1 w-full lg:max-w-102.25"
            />
          </Row>

          <Row>
            <GalleryImage
              src={gallery3}
              className="flex-1 w-full lg:max-w-102.25"
            />
            <GalleryImage
              src={gallery4}
              className="flex-1 w-full lg:max-w-102.25"
            />
            <GalleryImage
              src={gallery5}
              className="flex-1 w-full lg:max-w-102.25"
            />
          </Row>

          <Row>
            <GalleryImage
              src={gallery6}
              className="flex-1 w-full lg:max-w-102.25"
            />
            <GalleryImage src={gallery7} className="flex-1 w-full" />
          </Row>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-6 lg:mt-8 xl:mt-12.75 w-full flex  items-center justify-center"
        >
          <a
            href="#"
            target="_blank"
            className="mx-auto flex items-center justify-center gap-1 w-full sm:w-44 lg:w-56.75 bg-primary-magenta hover:bg-primary-dark-pink transition-colors duration-300 text-white font-sans font-medium text-base rounded-[30px] cursor-pointer h-13.75"
          >
            View more pictures <ChevronRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
