import keynote1 from "../assets/home/sessions/keynote-1.png";
import keynote2 from "../assets/home/sessions/keynote-2.png";
import fireside from "../assets/home/sessions/fireside-chat.png";
import panel1 from "../assets/home/sessions/panel-1.jpg";
import panel2 from "../assets/home/sessions/panel-2.png";
import panel3 from "../assets/home/sessions/panel-3.png";

export type Person = {
  name: string;
  role: string;
};

export type Session = {
  value: string; // used for the tab id and scrolling
  label: string; // shown in the sidebar and as the small tag on the card
  title: string;
  speakers: Person[];
  moderator?: Person;
  bg: string;
  image: string;
  imageSide: "left" | "right";
  url: string; // "Watch session recap" link
  twoColumnSpeakers?: boolean;
};

export const sessions: Session[] = [
  {
    value: "keynote-1",
    label: "Keynote I",
    title: "10 Years - What we've built & what we've learnt.",
    speakers: [
      {
        name: "Ada Nduka Oyom",
        role: "Founder & Executive Director, She Code Africa",
      },
    ],
    bg: "bg-pastel-pink",
    image: keynote1,
    imageSide: "right",
    url: "https://youtu.be/3zP1HKYcofk?si=rT-UQaOIzE5FQtkn",
  },
  {
    value: "keynote-2",
    label: "Keynote II",
    title: "What got us here won't get us there.",
    speakers: [
      { name: "Napa Onwusah", role: "Managing Partner, B4B Partners" },
    ],
    bg: "bg-[#F8EAFF]",
    image: keynote2,
    imageSide: "left",
    url: "https://youtu.be/LTFR-qq3YZc?si=6MqMhIM3atowtqiL",
  },
  {
    value: "fireside-chat",
    label: "Fireside chat",
    title: "The Politics of Visibility",
    speakers: [
      { name: "Adeife Adeoye", role: "Founder, Creator and MBA Student" },
    ],
    moderator: { name: "Favour Onwuka", role: "The Creative Architect" },
    bg: "bg-[#FFFDDE]",
    image: fireside,
    imageSide: "right",
    url: "https://youtu.be/fHmfsqp9KEw?si=-ge-n0XoiUr6cvfK",
  },
  {
    value: "panel-session-1",
    label: "Panel Session I",
    title: "Building Africa's Digital Infrastructure, who owns it?",
    speakers: [
      {
        name: "Rachel Onoja",
        role: "VP of Learning & Market Dev, ChipMango",
      },
      { name: "Oluwatosin Fatokun", role: "Security GRC Professional" },
      { name: "Zuzka Pelechova", role: "Head of Apify Store" },
    ],
    moderator: {
      name: "Christiana Onoja",
      role: "Cofounder/CEO, Shecode.ai",
    },
    bg: "bg-pastel-pink",
    image: panel1,
    imageSide: "left",
    url: "https://youtu.be/Fxb8w78IqKU?si=X8ys9lmIumJcsBAb",
  },
  {
    value: "panel-session-2",
    label: "Panel Session II",
    title:
      "Inside Capital - What actually gets backed and why women are overlooked",
    speakers: [
      {
        name: "Esther Otusanya",
        role: "Entrepreneur Experience, Endeavor Nigeria",
      },
      { name: "Damilola Olokesusi", role: "CEO/Co-Founder, Shuttlers" },
      {
        name: "Damilola Teidi-Ayoola",
        role: "Principal, Platform and Networks, Ventures Platform Fund",
      },
    ],
    moderator: {
      name: "Ijeoma Adesanya",
      role: "Executive Director, Kobikam Africa",
    },
    bg: "bg-[#F8EAFF]",
    image: panel2,
    imageSide: "right",
    url: "https://youtu.be/-TLrsJudUYU?si=Qfg3X2x70SyAQilh",
  },
  {
    value: "panel-session-3",
    label: "Panel Session III",
    title: "The stories behind the numbers",
    speakers: [
      { name: "Olivia Ekwuyasi", role: "Product Manager & Founder, Yachdahv" },
      { name: "Perpetual Meninwa", role: "Software Developer and Mentor" },
      { name: "Chisom Nwachukwu", role: "Mobile App Developer" },
      { name: "Mbaoma Mary", role: "Cloud Engineer" },
      { name: "Olaniyi Olanike Gift", role: "Machine Learning Engineer" },
    ],
    moderator: {
      name: "Oreoluwa Adetula",
      role: "Programs Manager, She Code Africa",
    },
    bg: "bg-[#FFFDDE]",
    image: panel3,
    imageSide: "left",
    url: "(https://www.youtube.com/watch?v=6499LUovHzg",
    twoColumnSpeakers: true,
  },
];

export const sessionTabs = sessions.map(({ label, value }) => ({
  label,
  value,
}));
