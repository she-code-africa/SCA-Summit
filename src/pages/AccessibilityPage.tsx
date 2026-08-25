import { useState } from "react";
import AccessibilityHero from "../components/accessiblity/AccessibilityHero";
import { CodeOfConductSection } from "../components/accessiblity/codeOfConduct/CodeOfConductSection";
import { NeedHelpBanner } from "../components/accessiblity/NeedHelpBanner";

export function AccessibilityPage() {
    const [activeTab, setActiveTab] = useState("code-of-conduct");
  return (
    <div className="min-h-screen bg-white">
      <AccessibilityHero />
      <CodeOfConductSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <NeedHelpBanner />
    </div>
  );
}
