export interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  link: string;
  tags: string[];
  featured: boolean;
  image: string;
  isAiHosted?: boolean;
}

export const AI_SLEEP_NOTE =
  "Some AI demos run on free hosting and may sleep when inactive. If a project does not load right away, refresh the page or click Restart. It usually wakes up within a minute.";

/** Add new portfolio projects to this array. */
export const projects: Project[] = [
  {
    title: "Umoyo AI",
    category: "AI Healthcare",
    description:
      "An AI-powered PCOS support platform giving women accessible health education, symptom guidance, and personalized wellness support. Inclusive women's health tech that makes sensitive conversations feel safe, private, and human.",
    impact: "Inclusive women's health through responsible AI",
    link: "https://pcos-fixed-support-2kzdwnkx2nqmemrrsmgcnm.streamlit.app/",
    tags: ["AI", "Healthcare", "NLP", "Inclusivity", "Streamlit"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80",
    isAiHosted: true,
  },
  {
    title: "Smart Vision AI",
    category: "Computer Vision",
    description:
      "A YOLOv8 computer vision app that helps visually impaired users identify objects and navigate independently. Built for inclusivity: AI that sees the world so more people can move through it with confidence.",
    impact: "Accessibility and inclusive navigation",
    link: "https://huggingface.co/spaces/Novricana25/smart-visiom",
    tags: ["Computer Vision", "YOLOv8", "Accessibility", "Inclusivity"],
    featured: false,
    image: "/images/projects/smart-vision-ai.jpg",
    isAiHosted: true,
  },
  {
    title: "Resume Optimizer AI",
    category: "NLP, Career Tech",
    description:
      "An NLP tool that evaluates resumes and delivers intelligent recommendations to improve employability. Helping job seekers present their skills with clarity and confidence.",
    impact: "Workforce readiness and career empowerment",
    link: "https://huggingface.co/spaces/Novricana25/AIResumeOptimiser",
    tags: ["NLP", "Career Tech", "AI", "Hugging Face"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&q=80",
    isAiHosted: true,
  },
  {
    title: "Ifadhi Wildlife Monitoring",
    category: "Web & Conservation",
    description:
      "A digital conservation platform tracking animal distribution and park capacity. Data-driven tools supporting sustainable wildlife management and environmental impact.",
    impact: "Conservation tech for social and environmental good",
    link: "https://mara-htp9.vercel.app/",
    tags: ["Conservation", "Web", "Data Visualization"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Diabetes Risk Predictor",
    category: "AI Healthcare",
    description:
      "An AI health risk tool raising awareness and encouraging preventive care through accessible, data-informed predictions. Health tech designed to reach communities early, not after the fact.",
    impact: "Preventive healthcare and inclusive health awareness",
    link: "https://diabetes-risk-predictor-hlovjcbfsiutqskdra2xoj.streamlit.app/",
    tags: ["AI", "Healthcare", "Inclusivity", "Streamlit"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
    isAiHosted: true,
  },
  {
    title: "Bridal Soiree",
    category: "E-Commerce, Web",
    description:
      "A modern event and bridal services web app improving digital engagement, online visibility, and customer experience for small businesses.",
    impact: "Business digitization and digital presence",
    link: "https://bridal-soiree-git-main-novricana-s-projects.vercel.app/",
    tags: ["Web", "E-Commerce", "React"],
    featured: false,
    image: "/images/projects/bridal-soiree.jpg",
  },
];
