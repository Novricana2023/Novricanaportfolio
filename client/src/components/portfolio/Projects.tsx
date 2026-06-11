import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * Projects Section Component
 * Design: Featured project + grid of project cards
 * Features: Project links, impact statements, professional presentation
 */

const projects = [
  {
    title: "UMOYO AI",
    description: "An AI-powered PCOS support platform that provides accessible health education, emotional support, symptom guidance, wellness recommendations, cycle awareness, mood tracking insights, risk awareness, and personalized lifestyle guidance through conversational AI.",
    impact: "Supporting women's health through accessible digital innovation",
    link: "https://pcos-fixed-support-2kzdwnkx2nqmemrrsmgcnm.streamlit.app/",
    featured: true,
    tags: ["AI", "Healthcare", "Accessibility"]
  },
  {
    title: "Smart Vision AI",
    description: "A computer vision application developed using YOLOv8 to assist visually impaired users by identifying surrounding objects and improving independent navigation.",
    impact: "Accessibility and inclusive technology",
    link: "https://huggingface.co/spaces/Novricana25/smart-visiom",
    featured: false,
    tags: ["Computer Vision", "Accessibility", "AI"]
  },
  {
    title: "Diabetes Risk Predictor",
    description: "An AI-powered health risk assessment tool designed to increase awareness and encourage preventive healthcare practices.",
    impact: "Preventive healthcare and health awareness",
    link: "https://diabetes-risk-predictor-hlovjcbfsiutqskdra2xoj.streamlit.app/",
    featured: false,
    tags: ["AI", "Healthcare", "Prediction"]
  },
  {
    title: "Resume Optimizer AI",
    description: "An AI application that evaluates resumes and provides intelligent recommendations to improve employability and career readiness.",
    impact: "Career development and workforce readiness",
    link: "https://huggingface.co/spaces/Novricana25/AIResumeOptimiser",
    featured: false,
    tags: ["NLP", "Career Tech", "AI"]
  },
  {
    title: "Ifadhi Wildlife Monitoring",
    description: "A digital conservation platform designed to monitor wildlife distribution and park capacity to support sustainable conservation efforts.",
    impact: "Environmental sustainability",
    link: "https://mara-htp9.vercel.app/",
    featured: false,
    tags: ["Conservation", "Web", "Data"]
  },
  {
    title: "Maphunziro ERP",
    description: "A learning management platform inspired by modern educational systems that supports digital learning delivery and academic management.",
    impact: "Education technology and digital learning",
    link: "https://maphunziroblackboardweb20260521160347-e8fed0dpgyfac9eu.southafricanorth-01.azurewebsites.net",
    featured: false,
    tags: ["EdTech", "Web", "Platform"]
  },
  {
    title: "Bridal Soiree",
    description: "A modern event and bridal services web application designed to improve digital engagement and online business visibility.",
    impact: "Business digitization",
    link: "https://bridal-soiree-git-main-novricana-s-projects.vercel.app/",
    featured: false,
    tags: ["Web", "E-Commerce", "Business"]
  }
];

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            AI-powered solutions and digital platforms creating real-world impact
          </p>
          <p className="text-sm text-foreground/50 mt-4 italic">
            Note: Some AI applications may enter sleep mode when inactive. If a project does not load immediately, please allow a few moments for the service to wake up.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border-2 border-accent/20 rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
              <div className="mb-4 inline-block">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-lg font-semibold text-accent">
                  {featuredProject.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
              >
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  Explore Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both"
              }}
            >
              <div className="h-full bg-white border border-blue-100 rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-8 bg-accent rounded-full" />
                  <p className="text-sm font-semibold text-accent">
                    {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="text-accent hover:text-accent/80 font-semibold self-start"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
