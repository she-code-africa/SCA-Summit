import { useEffect } from "react";
import CloseIcon from "../../../icons/CloseIcon";
import gallery1 from "../../../assets/home/gallery/galleryImg1.jpg";
import gallery2 from "../../../assets/home/gallery/gallery-1.jpg";
import gallery3 from "../../../assets/home/gallery/galleryImg3.jpg";
import gallery4 from "../../../assets/home/gallery/galleryImg4.jpg";
import gallery5 from "../../../assets/home/gallery/gallery-4.jpg";
import gallery6 from "../../../assets/home/gallery/galleryImg5.jpg";
import gallery7 from "../../../assets/home/gallery/galleryImg6.jpg";
// second row images
import gallery21 from "../../../assets/home/gallery/galleryImg21.jpg";
import gallery22 from "../../../assets/home/gallery/galleryImg22.jpg";
import gallery24 from "../../../assets/home/gallery/galleryImg24.jpg";
import gallery25 from "../../../assets/home/gallery/galleryImg25.jpg";
import gallery26 from "../../../assets/home/gallery/galleryImg26.jpg";
import gallery27 from "../../../assets/home/gallery/galleryImg27.jpg";
import gallery23 from "../../../assets/home/gallery/galleryImg23.jpg";
// third row
import gallery31 from "../../../assets/home/gallery/galleryImg31.jpg";
import gallery32 from "../../../assets/home/gallery/galleryImg32.jpg";
import gallery34 from "../../../assets/home/gallery/galleryImg34.jpg";
import gallery35 from "../../../assets/home/gallery/galleryImg35.jpg";
import gallery36 from "../../../assets/home/gallery/galleryImg36.jpg";
import gallery37 from "../../../assets/home/gallery/gallerImg37.jpg";
import gallery33 from "../../../assets/home/gallery/galleryImg33.jpg";

type Props = {
  closeModal: () => void;
};

const GalleryImage = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => (
  <figure
    className={` rounded-[26.79px] border-2 border-primary-magenta overflow-hidden ${className}`}
  >
    <img src={src} alt="Gallery Pics" className="w-full h-full object-cover" />
  </figure>
);

const GalleryImageComponent = ({ images }: { images: string[] }) => {
  return (
    <div className="w-full space-y-[17.56px]">
      <section className="w-full flex flex-col lg:flex-row gap-[17.55px]">
        <GalleryImage
          src={images[0]}
          className="h-[365.97px] lg:max-w-[312.62px] w-full"
        />

        <section className="flex-1 w-full space-y-[16.21px]">
          <div className="flex flex-col gap-[18.23px] md:flex-row">
            <GalleryImage src={images[2]} className="h-[180.96px] w-full" />
            <GalleryImage src={images[3]} className="h-[180.96px]  w-full" />
          </div>

          <GalleryImage src={images[1]} className="h-[164.08px] w-full" />
        </section>
      </section>

      <section className="w-full flex flex-col lg:flex-row gap-[17.55px]">
        <GalleryImage src={images[4]} className="h-[180.96px] w-full" />
        <GalleryImage src={images[5]} className="h-[180.96px] w-full" />
        <GalleryImage src={images[6]} className="h-[180.96px] w-full" />
      </section>
    </div>
  );
};

const GalleryModal = ({ closeModal }: Props) => {
  // Stop the page behind the modal from scrolling, and let Escape close it
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    // Overlay: clicking it closes the modal
    <div
      onClick={closeModal}
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50 p-4"
    >
      {/* Modal box: clicking inside it should NOT close the modal */}
      <section
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="
          max-h-[90vh] w-full max-w-225 overflow-y-auto rounded-xl bg-white p-6 xl:p-10
          scrollbar-thin [scrollbar-color:#b70569_transparent]
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-[#b70569]
        "
      >
        <>
          <article className="w-full flex gap-6 items-start sm:items-center justify-between">
            <h3 className="font-display text-primary-magenta text-2xl sm:text-[36px] xl:text-[43.21px] w-full ">
              She Code Africa Summit 2026 Edition
            </h3>

            <button className="cursor-pointer" onClick={closeModal}>
              <CloseIcon />
            </button>
          </article>

          <section className="w-full mt-10 space-y-[16.2px]">
            <GalleryImageComponent
              images={[
                gallery1,
                gallery2,
                gallery3,
                gallery4,
                gallery5,
                gallery6,
                gallery7,
              ]}
            />

            <GalleryImageComponent
              images={[
                gallery21,
                gallery24,
                gallery22,
                gallery23,
                gallery25,
                gallery26,
                gallery27,
              ]}
            />

            <GalleryImageComponent
              images={[
                gallery31,
                gallery34,
                gallery32,
                gallery33,
                gallery35,
                gallery36,
                gallery37,
              ]}
            />
          </section>
        </>
      </section>
    </div>
  );
};

export default GalleryModal;
