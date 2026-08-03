export const tabs = [
  { key: "code-of-conduct", label: "Code of conduct" },
  { key: "attendance-support", label: "Attendance support" },
  { key: "accessibility", label: "Accessibility" },
  { key: "first-aid", label: "First aids / Medicals" },
  { key: "help-concerns", label: "Help & Concerns" }
];

export const CONTENT_MAP: Record<string, any> = {
  "code-of-conduct": {
    title: "Our Code of Conduct",
    accordions: [
      {
        key: "inclusive-participation",
        title: "Inclusive Participation",
        sections: [
          {
            type: "paragraph",
            text: "Creating an inclusive environment is a shared responsibility. We encourage all attendees to:"
          },
          {
            type: "list",
            items: [
              "Respect different perspectives, experiences, and opinions.",
              "Create space for everyone to contribute during sessions and discussions.",
              "Use welcoming and inclusive language.",
              "Respect personal boundaries when networking.",
              "Be mindful that people may have different communication styles or accessibility needs."
            ]
          }
        ]
      }
    ]
  },
  "attendance-support": {
    title: "Attendance support",
    accordions: [
      {
        key: "travel-funding",
        title: "Travel Funding",
        sections: [
          {
            type: "paragraph",
            text: "We understand that access is an important part of creating an inclusive Summit experience. While we're unable to sponsor travel outside Lagos or Nigeria this year, we'll provide complimentary transportation from selected pickup locations within Lagos to the Summit venue."
          },
          {
            type: "paragraph",
            text: "Venue directions and nearby accommodation recommendations will also be shared ahead of the event to help attendees plan their trip."
          },
          {
            type: "paragraph",
            text: "If your organization is interested in supporting the participation of African women in this year's summit, we encourage you to reach out to our Partnership team, at [partnerships@shecodeafrica.org]. Let's work together to champion women in African tech!"
          }
        ]
      },
      {
        key: "diversity-tickets",
        title: "Diversity Access Tickets",
        sections: [
          {
            type: "paragraph",
            text: "Does your organization believe in fostering inclusivity in tech? Partner with us by sponsoring diversity tickets for this year's summit. By doing so, you'll directly contribute to empowering African women and shaping the future of technology in Africa."
          },
          {
            type: "paragraph",
            text: "To discuss sponsorship opportunities, reach out to our Partnership team, at [partnerships@shecodeafrica.org]."
          }
        ]
      },
      {
        key: "nursing-room",
        title: "Nursing Room and Child Care",
        sections: [
          {
            type: "paragraph",
            text: "We understand the needs of mothers, and we're committed to making the summit accessible for all. This year, we'll provide a dedicated nursing and childcare room for your comfort and convenience."
          }
        ]
      }
    ]
  },
  accessibility: {
    title: "Accessibility",
    accordions: [
      {
        key: "venue-accessibility",
        title: "Venue Accessibility",
        sections: [
          {
            type: "paragraph",
            text: "We're committed to creating an inclusive and welcoming experience for all attendees."
          },
          {
            type: "paragraph",
            text: "The Summit venue is designed to support accessibility and will include:"
          },
          {
            type: "list",
            items: [
              "Wheelchair-accessible entrances",
              "Wheelchair-accessible restrooms",
              "Accessible parking spaces",
              "Wheelchair access throughout the venue",
              "Elevator/lift access (where applicable for multi-level spaces)"
            ]
          },
          {
            type: "paragraph",
            text: "If you have any additional accessibility or mobility needs, we encourage you to let us know in advance by contacting [community@shecodeafrica.org]. You can also speak with a volunteer or member of the organizing team during the Summit, and we'll do our best to support you."
          }
        ]
      },
      {
        key: "special-needs",
        title: "Special Needs",
        sections: [
          {
            type: "list",
            items: [
              "Closed captioning: We'll provide closed captioning at the summit for hard-of-hearing attendees viewing online or present in person at the summit.",
              "ASL (American Sign Language) Interpretation"
            ]
          }
        ]
      },
      {
        key: "communication-preferences",
        title: "Communication Preferences",
        sections: [
          {
            type: "paragraph",
            text: "Networking is one of the highlights of the Summit, but we encourage everyone to approach conversations respectfully. Before starting a conversation, introducing yourself, or exchanging contact information, politely ask whether the other person is open to chatting. Respect if someone declines or wishes to end a conversation."
          }
        ]
      },
      {
        key: "your-privacy",
        title: "Your Privacy Matters",
        sections: [
          {
            type: "paragraph",
            text: "Photography and videography will take place throughout the Summit to capture highlights for She Code Africa's communications and promotional activities. By attending the Summit, attendees acknowledge that photographs and video recordings will be taken during the event."
          },
          {
            type: "paragraph",
            text: "If you have specific concerns about photography or require additional support, please speak with a member of the organizing team on-site, and we'll do our best to accommodate your request where reasonably possible."
          }
        ]
      }
    ]
  },
  "first-aid": {
    title: "First Aid / Medical Assistance",
    accordions: []
  },
  "help-concerns": {
    title: "Help & Concerns",
    accordions: [
      {
        key: "reporting-concerns",
        title: "Reporting Concerns",
        sections: [
          {
            type: "paragraph",
            text: "If you experience or witness behaviour that conflicts with our Code of Conduct, we encourage you to report it as soon as possible. You can:"
          },
          {
            type: "list",
            items: [
              "Speak with a member of the Community Team.",
              "Speak with any volunteer or event staff member.",
              "Email us confidentially at [community@shecodeafrica.org]."
            ]
          },
          {
            type: "paragraph",
            text: "All reports will be treated with care, respect, and confidentiality wherever possible. Appropriate action will be taken based on the nature of the concern."
          }
        ]
      },
      {
        key: "need-help",
        title: "Need Help? Let Us Know",
        sections: [
          {
            type: "paragraph",
            text: "Our Community Team is available throughout the Summit to support you."
          },
          {
            type: "list",
            items: [
              "Mfonobong, Community Manager ([mfonobong@shecodeafrica.org])",
              "Oluwaseun, Community Associate ([oluwaseun@shecodeafrica.org])",
              "Evangeline, Community Intern ([evangeline@shecodeafrica.org])"
            ]
          }
        ]
      }
    ]
  }
};
