export type Testimonial = {
  paragraphs: string[];
  name: string;
  role?: string;
  cardBg: string;
  quoteColor: string;
  bandColor: string;
  textColor: string;
  tilt?: boolean;
  textWidth?: string;
};

export const testimonials: Testimonial[] = [
  // ---------- Page 1 ----------
  {
    paragraphs: [
      "The Summit was thoughtfully put together, and I appreciated the opportunity to engage with founders on the realities of raising capital. She Code Africa continues to create valuable spaces for women in technology to access the information, networks and perspectives they need to build and grow. Congratulations to the team on another successful edition.",
    ],
    name: "Damilola Teidi-Ayoola",
    role: "Speaker",
    cardBg: "#E6DBE1",
    quoteColor: "#DCCCD5",
    bandColor: "#AA849A",
    textColor: "#5C0335",
    tilt: true,
    textWidth: "w-[305px] text-base pl-[37.22px] pt-[19.37px]",
  },
  {
    paragraphs: [
      "It was such an honour to be part of the Summit on the Impact Track and to share my story. I didn't take it lightly at all. Being part of a conversation that celebrates 10 years of She Code Africa's impact is something that means a lot to me personally.",
      "Thank you for creating the space and for all the work you put in behind the scenes to make it seamless. I know how much effort goes into pulling off something like that. Count me in for whatever comes next. Always happy to support the SCA community in any way I can.",
    ],
    name: "Olaniyi Olanike",
    role: "Speaker",
    cardBg: "#FDB5E0",
    quoteColor: "#FFA9D8",
    bandColor: "#FF8FCF",
    textColor: "#5C0335",
    textWidth: "w-[337px] text-sm pl-8 pr-4 pt-[23.09px]",
  },
  {
    paragraphs: [
      "It was truly an honour to join the Impact Track and share a part of my journey with the SCA community. Looking back, I'm reminded of how much access to the right community, knowledge, mentorship, and opportunities can change the direction of a person's life and career.",
      "She Code Africa has been an important part of my own journey, and being able to return and share that story while reflecting on the wider impact of investing in African women in technology was particularly meaningful to me.",
    ],
    name: "Perpetual Meninwa",
    role: "Speaker",
    cardBg: "#F3FDDA",
    quoteColor: "#E8F7C4",
    bandColor: "#8FAB4F",
    textColor: "#000000",
    tilt: true,
    textWidth: "w-[300px] pl-[34.14px] text-sm pt-[19.18px]",
  },

  // ---------- Page 2 ----------
  {
    paragraphs: [
      "Participating in the Hiring Room gave us the opportunity to engage directly with promising women in tech, gain valuable perspectives from their career journeys, and connect with other industry professionals.",
      "Beyond identifying potential talent for immediate opportunities, we were able to expand our talent pipeline by retaining additional candidate profiles for consideration in future recruitment. It was also a meaningful way to contribute to advancing gender diversity in the technology workforce.",
    ],
    name: "Hiring Room Partner",
    cardBg: "#F3FDDA",
    quoteColor: "#E8F7C4",
    bandColor: "#8FAB4F",
    textColor: "#000000",
    textWidth: "w-[300px] pl-[34.14px] text-sm pt-[19.18px]",
  },
  {
    paragraphs: [
      "What I enjoyed most was the opportunity to connect the CC Champions community with a wider network of women in tech and contribute to the vibrant community at the Summit. I also appreciated the opportunity to extend a discount to our members, making the experience more accessible to our community.",
      "Being part of such a meaningful milestone in She Code Africa's journey made the experience even more special.",
    ],
    name: "Community Partner",
    cardBg: "#E6DBE1",
    quoteColor: "#DCCCD5",
    bandColor: "#AA849A",
    textColor: "#000000",
    textWidth: "w-[305px] pl-[37.22px] text-sm pt-[19.37px]",
  },
  {
    paragraphs: [
      "Partnering with She Code Africa was an incredibly rewarding experience, from the seamless communication to the energy at the Summit, it reaffirmed our commitment to supporting initiatives that empower women.",
      "We are proud to have played a role in such an impactful event.",
    ],
    name: "DriveMe",
    role: "Transportation Partner",
    cardBg: "#DDFA8F",
    quoteColor: "#D0F07A",
    bandColor: "#8FAB4F",
    textColor: "#094A32",
    textWidth: "w-[351px] pl-[25.16px] text-sm pt-[23.09px]",
  },

  // ---------- Page 3 ----------
  {
    paragraphs: [
      "Thank you for having me as part of the Summit. I enjoyed the conversation and was glad to contribute to such an important discussion.",
    ],
    name: "Bekere Amassoma",
    role: "VIP Guest",
    cardBg: "#FFF68F",
    quoteColor: "#FFE9A0",
    bandColor: "#FF8A3D",
    textColor: "#5C0335",
    textWidth: "w-[320px] pl-[39.16px] text-base pt-[23.09px]",
  },
  {
    paragraphs: [
      "My experience at the SCA Summit was everything and more. From the hall ambience to the conversations, the summit truly embodied the message it was sharing and opened my eyes to what is possible for women in tech. The insightful panels, keynote sessions, and especially Ada’s keynote reignited my drive and reminded me why I continue to pursue a future in tech. Seeing fellow undergraduates and women like myself take the stage to share their work and impact was equally inspiring.",
      "One of my highlights was the hiring room, where recruiters were ready to connect with and hire talent. I had one of the most amazing 10-minute interviews, which boosted my confidence and reminded me of the opportunities ahead. Beyond the sessions, it was beautiful to celebrate, connect, and share space with fellow women in tech.",
    ],
    name: "Elizabeth Ogunmola",
    role: "Participant",
    cardBg: "#DDFA8F",
    quoteColor: "#D0F07A",
    bandColor: "#8FAB4F",
    textColor: "#094A32",
    textWidth: "w-[370px] pl-[25.16px] text-[13px] ",
  },
  {
    paragraphs: [
      "The Summit was amazing, and what wowed me was the high level of organization, from the ambiance to the reception (welcoming of people), the event itself, and the packaging of the refreshments...",
      "I am a perfectionist, so it's not difficult for me to notice lapses at any event I attend. But, I must say that the summit was beyond my imagination, and I want to give kudos to the organizers and She Code Africa Management as a whole. The Summit was indeed a Success!!!",
    ],
    name: "Adaeze Blessing Oyetunde",
    role: "Participant",
    cardBg: "#F7E8FF",
    quoteColor: "#EFD9FF",
    bandColor: "#9966FF",
    textColor: "#9865FF",
    textWidth: "w-[320px] pl-[30.16px] text-sm pt-[23.09px]",
  },

  // ---------- Page 4 ----------
  {
    paragraphs: [
      "I loved seeing students, young women, and experienced professionals in the same space, alongside a diverse mix of speakers with inspirational stories and insights. The recruitment opportunity was another highlight, a real opportunity for a woman to get hired.",
    ],
    name: "Salvation C.",
    role: "Participant",
    cardBg: "#FFF68F",
    quoteColor: "#FFE9A0",
    bandColor: "#FF8A3D",
    textColor: "#5C0335",
    textWidth: "w-[320px] pl-[39.16px] text-base pt-[23.09px]",
  },
  {
    paragraphs: [
      "What stood out to me most was how intentional the summit was, the creative designs, and how inclusive it felt- especially the florals, which made one feel like celebrating yourself, community and the 10th year anniversary altogether. I also appreciate the hospitality of the event.",
      "The She Code Africa Team excels at creating a fresh experience with every summit. There is always something new to look forward to. Thank you for an incredible summit experience.",
    ],
    name: "Seriki A",
    role: "Participant",
    cardBg: "#FFE6F3",
    quoteColor: "#EBD3E0",
    bandColor: "#FFB3DC",
    textColor: "#5C0335",
    textWidth: "w-[300px] pl-[37.16px] text-xs pt-[23.09px]",
  },
];
