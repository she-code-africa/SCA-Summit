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
    time: "8:00AM -9:00AM",
    title: "Registration, Breakfast & The Welcome Wall",
    tag: "Networking Experience",
    session: "morning"
  },
  {
    id: "setting-pace",
    time: "9:50AM - 10:00AM",
    title: "Setting the Pace",
    tag: "Audience Settled In",
    session: "morning"
  },
  {
    id: "welcome-video",
    time: "8:00AM -9:00AM",
    title: "Short Film/ Welcome Video",
    tag: "Official opening",
    session: "morning"
  },
  {
    id: "introduction",
    time: "10:05 AM – 10:15 AM",
    title: "Introduction",
    tag: "Opening ceremony",
    session: "morning"
  },
  {
    id: "welcome-address",
    time: "10:05 AM – 10:15 AM",
    title: "Welcome Address & Housekeeping",
    subtitle: "Program Lead &  Community Lead",
    tag: "Reception",
    session: "morning"
  },
  {
    id: "documentary",
    time: "10:30 AM – 10:40 AM",
    title: '"This Is 10 Years" Documentary Premiere',
    tag: "Video Presentation",
    session: "morning"
  },
  {
    id: "opening-keynote",
    time: "10:30 AM – 10:40 AM",
    title: "Opening Keynote: 10 Years — What We Built, What We Learned",
    subtitle: "Ada Nduka Oyom",
    tag: "Keynote",
    session: "morning"
  },
  {
    id: "scale-track",
    time: "11:10 AM – 11:40 AM",
    title: "Scale Track: The Politics of Visibility",
    speakers: [
      "Ifeoluwa Adebayo (moderator)  -- Senior Tech Journalist",
      "Adeife Adeoye  -- Founder, Remote WorkHer"
    ],
    tag: "Fireside chat",
    session: "morning"
  },
  {
    id: "keynote-2",
    time: "11:40 PM – 12:10 PM",
    title: "Keynote II: What Got Us Here Won't Get Us There",
    tag: "External Keynote",
    session: "morning"
  },
  {
    id: "capital-track",
    time: "12:10 PM – 12:50 PM",
    title:
      "Capital Track: Inside Capital — What Actually Gets Backed & Why Women Are Overlooked",
    speakers: ["Omolara Sanni (Moderator) -- Co-founder, Middleman)"],
    tag: "Panel Session",
    session: "afternoon"
  },
  {
    id: "networking-break",
    time: "12:50 PM – 1:10 PM",
    title: "Networking Break & Hiring Room Opening",
    tag: "Networking",
    session: "afternoon"
  },
  {
    id: "future-track",
    time: "1:10 PM – 1:50 PM",
    title:
      "Future Track: Building Africa's Digital Infrastructure — Who Owns It?",
    speakers: ["Motunrayo Koyejo (Moderator) -- Product Engineer, Convoy"],
    tag: "Panel Session",
    session: "afternoon"
  },
  {
    id: "impact-track-video",
    time: "1:50 PM – 2:00 PM",
    title: "Impact Track: The Stories Behind The Numbers",
    tag: "Video",
    session: "afternoon"
  },
  {
    id: "sponsors-spotlight-1",
    time: "2:00PM -2:20PM",
    title: "Sponsors Spotlight",
    tag: "Partner Showcase",
    session: "afternoon"
  },
  {
    id: "impact-track-panel",
    time: "2:20 PM – 2:50 PM",
    title: "Impact Track: The Stories Behind The Numbers",
    tag: "Panel Session",
    session: "afternoon"
  },
  {
    id: "lunch",
    time: "2:50 PM – 3:10 PM",
    title: "Lunch & Community Networking",
    tag: "Networking",
    session: "afternoon"
  },
  {
    id: "decade-awards",
    time: "3:10 PM – 3:30 PM",
    title: "Decade Awards & Hiring Room Closing",
    tag: "Awards Ceremony",
    session: "afternoon"
  },
  {
    id: "sponsors-spotlight-2",
    time: "3:30 PM – 3:40 PM",
    title: "Sponsors Spotlight",
    tag: "Partner Showcase",
    session: "afternoon"
  },
  {
    id: "closing-keynote",
    time: "3:40 PM – 4:10 PM",
    title:
      "Closing Keynote: The Next Decade — What We're Building, Who We're Building For & How You Fit In",
    subtitle: "Ada Nduka Oyom",
    tag: "Closing Keynote",
    session: "afternoon"
  },
  {
    id: "winner-announcement",
    time: "4:10 PM – 4:40 PM",
    title: "Winner Announcement",
    tag: "Raffle Draw",
    session: "afternoon"
  }
];
