import RMarquee from "react-fast-marquee";

export const Marquee = () => {
  const Msg = () => {
    return <p>#SCASUMMIT'23</p>;
  };
  return (
    <RMarquee gradient={false} speed={31}>
      <div className="flex gap-2 border-2 border-black border-x-0 py-2">
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
      </div>
    </RMarquee>
  );
};
