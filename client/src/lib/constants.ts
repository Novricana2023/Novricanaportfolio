export const LINKS = {
  email: "mailto:nlungu@usiu.ac.ke",
  emailSecondary: "mailto:novielungu@gmail.com",
  linkedin: "https://linkedin.com/in/novricana-viola-lungu-b5607212",
  github: "https://github.com/Novricana2023",
  medium: "https://medium.com/@novielungu",
  healingTech: "https://www.linkedin.com/company/104324730/",
  phone: "tel:+254790355947",
} as const;

export const TECH_STACK = {
  languages: ["Python", "JavaScript", "TypeScript", "C#"],
  webSystems: ["React", "Node.js", "Express", "ASP.NET", "REST APIs"],
  ai: [
    "AI Models",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "YOLOv8",
    "Streamlit",
    "Hugging Face",
  ],
  platforms: ["Azure", "Vercel"],
} as const;

export const TECH_STACK_SECTIONS = [
  { label: "Languages", items: TECH_STACK.languages },
  { label: "Web & Systems", items: TECH_STACK.webSystems },
  { label: "AI & ML", items: TECH_STACK.ai },
  { label: "Cloud & Deploy", items: TECH_STACK.platforms },
] as const;

export const HERO_SKILL_BADGES = [
  "Python · JavaScript · Web Systems",
  "React · Node.js · ASP.NET",
  "AI Models · NLP · YOLOv8",
] as const;

export const PROFILE = {
  name: "Novricana Viola Lungu",
  shortName: "Novricana",
  role: "Software Engineer · Full-Stack & AI",
  title:
    "Full-Stack Developer · AI Model Builder · Digital Trainer · Tech-for-Impact Leader",
  summary:
    "I'm an innovative builder who gets genuinely excited about creating systems that change lives. I work in Python and JavaScript, ship web systems with React, Node.js, and ASP.NET, and build AI models across natural language processing, computer vision, and YOLOv8. Digital trainer at heart. Tech for everyone. AI for us all. I design inclusive platforms for health and accessibility, from Smart Vision AI helping visually impaired users navigate, to Umoyo AI supporting women's PCOS health, to diabetes risk tools that put prevention within reach. I built Maphunziro to bring digital learning to Malawi, where manual education still dominates classrooms. Writer, inspiring tech researcher, and founder of HealingTech Initiative. Still reading? The work below is worth it.",
} as const;

export const HEALINGTECH = {
  name: "HealingTech Initiative",
  tagline: "Technology. Inclusion. Empowerment.",
  short:
    "An initiative I founded supporting youth and children from underserved communities through digital training, accessible technology, capacity building, and mental health and wellbeing programs.",
  description:
    "HealingTech Initiative is my social impact platform reaching youth and children in underserved communities. We deliver digital training and coding programs, build accessible technology pathways, run capacity-building workshops, and support mental health and wellbeing. Because bridging the digital gap means caring for the whole person, not just the screen.",
  digitalTraining:
    "As a digital trainer, I design and deliver AI workshops, coding bootcamps, and digital literacy sessions across East Africa and Malawi. I help learners go from curious to confident, building skills that open real doors in tech and beyond.",
} as const;
