export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  speakers?: string[];
  tag: string;
  session: "morning" | "afternoon";
}

export const agendaItems: AgendaItem[] = [
  {
    id: "registration",
    time: "9:00 AM - 10:15 AM",
    title: "Registration",
    tag: "Networking Experience",
    session: "morning",
  },

  {
    id: "welcome-address",
    time: "10:15 AM – 10:30 AM",
    title: "Welcome Address & Housekeeping",
    subtitle: "Program Lead &  Community Lead",
    tag: "Reception",
    session: "morning",
  },
  {
    id: "documentary",
    time: "10:30 AM – 10:40 AM",
    title: '"This Is 10 Years" Documentary Premiere',
    tag: "Video Presentation",
    session: "morning",
  },
  {
    id: "introduce-keynote",
    time: "10:40 AM – 10:45 AM",
    title: "Introduce Keynote Speaker",
    subtitle: "Ada Nduka Oyom",
    tag: "Keynote",
    session: "morning",
  },
  {
    id: "opening-keynote",
    time: "10:45 AM – 11:15 AM",
    title: "Opening Keynote Address",
    subtitle: "Ada Nduka Oyom",
    tag: "Keynote",
    session: "morning",
  },
  {
    id: "scale-track",
    time: "11:15 AM – 11:45 AM",
    title: "Scale Track: The Politics of Visibility",
    speakers: [
      "Ifeoluwa Adebayo (moderator)  -- Senior Tech Journalist",
      "Adeife Adeoye  -- Founder, Remote WorkHer",
    ],
    tag: "Fireside chat",
    session: "morning",
  },
  {
    id: "scale-track-qa",
    time: "11:45 AM – 11:55 AM",
    title: "Questions and Answers",
    speakers: [],
    tag: "",
    session: "morning",
  },

  {
    id: "sponsor-spotlight-1",
    time: "11:55 AM – 12:07 PM",
    title: "Sponsors Spotlight",
    speakers: [],
    tag: "",
    session: "morning",
  },

  {
    id: "keynote-2",
    time: "12:07 PM – 12:45 PM",
    title: "Keynote II: What Got Us Here Won't Get Us There",
    tag: "External Keynote",
    session: "afternoon",
  },
  {
    id: "capital-track",
    time: "12:45 PM – 1:30 PM",
    title:
      "Capital Track: Inside Capital — What Actually Gets Backed & Why Women Are Overlooked",
    speakers: ["Omolara Sanni (Moderator) -- Co-founder, Middleman)"],
    tag: "Panel Session",
    session: "afternoon",
  },

  {
    id: "qa-2",
    time: "1:30 PM – 1:40 PM",
    title: "Questions and Answers",
    speakers: [],
    tag: "",
    session: "afternoon",
  },
  {
    id: "networking-break",
    time: "1:40 PM – 1:55 PM",
    title: "Networking Break & Hiring Room Opening",
    tag: "Networking",
    session: "afternoon",
  },
  {
    id: "future-track",
    time: "1:55 PM – 2:40 PM",
    title:
      "Future Track: Building Africa's Digital Infrastructure — Who Owns It?",
    speakers: ["Motunrayo Koyejo (Moderator) -- Product Engineer, Convoy"],
    tag: "Panel Session",
    session: "afternoon",
  },

  {
    id: "qa-33",
    time: "2:40 PM – 2:50 PM",
    title: "Questions and Answers",
    speakers: [],
    tag: "Panel Session",
    session: "afternoon",
  },
  {
    id: "impact-track-video",
    time: "2:50 PM – 3:30 PM",
    title: "Impact Track: The Stories Behind The Numbers",
    tag: "Video",
    session: "afternoon",
  },

  {
    id: "lunch",
    time: "3:30 PM – 4:00 PM",
    title: "Lunch & Community Networking",
    tag: "Networking",
    session: "afternoon",
  },

  {
    id: "decade-awards",
    time: "4:00 PM – 4:15 PM",
    title: "Decade Awards & Hiring Room Closing",
    tag: "Awards Ceremony",
    session: "afternoon",
  },

  {
    id: "sponsors-spotlight-11",
    time: "4:15 PM - 4:25 PM",
    title: "Sponsors Spotlight",
    tag: "Partner Showcase",
    session: "afternoon",
  },

  {
    id: "closing-keynote",
    time: "4:25 PM – 4:45 PM",
    title:
      "Closing Keynote: The Next Decade — What We're Building, Who We're Building For & How You Fit In",
    subtitle: "Ada Nduka Oyom",
    tag: "Closing Keynote",
    session: "afternoon",
  },

  {
    id: "raffle-draw",
    time: "4:45 PM – 5:00 PM",
    title: "Raffle Draw & Laptop Grant",
    tag: "Raffle Draw",
    session: "afternoon",
  },

  {
    id: "anniversary-100",
    time: "5:00 PM – 5:30 PM",
    title: "10-Year Anniversary Celebration",
    tag: "",
    session: "afternoon",
  },
];
