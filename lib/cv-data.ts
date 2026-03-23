// All CV data as typed constants

export const PERSONAL = {
  name: "Andrea M. Bravo Ojeda",
  email: "andrea.m.bravo.ojeda@gmail.com",
  phone: "+34 60 70 82 22 7",
  linkedin: "https://linkedin.com/in/andrea-bravo-ojeda",
  location: "Barcelona, Spain  /  Gatineau, QC, Canada",
  taglines: [
    "International Business Strategist",
    "Digital Marketing & AI Specialist",
    "Trade Mission Leader",
    "Trilingual Professional",
  ],
  bio: `Andrea M. Bravo Ojeda is a trilingual international business professional blending analytical rigor with creative strategy. Currently pursuing a dual MBA in Global Business at Université Laval and an MSc in Digital Marketing & Analytics at TBS Education in Barcelona, she brings 4+ years of progressive experience at Employment and Social Development Canada alongside leadership in two landmark trade missions across three continents. Andrea's work bridges the worlds of AI, data analytics, organizational learning, and global commerce — all delivered in English, French, and Spanish.`,
};

export const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Languages" },
  { value: "2", label: "Trade Missions Led" },
  { value: "5", label: "Countries" },
];

export const SKILL_GROUPS: { category: string; skills: string[] }[] = [
  {
    category: "AI & Data",
    skills: ["Python", "R", "Tableau", "Power BI", "Excel", "SAP", "PeopleSoft"],
  },
  {
    category: "Digital Marketing",
    skills: ["SEO/SEM", "CRM Systems", "Google Analytics", "Canva", "Content Strategy", "Email Marketing"],
  },
  {
    category: "Leadership & Management",
    skills: ["L&D Program Design", "Stakeholder Management", "Team Leadership", "Project Management"],
  },
  {
    category: "International Business",
    skills: ["Trade Mission Management", "B2B Negotiations", "Market Entry", "Cross-cultural Communication"],
  },
];

export const SOFT_SKILLS: { label: string; value: number }[] = [
  { label: "Leadership", value: 92 },
  { label: "Communication", value: 96 },
  { label: "Strategic Thinking", value: 90 },
  { label: "Cross-cultural Collaboration", value: 94 },
  { label: "Project Management", value: 88 },
  { label: "Problem Solving", value: 91 },
];

export const HARD_TOOLS: { name: string; icon: string }[] = [
  { name: "Python", icon: "🐍" },
  { name: "R", icon: "📊" },
  { name: "Tableau", icon: "📈" },
  { name: "Power BI", icon: "⚡" },
  { name: "Excel", icon: "📗" },
  { name: "SAP", icon: "🏢" },
  { name: "PeopleSoft", icon: "👥" },
  { name: "Canva", icon: "🎨" },
  { name: "MS Office", icon: "💼" },
  { name: "CRM Systems", icon: "🔗" },
];

export const LANGUAGES: { lang: string; level: string; value: number }[] = [
  { lang: "English", level: "Native", value: 100 },
  { lang: "French", level: "Native", value: 100 },
  { lang: "Spanish", level: "Professional", value: 85 },
];

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  initial: string;
  color: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "esdc-lnd",
    role: "Learning & Development Program Advisor",
    company: "Employment and Social Development Canada (ESDC)",
    period: "Jan 2025 – Aug 2025",
    initial: "E",
    color: "#C9A84C",
    bullets: [
      "Designed and delivered comprehensive L&D programs for 200+ federal employees across multiple directorates",
      "Developed data-driven training needs analyses using HR analytics tools and engagement surveys",
      "Collaborated with senior managers to align learning initiatives with departmental strategic priorities",
    ],
  },
  {
    id: "laval-ta",
    role: "Graduate Teaching Assistant",
    company: "Université Laval",
    period: "Jan 2025 – Present",
    initial: "U",
    color: "#8A9E85",
    bullets: [
      "Supported MBA faculty in delivering international business and marketing curriculum to 80+ graduate students",
      "Developed supplemental course materials integrating AI tools and real-world case studies",
      "Provided academic coaching and evaluation support for business strategy simulations",
    ],
  },
  {
    id: "mcul-coordinator",
    role: "Corporate Relations Coordinator",
    company: "MCUL — Mexico Trade Mission",
    period: "Jul 2023 – Jun 2024",
    initial: "M",
    color: "#C9A84C",
    bullets: [
      "Coordinated corporate partnerships and B2B matchmaking for 30+ Canadian SMEs entering the Mexican market",
      "Managed relationships with IPADE Business School and local chambers of commerce in Mexico City",
      "Produced post-mission analytics reports measuring trade outcomes and ROI for participating companies",
    ],
  },
  {
    id: "esdc-hrfinance",
    role: "Financial Services & HR Officer",
    company: "Employment and Social Development Canada (ESDC)",
    period: "Mar 2021 – Dec 2024",
    initial: "E",
    color: "#8A9E85",
    bullets: [
      "Processed HR and financial transactions using SAP and PeopleSoft for a team of 500+ employees",
      "Streamlined payroll and benefits administration workflows, reducing processing time by 20%",
      "Served as bilingual (EN/FR) liaison between employees and management on policy and compensation matters",
    ],
  },
  {
    id: "laval-trade",
    role: "International Trade Agent",
    company: "Benelux Trade Mission — Université Laval",
    period: "Oct 2021 – Jun 2022",
    initial: "B",
    color: "#C9A84C",
    bullets: [
      "Represented Canadian SMEs at trade missions in Brussels, Amsterdam, and Luxembourg",
      "Facilitated 40+ B2B meetings between Canadian and European business leaders and government officials",
      "Prepared detailed market entry briefings and sector analyses for agri-food, tech, and cleantech industries",
    ],
  },
];

export interface TradeMission {
  id: string;
  flag: string;
  name: string;
  route: string;
  year: string;
  tagline: string;
  details: string;
  achievements: string[];
}

export const TRADE_MISSIONS: TradeMission[] = [
  {
    id: "mexico",
    flag: "🇲🇽",
    name: "Mexico Trade Mission",
    route: "Montreal → Mexico City",
    year: "2023 – 2024",
    tagline: "IPADE Business School · MCUL",
    details:
      "As Corporate Relations Coordinator for the Mexico Trade Mission, Andrea built a bridge between Canadian and Mexican business ecosystems. Partnering with IPADE Business School — one of Mexico's top MBA institutions — she orchestrated executive-level meetings, B2B networking events, and capacity-building workshops that opened new market opportunities for 30+ Canadian firms.",
    achievements: [
      "Managed corporate partnerships for 30+ Canadian SMEs",
      "Organized B2B networking events with Mexican executives",
      "Produced trade outcome analytics reports with measurable ROI",
    ],
  },
  {
    id: "benelux",
    flag: "🇧🇪",
    name: "Benelux Trade Mission",
    route: "Montreal → Brussels · Amsterdam · Luxembourg",
    year: "2021 – 2022",
    tagline: "Université Laval — Faculty of Business",
    details:
      "Representing Université Laval's Faculty of Business, Andrea traveled across Belgium, the Netherlands, and Luxembourg facilitating high-impact trade meetings. She prepared sector briefings for agri-food, clean tech, and technology industries, enabling Canadian SMEs to forge lasting EU partnerships.",
    achievements: [
      "Facilitated 40+ B2B meetings across three European capitals",
      "Prepared market entry briefs for agri-food, tech, and cleantech",
      "Represented Canadian SMEs at EU government and chamber meetings",
    ],
  },
];

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    id: "mba",
    degree: "MBA Global Business",
    institution: "Université Laval",
    period: "2024 – 2027 (Expected)",
    highlights: [
      "Concentration in international strategy and digital transformation",
      "Graduate Teaching Assistantship in International Business",
    ],
  },
  {
    id: "msc",
    degree: "MSc Digital Marketing & Analytics",
    institution: "TBS Education — Barcelona",
    period: "2024 – 2027 (Expected)",
    highlights: [
      "Dual-degree partnership with Université Laval",
      "Coursework in AI marketing, data analytics, and consumer behavior",
    ],
  },
  {
    id: "bba",
    degree: "BBA International Management",
    institution: "Université Laval",
    period: "2020 – 2024",
    highlights: [
      "International exchange semester in Europe",
      "Capstone project on market entry strategy for North American SMEs",
    ],
  },
];

export const CHATBOT_SYSTEM_PROMPT = `You are Andrea's intelligent portfolio assistant. You answer questions about Andrea M. Bravo Ojeda's professional background, skills, experience, education, and trade missions — acting both as a recruiter screening tool and as a showcase of Andrea's AI capabilities. You are warm, professional, trilingual (respond in the language the visitor uses), and concise. Key facts: Andrea is trilingual (EN/FR/ES), holds an MBA and MSc in Digital Marketing, has led trade missions to Mexico and Benelux, has 4+ years at Employment and Social Development Canada, and is currently based in Barcelona studying at TBS Education. If asked about projects or portfolio work, highlight her trade mission leadership, L&D program design, and data analytics skills. Always end responses with a relevant follow-up suggestion.`;

export const CHATBOT_SUGGESTIONS = [
  "What are Andrea's top skills?",
  "Tell me about her trade missions",
  "Is she open to new roles?",
  "What languages does she speak?",
];
