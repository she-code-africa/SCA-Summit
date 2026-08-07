import AccessibilityHero from "../components/accessiblity/AccessibilityHero";
import { CodeOfConductSection } from "../components/accessiblity/codeOfConduct/CodeOfConductSection";
import { NeedHelpBanner } from "../components/accessiblity/NeedHelpBanner"; 

export function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <AccessibilityHero />
      <CodeOfConductSection />
      <NeedHelpBanner /> 
    </div>
  );
}
