import speakerPlaceholder from "../assets/home/whyAttendImg2.png";

import adesuwa from "../assets/speaker/speakers/Adesuwa-Okunbo-Rhodes.jpg";
import dami from "../assets/speaker/speakers/Damilola-Teidi.jpeg";

export type SpeakerCategory = "keynote-speakers" | "panelists" | "facilitators";

export type Speaker = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  category: SpeakerCategory;
};

export const speakersTab: { key: string; label: string }[] = [
  { key: "all", label: "All Speakers" },
  { key: "keynote-speakers", label: "Keynote Speakers" },
  { key: "panelists", label: "Panelists" },
  { key: "facilitators", label: "Facilitators" },
];

const bio =
  "Dr. Lena Chen is a pioneering force in sustainable technology and a passionate advocate for women in leadership roles. As CEO of GreenGrid Innovations, she has successfully scaled solutions that reduce carbon footprints while driving economic growth. Her keynote, 'Leading with Purpose: Innovating for a Sustainable Tomorrow,' will explore how ethical leadership and cutting-edge design can shape a more responsible tech industry. Attendees will gain actionable insights on fostering innovation, building resilient teams, and championing diversity to create impactful change within their organizations.";

export const speakersData: Speaker[] = [
  {
    id: "keynote-1",
    name: "Speaker name",
    role: "Keynote Speaker",
    bio,
    image: speakerPlaceholder,
    category: "keynote-speakers",
  },
  {
    id: "panelist-1",
    name: "Speaker name",
    role: "Panelist",
    bio,
    image: speakerPlaceholder,
    category: "panelists",
  },
  {
    id: "facilitator-1",
    name: "Speaker name",
    role: "Facilitator",
    bio,
    image: speakerPlaceholder,
    category: "facilitators",
  },
  {
    id: "keynote-2",
    name: "Speaker name",
    role: "Keynote Speaker",
    bio,
    image: speakerPlaceholder,
    category: "keynote-speakers",
  },
  {
    id: "panelist-2",
    name: "Speaker name",
    role: "Panelist",
    bio,
    image: speakerPlaceholder,
    category: "panelists",
  },
  {
    id: "facilitator-2",
    name: "Speaker name",
    role: "Facilitator",
    bio,
    image: speakerPlaceholder,
    category: "facilitators",
  },
];

export const speakers = [
  {
    id: "panelist-1",
    name: "Adesuwa Okunbo Rhodes",
    title: "Founder & Managing Partner, Aruwa Capital Management",
    bio,
    image: adesuwa,
    category: "panelist",
  },
  {
    id: "panelist-2",
    name: "Damilola Teidi-Ayoola",
    title: "Principal, Platform and Networks,  Ventures Platform Fund",
    bio,
    image: dami,
    category: "panelist",
  },
  {
    id: "panelist-3",
    name: " Damilola Olokesusi",
    title: "Ceo/Co-Founder, Shuttlers",
    bio,
    image: dami,
    category: "panelist",
  },
];
