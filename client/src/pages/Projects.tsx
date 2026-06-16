import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import PortfolioImage from "@/components/portfolio/PortfolioImage";
import { ExternalLink, ArrowLeft, RefreshCw } from "lucide-react";
import { useLocation } from "wouter";
import { projects, AI_SLEEP_NOTE } from "@/lib/projects";

export default function ProjectsPage() {
  const [, navigate] = useLocation();
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <section className="py-10 md:py-16 bg-gradient-to-b from-blue-50/40 to-white">
          <div className="container">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-4 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              AI & Software Projects
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Innovative solutions combining AI, web development, and technology for social impact.
            </p>
          </div>
        </section>

        {featuredProject && (
          <section className="py-12 md:py-20">
            <div className="container">
              <div className="bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 border border-accent/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <PortfolioImage
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    aspect="video"
                    className="lg:rounded-none min-h-[280px]"
                  />
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <span className="inline-block w-fit bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                      Featured Project
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                      {featuredProject.title}
                    </h2>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{featuredProject.description}</p>
                    <p className="text-sm font-semibold text-accent mb-4">{featuredProject.impact}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag) => (
                        <span key={tag} className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild className="w-fit bg-accent hover:bg-accent/90 text-white rounded-full group">
                      <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                        Explore Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">More Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col bg-white border border-blue-100/80 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <PortfolioImage src={project.image} alt={project.title} aspect="video" />
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">{project.category}</p>
                    <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-3 flex-grow">{project.description}</p>
                    {project.isAiHosted && (
                      <p className="text-xs text-foreground/50 flex items-start gap-1.5 mb-3 bg-amber-50 border border-amber-100 rounded-lg p-2.5">
                        <RefreshCw className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        App may sleep when idle — refresh or click Restart to wake it up.
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-blue-50 text-primary px-2 py-0.5 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:text-accent/80"
                    >
                      View Project →
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-10 text-center max-w-2xl mx-auto italic">
              {AI_SLEEP_NOTE}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
