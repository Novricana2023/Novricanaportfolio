import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import AreasOfFocus from "@/components/portfolio/AreasOfFocus";
import Footer from "@/components/portfolio/Footer";

/**
 * Home Page - Main Portfolio Page
 * Design: Single-page portfolio with smooth scrolling navigation
 * Features: All major sections integrated, responsive layout
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding-top to account for fixed navigation */}
      <main className="pt-20">
        <Hero />
        <AreasOfFocus />
      </main>

      <Footer />
    </div>
  );
}
