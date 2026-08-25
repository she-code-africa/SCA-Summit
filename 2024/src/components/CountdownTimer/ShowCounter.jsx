const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl md:text-4xl lg:text-8xl">{value}</p>
        <span className="text-primary-pink font-semibold mt-2">{type}</span>
      </div>
    );
  };
  return (
    <div className="container mx-auto px-4 flex justify-center mt-4 md:mt-8">
      <div className="flex counter-container gap-2 md:gap-5 lg:gap-8">
        <DateTimeDisplay value={days} type={"Days"} />
        <p className="text-3xl md:text-4xl lg:text-8xl text-primary-pink">:</p>
        <DateTimeDisplay value={hours} type={"Hours"} />
        <p className="text-3xl md:text-4xl lg:text-8xl text-primary-pink">:</p>
        <DateTimeDisplay value={minutes} type={"Minutes"} />
        <p className="text-3xl md:text-4xl lg:text-8xl text-primary-pink">:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};

export default ShowCounter;
