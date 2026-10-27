export const profile = {
  name: "Rishit Kohli",
  role: "Software & Mobile Developer",
  tagline: "AI/ML undergraduate building scalable apps, data pipelines and learning systems.",
  summary:
    "CS undergraduate at VIT-AP specializing in AI/ML. Skilled in MERN stack development and data engineering, with experience designing AI-driven scraping pipelines, mobile apps and scalable backend architectures. Leader of cross-functional teams, focused on technical innovation.",
  status: "Building at Datanitiv",
  location: "India",
  email: "krishit40@gmail.com",
  links: {
    github: "https://github.com/rish0018",
    linkedin: "https://www.linkedin.com/in/rishit-kohli-805383282/",
    leetcode: "https://leetcode.com/u/okayrishit/",
    site: "https://rishit-portfolio18.netlify.app/",
    resume: "/Rishit_Kohli_Resume.pdf",
  },
} as const;

export interface Experience {
  title: string;
  org: string;
  period: string;
  kind: "work" | "leadership";
  summary: string;
  details: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Developer + Mobile Developer",
    org: "Datanitiv",
    period: "Jun 2026 – Present",
    kind: "work",
    summary: "Enterprise modules on Angular + .NET, and a ground-up React Native mobile platform.",
    details: [
      "Integrated Angular with .NET backend services, architecting stored procedures and RESTful APIs for high-volume database transactions.",
      "Led the full-stack reconstruction of the mobile platform in React Native and Expo, setting standard patterns across Android and iOS.",
      "Built native-feeling UI with Reanimated transitions and custom global data-loading architecture for consistent state and rendering.",
    ],
  },
  {
    title: "Data Engineer Intern",
    org: "Ambitio",
    period: "May 2025 – Jul 2025",
    kind: "work",
    summary: "Scraping pipelines and a behaviour-based course recommender.",
    details: [
      "Built data scraping pipelines with Selenium, Playwright and APIs, feeding Ambitio's database systems.",
      "Worked with cross-functional teams on a course recommendation system driven by user behaviour.",
      "Implemented scalable scraping that respects data privacy and usage policies.",
      "Optimized SQL queries and database operations for consistency and performance on high-volume data.",
    ],
  },
  {
    title: "Student Head",
    org: "IIEC (Innovation Incubation Entrepreneurship Cell)",
    period: "Jul 2025 – Nov 2025",
    kind: "leadership",
    summary: "Led a 50+ member student organisation.",
    details: [
      "Managed an organisation of 50+ members.",
      "Coordinated large-scale intra-college events and secured high-level government representation.",
    ],
  },
  {
    title: "Lead of Events Team",
    org: "SEDS VIT-AP",
    period: "Feb 2024 – May 2025",
    kind: "leadership",
    summary: "Events, marketing strategy and team management.",
    details: ["Led the events team, with a focus on marketing strategy and team management."],
  },
  {
    title: "Lead of Editorial Bureau",
    org: "Model United Nations Club, VIT-AP",
    period: "Jan 2024 – Apr 2025",
    kind: "leadership",
    summary: "Documentation and web content writing.",
    details: ["Led the Editorial Bureau, focusing on documentation and web content writing."],
  },
];

export const education = [
  {
    school: "VIT-AP University",
    degree: "B.Tech in Computer Science (AI & ML)",
    period: "Sept 2023 – June 2027 (Expected)",
    note: "GPA 8.9 (6th semester)",
    detail:
      "Web Development, DBMS, Software Engineering, UI/UX Design, SQL, Machine Learning, Digital Image Processing, ML & RL.",
  },
  {
    school: "Delhi Public School South, Bengaluru",
    degree: "Physics, Chemistry, Mathematics, Biology",
    period: "2021 – 2023",
    note: "88%",
    detail: "",
  },
] as const;

export type ProjectTier = "flagship" | "featured" | "client" | "more";

export interface Project {
  title: string;
  tier: ProjectTier;
  blurb: string;
  details: string[];
  stack: string[];
  code?: string;
  live?: string;
  period?: string;
}

export const projects: Project[] = [
  {
    title: "AI RTS Tutor",
    tier: "flagship",
    period: "Jan 2026 – Apr 2026",
    blurb: "A human-in-the-loop AI tutor that coaches you through a real-time strategy game.",
    details: [
      "Reframes Q-Learning from a game-playing agent into a real-time instructional system with explainable strategic guidance.",
      "Strategy optimisation modelled as an MDP, with a tabular Q-learning agent reaching 96% decision accuracy.",
      "Dual-process architecture: a tick-based game engine plus a simulation engine that ranks tactical actions by expected cumulative reward.",
    ],
    stack: ["React", "Node.js", "Socket.IO", "Q-Learning"],
    code: "https://github.com/rish0018/RTS",
  },
  {
    title: "Ocean Hazard Reporting Platform",
    tier: "flagship",
    period: "Jul 2025 – Apr 2026",
    blurb: "Hazard reporting with social-media analytics and live risk dashboards.",
    details: [
      "Full-stack hazard reporting platform using TensorFlow for pattern detection.",
      "Interactive risk visualisation dashboards driven by real-time social media analytics.",
      "Shortlisted in the SIH internal innovation round.",
    ],
    stack: ["TensorFlow", "Full-stack", "Analytics"],
  },
  {
    title: "Cappy",
    tier: "featured",
    blurb: "An accessibility-learning platform for Braille, Morse code and ASL.",
    details: [
      "Monorepo spanning a React/Vite web app, an Expo React Native app and an ML training pipeline.",
      "Landmark-based sign recognition trained and evaluated, with TensorFlow.js export in progress.",
      "Supabase for auth, database and edge functions.",
    ],
    stack: ["React", "Expo", "TensorFlow.js", "Supabase", "Turborepo"],
    code: "https://github.com/rish0018/app-cappy",
  },
  {
    title: "Attention-MADDPG",
    tier: "featured",
    blurb: "Multi-agent RL where a critic learns which agents to pay attention to.",
    details: [
      "Extends MADDPG with an attention-based centralised critic for better coordination and scalability.",
      "Trained on the Unity ML-Agents Reacher environment.",
    ],
    stack: ["Python", "Unity ML-Agents"],
    code: "https://github.com/rish0018/attention-maddpg",
  },
  {
    title: "Coal Flow AI",
    tier: "featured",
    blurb: "A proposal submission and review dashboard with authentication.",
    details: ["Pages for sign-in, a dashboard, proposal submission and proposal detail review."],
    stack: ["TypeScript", "React"],
    code: "https://github.com/rish0018/coal-flow-ai",
  },
  {
    title: "Semantic Search System",
    tier: "featured",
    blurb: "Built for the Trademarkia entry-role assignment.",
    details: ["A semantic search system built as an entry-role submission for Trademarkia."],
    stack: ["Python", "Search"],
    code: "https://github.com/rish0018/semantic-search-system",
  },
  {
    title: "Movie Recommendation App",
    tier: "featured",
    blurb: "A Tinder-style swipe interface for movie recommendations.",
    details: ["Swipe-driven recommendation UI built with React and Vite."],
    stack: ["React", "TypeScript", "Vite"],
    code: "https://github.com/rish0018/Movie-Recommendation-app",
  },
  {
    title: "Kshitiz Kohli's Portfolio",
    tier: "client",
    blurb: "Portfolio for Uber's APAC workforce-management leader.",
    details: ["Designed and built a personal portfolio for a strategic workforce leader at Uber."],
    stack: ["TypeScript", "React"],
    code: "https://github.com/rish0018/kshitiz-kohli-portfolio",
    live: "https://kshitiz-kohli.vercel.app/",
  },
  {
<<<<<<< Updated upstream
=======
    title: "Shaswat Kumar's Portfolio",
    tier: "client",
    blurb: "An immersive portfolio for a software engineer, built as a 3D fish tank.",
    details: [
      "Non-linear 3D portfolio: projects, skills, education and contact each live in their own zone of the tank.",
      "Plain non-3D view with the same content, used automatically when WebGL isn't available, plus keyboard navigation and a reduced-motion option.",
      "3D code is lazy loaded; deployed on Netlify with an EmailJS contact form.",
    ],
    stack: ["TypeScript", "React", "three.js", "Vite"],
    code: "https://github.com/rish0018/shaswat-portfolio",
    live: "https://portfolio-shaswat.netlify.app/",
  },
  {
>>>>>>> Stashed changes
    title: "Maison des Compagnes",
    tier: "client",
    blurb: "A website built for a friend's business.",
    details: ["Designed and shipped a live website, deployed on Vercel."],
    stack: ["TypeScript", "React"],
    code: "https://github.com/rish0018/maison-des-compagnes",
    live: "https://maison-des-compagnes.vercel.app/",
  },
  {
    title: "STS MCQ Practice",
    tier: "client",
    blurb: "Feed in a CSV and get a working MCQ practice site.",
    details: ["A site that turns a CSV of questions into an interactive MCQ quiz."],
    stack: ["HTML", "JavaScript"],
    code: "https://github.com/rish0018/STS---2-MCQ-questions-",
    live: "https://sts-2-mcq-questions.vercel.app",
  },
  {
    title: "Chatbot with LangChain",
    tier: "more",
    blurb: "A conversational chatbot using OpenAI APIs and LangChain.",
    details: [],
    stack: ["Python", "LangChain", "OpenAI"],
    code: "https://github.com/rish0018/Chatbot_Langchain",
  },
  {
    title: "Grade Helper",
    tier: "more",
    blurb: "Work out what you need to score in the FAT to hit your target grade at VIT.",
    details: [],
    stack: ["JavaScript"],
    code: "https://github.com/rish0018/GRADE-HELPER",
  },
  {
    title: "Smart Streetlight",
    tier: "more",
    blurb: "IoT streetlight model for smart cities. Top grade in Engineering Clinics.",
    details: [],
    stack: ["C++", "UML", "MATLAB"],
    code: "https://github.com/rish0018/Iot-Based-Smart-Streetlight",
  },
  {
    title: "Gesture Differences Across Cultures",
    tier: "more",
    blurb: "An exploration of how gestures differ across cultures.",
    details: [],
    stack: [],
    code: "https://github.com/rish0018/Gesture-difference-across-cultures",
  },
  {
    title: "AI / ML Projects",
    tier: "more",
    blurb: "A collection of machine-learning projects.",
    details: [],
    stack: ["Python", "scikit-learn", "Pandas"],
    code: "https://github.com/rish0018/AI-ML-projects",
  },
  {
    title: "OpenCV Projects",
    tier: "more",
    blurb: "Computer-vision experiments with OpenCV.",
    details: [],
    stack: ["Python", "OpenCV"],
    code: "https://github.com/rish0018/Open-CV-Based-Projects",
  },
  {
    title: "Chrome Games",
    tier: "more",
    blurb: "Flappy Bird and the Chrome dino, controlled without a keyboard via TensorFlow.",
    details: [],
    stack: ["JavaScript", "TensorFlow"],
    code: "https://github.com/rish0018/Chrome-Games",
    live: "https://chrome-games.netlify.app/",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java", "C/C++", "SQL", "JavaScript"] },
  {
    title: "Data Engineering",
    items: ["Data Extraction", "Web Scraping", "Selenium", "Playwright", "API Integration", "Database Management", "ETL", "Data Transformation"],
  },
  {
    title: "ML / AI",
    items: ["Deep Learning", "NumPy", "Pandas", "Recommendation Systems", "OpenCV", "LangChain"],
  },
  { title: "Full Stack & Frontend", items: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"] },
  { title: "Mobile & Enterprise", items: ["React Native", "Expo", "Reanimated", "Angular", ".NET", "Stored Procedures"] },
  { title: "Cloud & Other", items: ["AWS", "Quantum Computing", "Event Leadership", "Technical & Creative Writing"] },
] as const;

export const certifications = [
  { title: "IBM AI Engineering Professional Certificate", note: "" },
  { title: "MERN Full Stack Developer", note: "BlackBucks" },
  { title: "Quantum Computing Certification", note: "Top 3000 in India" },
] as const;

export const languages = ["English", "Hindi", "French (basic)"] as const;
