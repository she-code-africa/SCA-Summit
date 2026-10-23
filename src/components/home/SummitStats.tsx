const SummitStats = () => {
  const statsData = [
    {
      title: "Attendees",
      value: "500+",
    },
    {
      title: "Sponsors and partners",
      value: "25",
    },
    {
      title: "Speakers",
      value: "19",
    },
    {
      title: "Sessions",
      value: "6",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-2 sm:flex">
        {statsData.map(({ title, value }, idx) => (
          <article
            className={`text-sca-white text-center border-r border-r-white border-b-white max-sm:even:border-r-0 sm:last:border-r-0 sm:border-b-0 py-10 sm:py-12.5 px-6 lg:px-10 xl:px-14 ${
              idx < 2 ? "border-b" : ""
            } ${idx === 1 ? "sm:flex-2" : "sm:flex-1"}`}
            key={idx}
          >
            <h4 className="font-display font-semibold leading-none text-[60px]">
              {value}
            </h4>

            <p className="font-sans text-base lg:text-xl xl:text-[29.74px] sm:whitespace-nowrap">
              {title}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SummitStats;
