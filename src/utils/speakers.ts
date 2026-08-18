import adesuwa from "../assets/speaker/speakers/adesuwa.png";
import dami from "../assets/speaker/speakers/damiT.png";
import damiO from "../assets/speaker/speakers/damiO.png";
import adeife from "../assets/speaker/speakers/adeife.png";
import ada from "../assets/speaker/speakers/ada.png";
import favourO from "../assets/speaker/speakers/favourO.png";

export type SpeakerCategory = "keynote-speakers" | "panelists" | "facilitators";

export const speakersTab: { key: string; label: string }[] = [
  { key: "all", label: "All Speakers" },
  { key: "keynote-speakers", label: "Keynote Speakers" },
  { key: "panelists", label: "Panelists" },
  { key: "facilitators", label: "Facilitators" },
];

const bio = [
  "Dr. Lena Chen is a pioneering force in sustainable technology and a passionate advocate for women in leadership roles. As CEO of GreenGrid Innovations, she has successfully scaled solutions that reduce carbon footprints while driving economic growth. Her keynote, 'Leading with Purpose: Innovating for a Sustainable Tomorrow,' will explore how ethical leadership and cutting-edge design can shape a more responsible tech industry. Attendees will gain actionable insights on fostering innovation, building resilient teams, and championing diversity to create impactful change within their organizations.",
];

export const speakers = [
  {
    id: "keynote-1",
    name: "Ada Nduka Oyom",
    title: "Founder, She Code Africa",
    bio,
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
    name: "Damilola Olokesusi",
    title: "Ceo/Co-Founder, Shuttlers",
    bio: [
      "Damilola Olokesusi is the Co-founder and CEO of Shuttlers, Nigeria's leading technology-driven shared mobility startup. With a bachelor's degree in Chemical Engineering from the University of Lagos, Damilola brings extensive experience in Process Engineering to her role. Her passion for addressing socio-economic challenges in her community led to the founding of Shuttlers, a company dedicated to transforming urban mobility.",
    ],
    image: damiO,
    category: "panelists",
    bg: "#F8EAFF",
  },
  {
    id: "panelist-4",
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
