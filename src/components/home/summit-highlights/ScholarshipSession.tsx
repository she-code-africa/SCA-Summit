import SummitHighlightSections from "./SummitHighlightSections";
import scholarshipImg1 from "../../../assets/home/summit-highlight/scholarshipImg.jpg";
import scholarshipImg2 from "../../../assets/home/summit-highlight/scholarshipImg2.jpg";
import scholarshipImg3 from "../../../assets/home/summit-highlight/scholarshipImg3.jpg";
import scholarshipImg4 from "../../../assets/home/summit-highlight/scholarshipImg4.jpg";
import scholarshipImg5 from "../../../assets/home/summit-highlight/scholarshipImg5.jpg";

const ScholarshipSession = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="scholarship"
        url="https://youtu.be/N15y4qDG5Gk?si=ijo0As5deT572QX3"
        title="Scholarship Session"
        images={[
          scholarshipImg1,
          scholarshipImg2,
          scholarshipImg3,
          scholarshipImg4,
          scholarshipImg5,
        ]}
        subtitle="Access to the right tools can change what's possible. The
                Scholarship Session spotlighted She Code Africa's commitment to
                helping women access the resources and opportunities they need
                to grow, build and advance their careers in tech."
      />
    </div>
  );
};

export default ScholarshipSession;
