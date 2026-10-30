import SummitHighlightSections from "./SummitHighlightSections";
import volunteer1 from "../../../assets/home/summit-highlight/volunteer.jpg";
import volunteer2 from "../../../assets/home/summit-highlight/volunteer2.jpg";
import volunteer3 from "../../../assets/home/summit-highlight/volunteer3.jpg";
import volunteer4 from "../../../assets/home/summit-highlight/volunteer4.jpg";

const VolunteerSummit = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="volunteer"
        url="https://www.instagram.com/p/DehBEEFmJVv/"
        images={[volunteer1, volunteer2, volunteer3, volunteer4]}
        title="Volunteers’ Summit"
        subtitle="Behind She Code Africa's work is a community of volunteers who
                give their time, skills and energy to the mission. The Volunteer
                Summit brought this community together to reconnect, exchange
                ideas and strengthen their shared commitment to creating more
                opportunities for African women in tech."
      />
    </div>
  );
};

export default VolunteerSummit;
