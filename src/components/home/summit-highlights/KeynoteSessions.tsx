import SummitHighlightSections from "./SummitHighlightSections";
import keynote1 from "../../../assets/home/summit-highlight/keynote1.jpg";
import keynote2 from "../../../assets/home/summit-highlight/keynote2.jpg";
import keynote3 from "../../../assets/home/summit-highlight/keynote3.jpg";
import keynote4 from "../../../assets/home/summit-highlight/keynote4.jpg";
import keynote5 from "../../../assets/home/summit-highlight/keynote5.jpg";

const KeynoteSessions = () => {
  return (
    <div className="w-full max-w-307.5 mx-auto space-y-4.25">
      <SummitHighlightSections
        highlightSection="keynote"
        url="https://youtu.be/3zP1HKYcofk?si=O_v9PTs61gIXD5-X"
        title="Keynote Sessions"
        images={[keynote1, keynote4, keynote2, keynote3, keynote5]}
        subtitle="The keynote sessions offered a moment to reflect on a decade of
                progress and look ahead to what the next chapter could hold for
                African women in technology. Grounded in the Summit's theme, the
                conversations brought the focus back to the people, ideas and
                decisions that will shape the future of Africa's digital
                landscape."
      />
    </div>
  );
};

export default KeynoteSessions;
