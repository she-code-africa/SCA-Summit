export type MediaTabContent = {
  title: string;
  description: string;
  // Tailwind background class for this section
  bg: string;
  // which of the two stock photos to use
  image: "img1" | "img2" | "img3" | "img4" | "img5" | "img6";
  // which side the photo sits on at md+ widths
  imageSide: "left" | "right";
  // only "networking" uses this today, but any tab can opt in
  readMore?: string;
};

export const whyAttendMediaContent: Record<string, MediaTabContent> = {
  keynotes: {
    title: "Keynotes",
    description:
      "Hear directly from globally recognised founders, executives, innovators and thought leaders as they share insights on leadership, innovation, and their experiences shaping the future of African technology.",
    bg: "bg-sca-blush",
    image: "img1",
    imageSide: "right",
  },
  workshops: {
    title: "Workshops",
    description:
      "Move beyond inspiration with expert-led workshops that turn your ideas into action. Build practical, in-demand skills, and gain the tools needed to grow your career.",
    bg: "bg-sca-citrine",
    image: "img2",
    imageSide: "left",
  },
  "panel-sessions": {
    title: "Panel Sessions",
    description:
      "Join the conversations featuring diverse voices from across Africa's tech ecosystem as they unpack the trends, opportunities, and challenges defining the next decade of African tech. The panel sessions will bring together speakers from different sectors to discuss topics related to technology, entrepreneurship, leadership, and innovation. Participants will have the opportunity to hear different perspectives and engage during Q&A sessions.",
    bg: "bg-sca-blush",
    image: "img3",
    imageSide: "left",
  },
  networking: {
    title: "Networking",
    description:
      "Meet and connect with the people behind Africa's most exciting ideas, companies, and communities. Build meaningful relationships with your fellow professionals from across the continent. The summit provides opportunities for attendees to connect with students, professionals, founders, partners, community members, and other participants through networking sessions scheduled throughout the day.",
    bg: "bg-sca-citrine",
    image: "img1",
    imageSide: "right",
    readMore:
      "Networking experiences will include networking tables, sponsor engagement, alumni interactions, and dedicated networking breaks. Eligible ticket holders will have access to the Hiring Room, where participating organizations may conduct interviews, receive CV submissions, and engage with prospective candidates. Attendees will also be able to visit sponsor and partner booths to learn more about organizations, products, services, and available opportunities.",
  },
  "learning-engagement": {
    title: "Learning & Engagement",
    description:
      "The summit includes opportunities to engage with speakers through keynote sessions, fireside chats, panel discussions, networking sessions, and audience Q&A.",
    bg: "bg-sca-zesty",
    image: "img4",
    imageSide: "left",
  },
  "community-experience": {
    title: "Community Experience",
    description:
      "As part of She Code Africa's 10th anniversary celebration, attendees can participate in activities that bring together alumni, chapter members, volunteers, partners, scholarship recipients, and the wider community. Community experiences will include alumni showcases, impact storytelling, networking activities, interactive games and icebreakers, and the anniversary cake-cutting ceremony.",
    bg: "bg-sca-blush",
    image: "img5",
    imageSide: "right",
  },
  "partner-showcase": {
    title: "Partner Showcase",
    description:
      "Sponsors and partners will have opportunities to engage with attendees through exhibition booths and spotlight sessions during the summit programme.",
    bg: "bg-sca-zesty",
    image: "img6",
    imageSide: "left",
  },
};

export const tracks = [
  {
    title: "1. Scale Track",
    description: "Conversations on leadership, visibility, and growth.",
  },
  {
    title: "2. Capital Track",
    description:
      "Discussions on fundraising, investment, and access to capital.",
  },
  {
    title: "3. Future Track",
    description:
      "Conversations on AI, digital infrastructure, and Africa's digital future.",
  },
  {
    title: "4. Impact Track",
    description:
      "Stories from alumni, scholarship recipients, community members, and beneficiaries highlighting the impact of She Code Africa's programs.",
  },
];
