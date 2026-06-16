import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import AreasOfFocus from "@/components/portfolio/AreasOfFocus";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import HealingTech from "@/components/portfolio/HealingTech";
import ResearchInnovation from "@/components/portfolio/ResearchInnovation";
import Recognition from "@/components/portfolio/Recognition";
import Writing from "@/components/portfolio/Writing";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

/**
 * Home — full single-page portfolio with all sections.
 * Separate pages (/about, /projects, etc.) remain available via navigation.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Hero />
        <AreasOfFocus />
        <About />
        <Projects />
        <HealingTech />
        <ResearchInnovation />
        <Recognition />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
