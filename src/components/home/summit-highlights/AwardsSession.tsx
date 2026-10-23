import SummitHighlightSections from "./SummitHighlightSections";
import awards1 from "../../../assets/home/summit-highlight/awards1.jpg";
import awards2 from "../../../assets/home/summit-highlight/awards2.jpg";
import awards3 from "../../../assets/home/summit-highlight/awards3.jpg";
import awards4 from "../../../assets/home/summit-highlight/awards4.jpg";

const AwardsSession = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="awards"
        url="#"
        title="Award Session"
        images={[awards1, awards2, awards3, awards4]}
        subtitle="The Award Session recognised individuals whose work and
                contributions are making a difference across the tech ecosystem.
                As She Code Africa marked ten years of impact, the moment
                celebrated the people helping move the community forward."
      />
    </div>
  );
};

export default AwardsSession;
