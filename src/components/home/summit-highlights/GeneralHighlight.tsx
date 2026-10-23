import SummitHighlightSections from "./SummitHighlightSections";
import generalImg1 from "../../../assets/home/summit-highlight/general-highlight.jpg";
import gimg2 from "../../../assets/home/summit-highlight/general2.jpg";
import gimg3 from "../../../assets/home/summit-highlight/gimg3.jpg";
import gImg4 from "../../../assets/home/summit-highlight/g1mg4.jpg";

const GeneralHighlight = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="general"
        title="10 years Anniversary Celebration"
        url="#"
        images={[generalImg1, gimg2, gimg3, gImg4]}
      />
    </div>
  );
};

export default GeneralHighlight;
