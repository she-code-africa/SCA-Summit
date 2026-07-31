import { AboutHero } from "../components/about/AboutHero";
import { AboutSummit } from "../components/about/AboutSubmit";
import { ThemeSection } from "../components/about/ThemeSection";
import { WhyAttendSection } from '../components/about/WhyAttendSection';
import { GetInvolvedSection } from "../components/about/GetInvolvedSection";
import { BossOnBoardSection } from "../components/about/BossOnBoardSection";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutSummit />
      <ThemeSection />
      <WhyAttendSection />
      <BossOnBoardSection />
      <GetInvolvedSection />
      {/* ...next section... */}
    </div>
  );
}
