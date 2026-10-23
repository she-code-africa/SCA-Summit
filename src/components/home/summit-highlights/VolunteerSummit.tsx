import SummitHighlightSections from "./SummitHighlightSections";

const VolunteerSummit = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="volunteer"
        url="#"
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
