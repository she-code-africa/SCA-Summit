import adesuwa from "../assets/speaker/speakers/adesuwa.png";
import dami from "../assets/speaker/speakers/damiT.png";
import damiO from "../assets/speaker/speakers/damiO.png";
import adeife from "../assets/speaker/speakers/adeife.png";
import ada from "../assets/speaker/speakers/ada.png";
import favourO from "../assets/speaker/speakers/favourO.png";
import rachel from "../assets/speaker/speakers/rachel.png";

export type SpeakerCategory = "keynote-speakers" | "panelists" | "facilitators";

export const speakersTab: { key: string; label: string }[] = [
  { key: "all", label: "All Speakers" },
  { key: "keynote-speakers", label: "Keynote Speakers" },
  { key: "panelists", label: "Panelists" },
  { key: "facilitators", label: "Facilitators" },
];

export const speakers = [
  {
    id: "keynote-1",
    name: "Ada Nduka Oyom",
    title: "Founder & Executive Director, She Code Africa",
    bio: [
      "Ada Nduka Oyom is the visionary founder and Executive Director of She Code Africa, a pan-African nonprofit that has impacted over 65,000 women across the continent.",
      "With over a decade of experience, her expertise extends beyond non-profit leadership. Ada has built and scaled initiatives that reached over 500,000 developers across EMEA, securing six-figure investments and forging strategic partnerships with global brands like Google, HP, and FedEx. She also co-founded Open Source Community Africa, now home to over 5,000 contributors, and serves as a Non-executive director on a U.S. non-profit board shaping AI ethics and policy.",
      "Her transformative work has been recognized by Forbes, the African Union, Google, and UNICEF Nigeria, among others.",
    ],
    image: ada,
    category: "keynote-speakers",
    bg: "#FFFDDE",
  },
  {
    id: "panelist-1",
    name: "Adesuwa Okunbo Rhodes",
    title: "Founder & Managing Partner, Aruwa Capital Management",
    bio: [
      "Adesuwa Okunbo Rhodes is the Founder and Managing Partner of Aruwa Capital Management, a women-owned growth equity and gender lens fund managing $80 million in assets across two funds. She brings over 15 years of investment banking and private equity experience across developed and emerging markets, including at J.P. Morgan. ",
    ],
    image: adesuwa,
    category: "panelists",
    bg: "#FFB8E0",
  },
  {
    id: "panelist-2",
    bg: "#FFEAF6",
    name: "Damilola Teidi-Ayoola",
    title: "Principal, Platform and Networks,  Ventures Platform Fund",
    bio: [
      "Damilola Teidi-Ayoola is a venture capital Platform leader with over 13 years of experience working at the intersection of startups, capital, and ecosystem development across Africa. She is currently a Principal and Head of Platform and Networks at Ventures Platform, where she leads the firm’s post-investment and portfolio success strategy. In this role, she designs and implements initiatives that support portfolio companies across talent, governance, market expansion, and capital access with the goal of accelerating company growth, strengthening founder capacity, and improving fund-level outcomes.",
    ],
    image: dami,
    category: "panelists",
  },
  {
    id: "panelist-3",
    name: "Rachel Onoja",
    title: "VP of Learning & Market Dev, ChipMango",
    bio: [
      " Rachael Onoja is VP of Learning & Market Development at ChipMango, where she leads talent and market strategy at the intersection of technology, workforce development, and Africa's growing digital economy. Over the past decade, she has designed learning, talent development, and career growth programmes across organisations including AltSchool Africa, Andela, Decagon and European consulates, working close to the frontlines of how Africa builds, trains, and retains the talent powering its digital infrastructure. ",
    ],
    image: rachel,
    category: "panelists",
    bg: "#FFFDDE",
  },
  {
    id: "panelist-4",
    name: "Damilola Olokesusi",
    title: "CEO / Co-Founder, Shuttlers",
    bio: [
      "Damilola Olokesusi is the Co-founder and CEO of Shuttlers, Nigeria's leading technology-driven shared mobility startup. With a bachelor's degree in Chemical Engineering from the University of Lagos, Damilola brings extensive experience in Process Engineering to her role. Her passion for addressing socio-economic challenges in her community led to the founding of Shuttlers, a company dedicated to transforming urban mobility.",
    ],
    image: damiO,
    category: "panelists",
    bg: "#F8EAFF",
  },
  {
    id: "panelist-5",
    name: "Adeife Adeoye",
    title: "Founder, Creator and MBA Student",
    bio: [
      "Adeife Adeoye is a founder, creator and MBA student based in Lagos, Nigeria. She builds companies, documents her journey and shares honest conversations about entrepreneurship, technology, AI and modern ambition. Through her businesses and content, Adeife is building products and communities that create opportunities while inspiring a new generation of Africans to dream bigger, build boldly and embrace the journey.",
    ],
    image: adeife,
    category: "panelists",
    bg: "#F5FFDE",
  },
  {
    id: "facilitator-1",
    name: "Favour Onwuka",
    title: "The Creative Architect",
    bio: [
      "Favour Onwuka is The Creative Architect, a Marketing Communications and Media Professional who builds the systems behind how ideas grow and scale.",
      "She is a trained Medical Laboratory Scientist, and that systems-first thinking now shapes her work across media, communications, and the creator economy. She helps creators and professionals build things that last, including projects, careers, and brands.",
    ],
    image: favourO,
    category: "facilitators",
    bg: "#FFB8E0",
  },
];
