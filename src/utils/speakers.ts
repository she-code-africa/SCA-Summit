import adesuwa from "../assets/speaker/speakers/adesuwa.png";
import dami from "../assets/speaker/speakers/damiT.png";
import damiO from "../assets/speaker/speakers/damiO.png";
import adeife from "../assets/speaker/speakers/adeife.png";
import ada from "../assets/speaker/speakers/ada.png";
import favourO from "../assets/speaker/speakers/favourO.png";
import rachel from "../assets/speaker/speakers/rachel.png";
import ijAdesanya from "../assets/speaker/speakers/ij-adesanya.png";
import napa from "../assets/speaker/speakers/napa.png";
import conoja from "../assets/speaker/speakers/conoja.png";
import oreoluwa from "../assets/speaker/speakers/oreoluwa.png";
import zuzka from "../assets/speaker/speakers/zuzka.png";
import chisom from "../assets/speaker/speakers/chisomN.png";
import olivia from "../assets/speaker/speakers/olivia.png";
import olaniyi from "../assets/speaker/speakers/olaniyi.png";
import perp from "../assets/speaker/speakers/perp.png";
import mary from "../assets/speaker/speakers/mary.png";

export type SpeakerCategory = "keynote-speakers" | "panelists" | "facilitators";

export const speakersTab: { key: string; label: string }[] = [
  { key: "all", label: "All Speakers" },
  { key: "keynote-speakers", label: "Keynote Speakers" },
  { key: "panelists", label: "Panelists" },
  { key: "facilitators", label: "Facilitators" },
  { key: "impact-speaker", label: "Impact Speakers" },
];

export const speakers = [
  {
    id: "keynote-1",
    name: "Ada Nduka Oyom",
    title: "Founder & Executive Director, She Code Africa",
    bio: [
      "Ada Nduka Oyom is the visionary founder and Executive Director of She Code Africa, a pan-African nonprofit that has impacted over 65,000 women across the continent.",
      "With over a decade of experience, her expertise extends beyond non-profit leadership. Ada has built and scaled initiatives that reached over 500,000 developers across EMEA, securing six-figure investments and forging strategic partnerships with global brands like Google, HP, and FedEx. She also co-founded Open Source Community Africa, now home to over 5,000 contributors, and serves as a Non-executive director on a U.S. non-profit board shaping AI ethics and policy.",
      "Her transformative work has been recognized by Forbes, the African Union, Google, and UNICEF Nigeria, among others.",
    ],
    image: ada,
    category: "keynote-speakers",
    bg: "#FFFDDE",
  },
  {
    id: "keynote-2",
    name: "Napa Onwusah",
    title: "Managing Partner, B4B Partners",
    bio: [
      "Napa Onwusah is a Revenue and Leadership Strategist with over 25 years of experience driving commercial growth across Africa, the Middle East, and Europe. Her corporate career spans the technology industry's most influential companies. At Amazon Web Services, she led a 20+ person startup team across 66 countries — the only region in EMEA to meet and exceed targets, delivering 39% year-on-year growth and pioneering the first AWS Fintech Accelerator in Africa.",
    ],
    image: napa,
    category: "keynote-speakers",
    bg: "#F8EAFF",
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
    name: "Rachel Onoja",
    title: "VP of Learning & Market Dev, ChipMango",
    bio: [
      " Rachael Onoja is VP of Learning & Market Development at ChipMango, where she leads talent and market strategy at the intersection of technology, workforce development, and Africa's growing digital economy. Over the past decade, she has designed learning, talent development, and career growth programmes across organisations including AltSchool Africa, Andela, Decagon and European consulates, working close to the frontlines of how Africa builds, trains, and retains the talent powering its digital infrastructure. ",
    ],
    image: rachel,
    category: "panelists",
    bg: "#FFFDDE",
  },
  {
    id: "panelist-4",
    name: "Damilola Olokesusi",
    title: "CEO / Co-Founder, Shuttlers",
    bio: [
      "Damilola Olokesusi is the Co-founder and CEO of Shuttlers, Nigeria's leading technology-driven shared mobility startup. With a bachelor's degree in Chemical Engineering from the University of Lagos, Damilola brings extensive experience in Process Engineering to her role. Her passion for addressing socio-economic challenges in her community led to the founding of Shuttlers, a company dedicated to transforming urban mobility.",
    ],
    image: damiO,
    category: "panelists",
    bg: "#F8EAFF",
  },
  {
    id: "panelist-5",
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
    id: "panelist-6",
    name: "Zuzka Pelechova",
    title: " Head of Apify Store",
    bio: [
      "Zuzka Pelechová is Head of Apify Store, the largest marketplace of trusted tools for AI, where she has shaped the product since 2019. She looks after the ecosystem end to end: helping thousands of developers publish, monetize, and grow their Actors, and making sure the tools that power AI agents and automation workflows are reliable and easy to use. Before tech, Zuzka spent a decade in Czech politics, then retrained through Czechitas, a non-profit bringing women into IT. She builds and publishes her own Actors and is a familiar face in the Apify community.",
    ],
    image: zuzka,
    category: "panelists",
    bg: "#FFB8E0",
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
  {
    id: "facilitator-2",
    name: "Ijeoma Adesanya",
    title: "Executive Director, Kobikam Africa",
    bio: [
      'Ijeoma Adesanya is the founder of Kobikam Africa, a gender advisory and advocacy consultancy that specialises in providing companies with the tools needed to foster a more gender-inclusive workplace. Driven by a strong need to advocate for women, she founded the company to create bias-free workplaces across Africa. Kobikam Africa creates a level playing field for women to excel by providing clients with gender advisory services such as gender strategy for private-sector organisations, participatory gender audits, unconscious bias training for senior management, and "back-to-work" training for mothers after maternity leave.',
    ],
    image: ijAdesanya,
    category: "facilitators",
    bg: "#FFEAF6",
  },
  {
    id: "facilitator-3",
    name: "Christiana Onoja",
    title: "Cofounder/CEO, Shecode.ai",
    bio: [
      "Christiana Ojonugwa Onoja is a technology strategist and AI/ML integrator specializing in human-AI collaboration in Africa. She drives ethical, scalable, and people-centered digital transformation at the intersection of emerging technology, governance, and inclusive innovation. As CEO and Co-Founder of SheCode.ai, she builds AI-powered platforms that enable women to lead in the digital economy. She also serves as Founder and Executive Director of the PAWA Initiative, where she advances gender inclusion in STEM across Africa. Christiana has over a decade of experience advising the oil & gas, financial services, FMCG, and telecoms sectors on AI integration and digital strategy.",
    ],
    image: conoja,
    category: "facilitators",
    bg: "#FFFDDE",
  },
  {
    id: "impact-6",
    name: "Oreoluwa Adetula",
    title: "Programs Manager, She Code Africa",
    bio: [
      "Oreoluwa Adetula is a Programs and Project Management professional with over four years of experience designing, managing, and scaling high-impact education, technology, advocacy, and social impact initiatives across Africa.",
      "With a background in Psychology and certifications in Project and Product Management, she blends strategic program design, stakeholder engagement, and community building to create opportunities that drive both gender equity and digital transformation.",
    ],
    image: oreoluwa,
    category: "impact-speaker",
    bg: "#FFEAF6",
  },
  {
    id: "impact-1",
    name: "Chisom Nwachukwu",
    title: "Mobile App Developer",
    bio: [
      "Chisom Nwachukwu is a mobile app developer and a final-year Electronics and Computer Engineering student at Lagos State University. She is proficient in Flutter and Dart, using her technical skills to build impactful digital solutions. Chisom is the co-developer of Nezay, a pioneering fintech mobile app that enables users to convert Naira to cryptocurrency, pay bills, make seamless transfers, and redeem gift cards for cash. Currently, she is an intern at the Nigerian Bottling Company (Coca-Cola), where she applies her expertise to develop an internal application and is expanding her skill set by learning data analytics.",
    ],
    image: chisom,
    category: "impact-speaker",
    bg: "#FFB8E0",
  },
  {
    id: "impact-2",
    name: "Olivia Ekwuyasi",
    title: "Product Manager & Founder, Yachdahv",
    bio: [
      "Olivia Ekwuyasi is a product manager and founder passionate about building products that meet real user needs and create meaningful value. With a background in mass communication and six years of experience in sales and business development, she has developed strong expertise in customer communication, relationship management, business strategy, and partnership engagement. Olivia transitioned into technology and product management in 2025 and currently works as a product manager at OvanaHealth, a healthtech startup focused on improving health outcomes through technology. In her role, she works across product discovery, research, strategy, user experience, and product development to turn real-world problems into practical digital solutions.",
    ],
    image: olivia,
    category: "impact-speaker",
    bg: "#FFEAF6",
  },
  {
    id: "impact-3",
    name: "Olaniyi Olanike Gift",
    title: "Machine Learning Engineer",
    bio: [
      'Olaniyi Olanike Gift is a Computer Engineering student at Obafemi Awolowo University and a Machine Learning Engineer Intern at FlyRank AI, where she focuses on building and fine-tuning predictive models and working with Retrieval-Augmented Generation (RAG) and LLM frameworks. Her technical portfolio includes impactful machine learning projects, most notably her widely recognized "crop-recommendation-ml" model designed for precision agriculture, alongside "end-to-end predictive web pipelines" and MLflow experiment tracking. Olanike holds certifications in AI Fundamentals and RAG Systems. Beyond development, she is a dedicated STEM volunteer and active leader across IEEE Women in Engineering OAU, She Code Africa OAU, Google Developers Group OAU, and the WAAW Foundation OAU, driving technical outreach and community growth.',
    ],
    image: olaniyi,
    category: "impact-speaker",
    bg: "#FFFDDE",
  },
  {
    id: "impact-4",
    name: "Mbaoma Mary",
    title: "Cloud Engineer",
    bio: [
      "Mbaoma Mary is a Cloud/DevOps professional with over five years of experience across cloud infrastructure, site reliability engineering, platform engineering, CI/CD, and developer productivity. Beyond her technical career, Oma is the brain behind Taru, an Ayurvedic hair care brand focused on helping individuals build confidence through intentional self-care and healthy hair routines. Through her work with Taru, she combines technology, storytelling, and community-building to create meaningful experiences for customers.",
    ],
    image: mary,
    category: "impact-speaker",
    bg: "#FFEAF6",
  },
  {
    id: "impact-5",
    name: "Perpetual Meninwa",
    title: "Founder, Creator and MBA Student",
    bio: [
      "Perpetual Meninwa is a software engineer, technology educator, and community advocate passionate about using technology to create meaningful impact and making the tech ecosystem more inclusive and accessible. Her journey in technology spans software development, mentorship, and continuous learning, with a focus on building digital solutions and helping others grow their skills and confidence in tech. She has experience across backend and full-stack development and has worked with technologies including JavaScript, TypeScript, Node.js, React, Next.js, databases, and cloud technologies",
    ],
    image: perp,
    category: "impact-speaker",
    bg: "#F5FFDE",
  },
];
