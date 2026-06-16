import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import PortfolioImage from "./PortfolioImage";
import { projects, AI_SLEEP_NOTE } from "@/lib/projects";
import { LINKS } from "@/lib/constants";

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container">
        <SectionHeader
          accent="Portfolio"
          title="AI & Software Projects"
          subtitle="Innovative systems for health, accessibility, conservation, and education. Each project built with inclusivity and social impact in mind."
        />

        {featuredProject && (
          <div className="mb-14 md:mb-20">
            <div className="bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 border border-accent/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <PortfolioImage
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  aspect="video"
                  className="lg:rounded-none lg:rounded-l-2xl min-h-[240px]"
                />
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Featured
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <p className="text-sm font-semibold text-accent mb-4">{featuredProject.impact}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-fit bg-accent hover:bg-accent/90 text-white rounded-full group"
                  >
                    <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                      Explore Project
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col bg-white border border-blue-100/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              <PortfolioImage src={project.image} alt={project.title} aspect="video" />
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                {project.isAiHosted && (
                  <p className="text-xs text-foreground/50 flex items-start gap-1.5 mb-3 bg-amber-50/80 border border-amber-100 rounded-lg p-2.5">
                    <RefreshCw className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    App may sleep when idle. Refresh or restart if it does not load immediately.
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50/80 text-primary px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent hover:text-accent/80 inline-flex items-center gap-1 group/link"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm text-foreground/50 mt-10 text-center max-w-2xl mx-auto leading-relaxed">
          {AI_SLEEP_NOTE}
        </p>

        <div className="text-center mt-8">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 underline underline-offset-4"
          >
            <Github className="w-4 h-4" />
            View more projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
