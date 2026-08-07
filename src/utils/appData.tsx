export const faqTab = [
  {
    label: "General Information",
    value: "general-information"
  },
  {
    label: "Accessibility",
    value: "accessibility"
  },
  {
    label: "Sponsorship",
    value: "sponsorship"
  },
  {
    label: "Registration & Tickets",
    value: "registration-and-tickets"
  },
  {
    label: "Get Involved",
    value: "get-involved"
  }
];

export const faqData: Record<
  string,
  { question: string; answer: React.ReactNode }[]
> = {
  "general-information": [
    {
      question: "What is the She Code Africa Summit 2026?",
      answer: (
        <>
          The She Code Africa Summit 2026 is the flagship summit of African
          women in tech. Under the theme
          <strong>
            {" "}
            “A Decade of Impact: African Women Architecting the Digital Future,”
          </strong>{" "}
          the Summit will bring together women in technology, founders,
          professionals, students, ecosystem leaders, partners, and innovators
          from across Africa for a day of learning, networking, collaboration,
          and celebration.
        </>
      )
    },
    {
      question: "When and where will the Summit take place?",
      answer: (
        <>
          <strong>Date:</strong> Saturday, 19 September 2026
          <br />
          <strong>Time:</strong> 9:00 AM – 4:00 PM
          <br />
          <strong>Venue:</strong> Celebr8 Centre HQ, Vori Close, Acme Road,
          Ikeja, Lagos, Nigeria
        </>
      )
    },
    {
      question: "Who should attend?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Students interested in technology</li>
          <li>Aspiring and early-career professionals</li>
          <li>Software Engineers</li>
          <li>Product Managers</li>
          <li>Designers</li>
          <li>Data Professionals</li>
          <li>Cybersecurity Professionals</li>
          <li>AI and Machine Learning enthusiasts</li>
          <li>Founders and entrepreneurs</li>
          <li>Career switchers</li>
          <li>Tech executives and leaders</li>
          <li>Anyone passionate about advancing women in technology</li>
        </ul>
      )
    },
    {
      question: "Will sessions be recorded?",
      answer:
        "Yes. Selected keynote sessions and panel discussions will be recorded and published on our YouTube channel."
    },
    {
      question: "How can I stay updated?",
      answer:
        "Join our newsletter and follow She Code Africa across our social media platforms for the latest announcements, speaker reveals, ticket updates, and Summit news."
    }
  ],
  accessibility: [
    {
      question: "Will there be childcare (daycare)?",
      answer:
        "Yes. A dedicated daycare space will be available for parents attending the Summit. More information, including registration requirements, will be shared closer to the event."
    },
    {
      question: "Will transportation be provided?",
      answer:
        "She Code Africa plans to provide transportation support from selected locations in Lagos. Routes and pickup information will be communicated to registered attendees ahead of the Summit."
    }
  ],
  sponsorship: [
    {
      question: "How can my organisation sponsor or partner with the Summit?",
      answer: (
        <>
          We welcome organisations interested in sponsoring or partnering with
          the Summit. Please visit the
          <strong> Get Involved</strong> page or contact us via{" "}
          <a
            href="mailto:partnerships@shecodeafrica.org"
            className="text-primary-magenta underline"
          >
            partnerships@shecodeafrica.org
          </a>{" "}
          for more information.
        </>
      )
    }
  ],
  "registration-and-tickets": [
    {
      question: "Is the Summit free?",
      answer:
        "The Summit is a ticketed event. Multiple ticket categories are available to suit different attendees' needs and experiences."
    },
    {
      question: "What is included in my ticket?",
      answer: (
        <>
          Benefits vary depending on the ticket tier and may include:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Access to keynote sessions</li>
            <li>Panel discussions</li>
            <li>Breakout sessions</li>
            <li>Networking opportunities</li>
            <li>Sponsor exhibition area</li>
            <li>Summit merchandise (selected tiers)</li>
            <li>Refreshments (where applicable)</li>
            <li>Access to exclusive experiences (selected tiers)</li>
            <li>Access to hiring room (selected tiers)</li>
          </ul>
          Full details will be available on the Tickets page.
        </>
      )
    },
    {
      question: "How do I purchase a ticket?",
      answer: (
        <>
          Tickets can be purchased directly through our official ticketing page:{" "}
          <a
            href="https://tix.africa/discover/she-code-africa-summit-2026"
            className="text-primary-magenta underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tix.africa/discover/she-code-africa-summit-2026
          </a>
          . Once payment is successful, you'll receive a confirmation email with
          your ticket details and next steps.
        </>
      )
    },
    {
      question: "Will there be virtual access?",
      answer:
        "Yes. Virtual access will be available through a paid virtual ticket. Details about pricing and access will be announced soon."
    }
  ],
  "get-involved": [
    {
      question: "Can I volunteer?",
      answer:
        "Yes. Volunteer applications will open ahead of the Summit. Visit the Get Involved page for updates."
    }
  ]
};
