import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Projects Page
 * Design: Dedicated page showcasing all AI and software projects
 */

const projects = [
  {
    title: "UMOYO AI",
    category: "AI Healthcare",
    description: "An AI-powered PCOS support platform providing accessible health education, emotional support, symptom guidance, wellness recommendations, cycle awareness, mood tracking insights, and personalized lifestyle guidance through conversational AI.",
    impact: "Supporting women's health through accessible digital innovation",
    link: "https://pcos-fixed-support-2kzdwnkx2nqmemrrsmgcnm.streamlit.app/",
    tags: ["AI", "Healthcare", "Accessibility", "NLP", "Streamlit"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  {
    title: "Smart Vision AI",
    category: "Computer Vision",
    description: "A computer vision application developed using YOLOv8 to assist visually impaired users by identifying surrounding objects and improving independent navigation.",
    impact: "Accessibility and inclusive technology",
    link: "https://huggingface.co/spaces/Novricana25/smart-visiom",
    tags: ["Computer Vision", "YOLOv8", "Accessibility", "AI"],
    featured: false,
    image: "https://images.unsplash.com/photo-1559163853-98f3a1416f1d?w=800&q=80"
  },
  {
    title: "Diabetes Risk Predictor",
    category: "AI Healthcare",
    description: "An AI-powered health risk assessment tool designed to increase awareness and encourage preventive healthcare practices.",
    impact: "Preventive healthcare and health awareness",
    link: "https://diabetes-risk-predictor-hlovjcbfsiutqskdra2xoj.streamlit.app/",
    tags: ["AI", "Healthcare", "Prediction", "Streamlit"],
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    title: "Resume Optimizer AI",
    category: "NLP",
    description: "An AI application that evaluates resumes and provides intelligent recommendations to improve employability and career readiness.",
    impact: "Career development and workforce readiness",
    link: "https://huggingface.co/spaces/Novricana25/AIResumeOptimiser",
    tags: ["NLP", "Career Tech", "AI"],
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    title: "Ifadhi Wildlife Monitoring",
    category: "Web & Data",
    description: "A digital conservation platform designed to monitor wildlife distribution and park capacity to support sustainable conservation efforts.",
    impact: "Environmental sustainability",
    link: "https://mara-htp9.vercel.app/",
    tags: ["Conservation", "Web", "Data Visualization"],
    featured: false,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
  },
  {
    title: "Maphunziro ERP",
    category: "EdTech",
    description: "A learning management platform inspired by modern educational systems that supports digital learning delivery and academic management.",
    impact: "Education technology and digital learning",
    link: "https://maphunziroblackboardweb20260521160347-e8fed0dpgyfac9eu.southafricanorth-01.azurewebsites.net",
    tags: ["EdTech", "Web", "Platform", "Azure"],
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    title: "Bridal Soiree",
    category: "E-Commerce",
    description: "A modern event and bridal services web application designed to improve digital engagement and online business visibility.",
    impact: "Business digitization",
    link: "https://bridal-soiree-git-main-novricana-s-projects.vercel.app/",
    tags: ["Web", "E-Commerce", "Business"],
    featured: false,
    image: "https://images.unsplash.com/photo-1519671482677-504be0271101?w=800&q=80"
  }
];

export default function ProjectsPage() {
  const [, navigate] = useLocation();
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-6 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              AI & Software Projects
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Innovative solutions combining artificial intelligence, web development, and technology for social impact
            </p>
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container">
              <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border-2 border-accent/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Image */}
                  <div className="h-96 md:h-full min-h-96 overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4 inline-block">
                      <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured Project
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                      {featuredProject.title}
                    </h2>
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
                      className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center gap-2 group w-fit"
                    >
                      <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                        Explore Project
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
                >
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                      {project.category}
                    </p>
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
            <p className="text-sm text-foreground/50 mt-12 text-center italic">
              Note: Some AI applications may enter sleep mode when inactive. If a project does not load immediately, please allow a few moments for the service to wake up.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
