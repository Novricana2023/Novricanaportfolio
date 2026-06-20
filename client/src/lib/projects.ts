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
    title: "Dela Langa",
    category: "Community Development Management System",
    description:
      "A full-stack digital governance platform I built for developing nations, strengthening citizen participation and district-level government accountability. Citizens report community issues like road damage, water shortages, flooding, and infrastructure failures, while the District Commissioner's Office manages, prioritizes, and resolves them through an analytics dashboard with real-time tracking, email alerts, public transparency, smart urgency detection, map hotspots, and a full audit trail. Built with Next.js, FastAPI, and PostgreSQL, it gives communities in places like Malawi a trusted way to engage government and turn citizen voices into faster, measurable local development outcomes.",
    impact: "Digital governance and accountable community development",
    link: "https://dela-langa-web.onrender.com/",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Governance", "Malawi"],
    featured: false,
    image: "/images/projects/dela-langa.jpg",
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
    title: "Malawi Tobacco AI",
    category: "AI Agriculture, Malawi",
    description:
      "Bilingual (English/Chichewa) smart assistant for Malawi's smallholder tobacco farmers: early disease detection and support, soil and weather guidance, and practical tools to reduce crop loss and improve yields.",
    impact: "Smarter farming support for Malawi's smallholder growers",
    link: "https://malawi-tobacco-ai-hzujlskfcztgypnxxxnvrq.streamlit.app/",
    tags: ["AI", "Agriculture", "Malawi", "Streamlit", "NLP"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop&q=80",
    isAiHosted: true,
  },
];
