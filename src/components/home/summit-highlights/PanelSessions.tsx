import SummitHighlightSections from "./SummitHighlightSections";
import panel1 from "../../../assets/home/summit-highlight/panel1.jpg";
import panel2 from "../../../assets/home/summit-highlight/panel2.jpg";
import panel3 from "../../../assets/home/summit-highlight/panel3.jpg";
import panel4 from "../../../assets/home/summit-highlight/panel4.jpg";

const PanelSessions = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="panel"
        url="#"
        images={[panel1, panel2, panel3, panel4]}
        title="Panel Sessions"
        subtitle="From navigating the realities of the tech industry to rethinking
                leadership, access and representation, the panel sessions
                brought different experiences and perspectives to the table. The
                conversations explored the questions that matter and what it
                will take to build a tech ecosystem where more people can
                contribute, lead and thrive."
      />
    </div>
  );
};

export default PanelSessions;
