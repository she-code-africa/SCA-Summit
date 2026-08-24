export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type TermsSection = {
  value: string;
  label: string;
  content: TermsBlock[];
};

export const termsSections: TermsSection[] = [
  {
    value: "registration-tickets",
    label: "Registration & Tickets",
    content: [
      {
        type: "list",
        items: [
          "a. Registration is confirmed only upon successful payment (where applicable) and receipt of an official confirmation email from She Code Africa or its designated ticketing platform.",
          "b. Each ticket admits one attendee only and may not be duplicated, resold, or transferred without prior written approval from She Code Africa.",
          "c. Tickets are non refundable except where otherwise communicated by She Code Africa or where required by applicable law.",
          "d. Attendees may be required to present a valid government-issued means of identification during check-in for verification purposes.",
          "e. Access to certain experiences, including the Hiring Room and other exclusive activities, may be restricted to designated ticket categories.",
        ],
      },
    ],
  },
  {
    value: "event-admission",
    label: "Event Admission",
    content: [
      {
        type: "p",
        text: "Admission is subject to compliance with these Terms.",
      },
      {
        type: "list",
        items: [
          "a. She Code Africa reserves the right to refuse entry or remove any individual whose behaviour threatens the safety, security, comfort, or experience of others.",
          "b. Seating is generally available on a first come, first served basis unless otherwise stated or reserved for specified ticket categories.",
          "c. She Code Africa reserves the right to modify the event programme, speakers, venue, schedule, or activities where necessary. Reasonable efforts will be made to communicate any significant changes.",
        ],
      },
    ],
  },
  {
    value: "attendee-conduct",
    label: "Attendee Conduct",
    content: [
      {
        type: "p",
        text: "She Code Africa is committed to providing a welcoming, inclusive, respectful, and harassment-free environment for all participants. Participants are expected to:",
      },
      {
        type: "list",
        items: [
          "a. Treat everyone with dignity, respect, and professionalism.",
          "b. Refrain from harassment, discrimination, intimidation, hate speech, bullying, or inappropriate physical or verbal conduct.",
          "c. Respect venue rules and comply with instructions from event staff and venue personnel.",
          "d. Wear event accreditation where required.",
          "e. Avoid disruptive behaviour during sessions and activities.",
          "f. Respect the privacy of other attendees.",
        ],
      },
      {
        type: "p",
        text: "Anyone found violating these standards may be removed from the event without refund and may be prohibited from attending future She Code Africa events.",
      },
    ],
  },
  {
    value: "photography-recording-media-consent",
    label: "Photography, Recording & Media Consent",
    content: [
      {
        type: "p",
        text: "The Summit will be photographed, filmed, livestreamed, and recorded. By attending, you grant She Code Africa and its authorised partners permission to photograph, film, record, reproduce, publish, distribute, and use your image, voice, likeness, comments, and participation in any media format for promotional, educational, reporting, archival, and marketing purposes without additional notice or compensation.",
      },
    ],
  },
  {
    value: "laptop-grant",
    label: "Laptop Grant",
    content: [
      {
        type: "p",
        text: "The Laptop Grant is designed to support women in technology who require a laptop to further their learning, career development, or technical skills. The following conditions apply:",
      },
      {
        type: "list",
        items: [
          "a. Only attendees who purchase the designated eligible ticket tier(s) will receive the Laptop Grant application form.",
          "b. The application form will be sent to the email address used during ticket purchase.",
          "c. Applications must be submitted before the communicated deadline.",
          "d. Submission of an application does not guarantee selection.",
          "e. Applications will be assessed against the published eligibility requirements and the review committee's evaluation criteria.",
          "f. The review committee's decision shall be final.",
          "g. Successful applicants will be announced during the She Code Africa Summit 2026.",
          "h. Winners may be required to provide valid identification and any supporting documentation requested before receiving the laptop.",
          "i. She Code Africa reserves the right to withdraw the award if any false, misleading, or fraudulent information is discovered.",
          "j. Laptop Grants are non-transferable, non-exchangeable, and cannot be redeemed for cash.",
          "k. Collection arrangements for successful recipients will be communicated by the organisers.",
        ],
      },
    ],
  },
  {
    value: "hiring-room",
    label: "Hiring Room",
    content: [
      {
        type: "p",
        text: "The Hiring Room is designed to facilitate introductions between employers and qualified candidates. Participation is subject to the following conditions:",
      },
      {
        type: "list",
        items: [
          "a. Access is available only to eligible ticket holders.",
          "b. Participation is on a first come, first served basis.",
          "c. Candidates will be assigned interview or engagement time slots.",
          "d. Sessions will be conducted in batches throughout the event.",
          "e. Candidates should report to the Hiring Room before their scheduled time.",
          "f. Late arrival may result in forfeiture of the allocated slot.",
          "g. Due to limited recruiter availability and event scheduling, not every participant will have the opportunity to meet every hiring organisation.",
          "h. Where interviews cannot be accommodated within the available timeframe, participants may submit their CVs during the event. Submitted CVs will be shared with participating hiring organisations for future consideration.",
          "i. By submitting a CV, participants consent to She Code Africa sharing their CV with participating hiring organisations for recruitment purposes.",
          "j. Participation in the Hiring Room does not guarantee an interview, internship, employment, or any further engagement.",
          "k. All recruitment and hiring decisions remain solely at the discretion of the participating employers.",
        ],
      },
    ],
  },
  {
    value: "awards-giveaways-competitions",
    label: "Awards, Giveaways & Competitions",
    content: [
      {
        type: "p",
        text: "The Summit may feature awards, competitions, raffles, and promotional giveaways. Unless otherwise stated:",
      },
      {
        type: "list",
        items: [
          "a. Eligibility requirements must be met.",
          "b. Winners must comply with any verification requirements before receiving a prize.",
          "c. Decisions of the judging or review panel are final.",
          "d. Prizes are non transferable and may not be exchanged for cash unless otherwise stated.",
          "e. If a winner cannot be contacted, is absent during prize collection without prior arrangement, or is found to be ineligible, She Code Africa reserves the right to select another recipient.",
        ],
      },
    ],
  },
  {
    value: "sponsor-partner-activations",
    label: "Sponsor & Partner Activations",
    content: [
      {
        type: "p",
        text: "Sponsors and partners may host exhibitions, demonstrations, networking sessions, product showcases, career opportunities, or promotional activities during the Summit.",
      },
      {
        type: "p",
        text: "Participation in these activities is entirely voluntary. Where attendees choose to share their personal information directly with a sponsor or partner, the collection and processing of that information will be governed by the sponsor's or partner's own privacy policy.",
      },
    ],
  },
  {
    value: "personal-data",
    label: "Personal Data",
    content: [
      {
        type: "p",
        text: "By registering for the Summit, you consent to She Code Africa collecting and processing your personal information for purposes including:",
      },
      {
        type: "list",
        items: [
          "a. Event registration and administration.",
          "b. Ticket verification.",
          "c. Event communications.",
          "d. Hiring Room coordination.",
          "e. Laptop Grant administration.",
          "f. Awards and giveaway administration.",
          "g. Monitoring, evaluation, learning, and reporting.",
          "h. Future communications about She Code Africa programmes and events, from which you may unsubscribe at any time.",
        ],
      },
      {
        type: "p",
        text: "Personal information will be handled responsibly and shared only where necessary for the administration of Summit activities or where required by law.",
      },
    ],
  },
  {
    value: "health-safety",
    label: "Health & Safety",
    content: [
      {
        type: "p",
        text: "Attendees agree to comply with all venue health, safety, security, and emergency procedures.",
      },
      {
        type: "p",
        text: "She Code Africa reserves the right to implement additional health or safety measures where required by law, venue policy, or public health guidance.",
      },
    ],
  },
  {
    value: "personal-property",
    label: "Personal Property",
    content: [
      {
        type: "p",
        text: "Attendees remain solely responsible for their personal belongings throughout the Summit.",
      },
      {
        type: "p",
        text: "She Code Africa shall not be liable for the loss, theft, or damage of personal property brought to or left at the event venue.",
      },
    ],
  },
  {
    value: "intellectual-property",
    label: "Intellectual Property",
    content: [
      {
        type: "p",
        text: "All Summit content, including presentations, branding, graphics, publications, recordings, session materials, and other intellectual property, remains the property of She Code Africa or the respective rights holder.",
      },
      {
        type: "p",
        text: "Attendees may not reproduce, record, distribute, publish, sell, or commercially exploit Summit content without prior written permission from She Code Africa or the relevant rights holder.",
      },
    ],
  },
  {
    value: "limitation-of-liability",
    label: "Limitation of Liability",
    content: [
      {
        type: "p",
        text: "To the fullest extent permitted by applicable law, She Code Africa shall not be liable for any indirect, incidental, consequential, or special damages arising from participation in the Summit or related activities, including outcomes associated with recruitment, networking, sponsorship opportunities, competitions, giveaways, or the Laptop Grant.",
      },
    ],
  },
  {
    value: "amendments",
    label: "Amendments",
    content: [
      {
        type: "p",
        text: "She Code Africa reserves the right to amend these Terms at any time. Updated Terms will be published through official Summit communication channels and will take effect immediately upon publication.",
      },
    ],
  },
  {
    value: "governing-law",
    label: "Governing Law",
    content: [
      {
        type: "p",
        text: "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.",
      },
    ],
  },
  {
    value: "contact",
    label: "Contact",
    content: [
      {
        type: "p",
        text: "Questions regarding these Terms or the Summit may be directed to the She Code Africa team through the official Summit communication channels.",
      },
    ],
  },
  {
    value: "acceptance",
    label: "Acceptance",
    content: [
      {
        type: "p",
        text: "By purchasing a ticket, registering for, or attending the She Code Africa Summit 2026, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
      },
    ],
  },
];
