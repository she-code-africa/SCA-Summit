import MapPin from "../../icons/MapPin";

const EventVenue = () => {
  return (
    <section className="bg-pastel-pink py-17.5">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-191 mx-auto">
          <span className="flex items-center justify-center">
            <MapPin className="text-primary-magenta size-24" />
          </span>

          <h3 className="font-display text-primary-magenta text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
            Event Venue
          </h3>

          <p className="font-sans text-black text-xl sm:text-2xl lg:text-[48px] text-center">
            Celebr8 Centre HQ, Vori Close, Ikeja, Lagos, Nigeria
          </p>

          <div className="flex justify-center items-center w-full mt-5">
            <a
              href="#tickets"
              className="px-8 py-4.5 w-full max-w-42.75 flex items-center justify-center rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-semibold text-sm transition shadow-sm hover:shadow"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventVenue;
