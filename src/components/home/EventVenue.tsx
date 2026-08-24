import MapPin from "../../icons/MapPin";

const EventVenue = () => {
  return (
    <section className="bg-pastel-pink py-17.5">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-191 mx-auto">
          <span className="flex items-center justify-center">
            <MapPin className="text-primary-magenta size-24" />
          </span>

          <h3 className="font-display text-primary-magenta text-[36px] sm:text-[48px] md:text-[50px]  w-full text-center">
            Event Venue
          </h3>

          <p className="font-sans text-black text-2xl sm:text-[50px] text-center">
            Celebr8 Centre HQ, Vori Close, Ikeja, Lagos, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventVenue;
