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
  role: "Innovator · Full-Stack Developer · Tech-for-Impact Leader",
  title:
    "Full-Stack Developer · AI Model Builder · HealingTech Founder · Digital Trainer",
  summary:
    "I'm an innovative leader and full-stack developer who builds AI models and web systems for real-world impact. Python, JavaScript, React, and Node.js on the engineering side; natural language processing, computer vision, and applied machine learning where communities need them most. I founded HealingTech Initiative to support youth and children in underserved communities through digital training, accessible technology, capacity building, and mental health and wellbeing programs. My work focuses on tech for impact across health, agriculture, climate, and accessibility, because innovation should change lives, not just look good on a screen. Tech for everyone. AI for us all. Writer, inspiring tech researcher, digital trainer, and genuinely glad for meaningful volunteering opportunities. The projects below show what that commitment looks like in practice.",
} as const;

export const HEALINGTECH = {
  name: "HealingTech Initiative",
  tagline: "Technology. Inclusion. Empowerment.",
  founderLine:
    "An initiative I founded to support youth and children in underserved communities through digital training, accessible technology, capacity building, and mental health and wellbeing programs.",
  short:
    "An initiative I founded supporting youth and children from underserved communities through digital training, accessible technology, capacity building, and mental health and wellbeing programs.",
  description:
    "HealingTech Initiative reaches youth and children in underserved communities. We deliver digital training and coding programs, build accessible technology pathways, run capacity-building workshops, and support mental health and wellbeing. Because bridging the digital gap means caring for the whole person, not just the screen.",
  digitalTraining:
    "As a digital trainer, I design and deliver AI workshops, coding bootcamps, and digital literacy sessions across East Africa and Malawi. I help learners go from curious to confident, building skills that open real doors in tech and beyond.",
  volunteering:
    "I'm genuinely glad for meaningful volunteering opportunities — through HealingTech and community programs alike. Mentorship, digital training support, workshop facilitation, wellness program help, and tech-for-good collaborations are all welcome. If you want to give time where it counts, I'd love to hear from you.",
} as const;
