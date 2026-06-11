import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

/**
 * Writing & Publications Section Component
 * Design: Tech writer positioning with Medium integration
 * Features: Publication topics, Medium link, article showcase
 */

export default function Writing() {
  const topics = [
    "Software Engineering",
    "Artificial Intelligence",
    "Cybersecurity",
    "Digital Innovation",
    "Emerging Technologies",
    "Technology for Social Impact"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-accent" />
              Writing & Publications
            </h2>
            <p className="text-2xl font-semibold text-accent mb-6">
              Writing Technology for Impact
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
          </div>

          {/* Writing Description */}
          <div className="mb-12 space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I write about software engineering, artificial intelligence, cybersecurity, digital innovation, emerging technologies, and technology for social impact. My writing aims to make complex technical concepts accessible to diverse audiences while advocating for responsible innovation and inclusive technology adoption.
            </p>

            {/* Topics */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Topics I Write About</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <p className="font-semibold text-primary">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medium Profile CTA */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-accent/20 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Read My Articles on Medium
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Explore my latest articles on software engineering, AI, cybersecurity, and technology innovation. I regularly share insights, tutorials, and thought leadership pieces on emerging technologies and their societal impact.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg inline-flex items-center gap-2 group"
            >
              <a href="https://medium.com/@novielungu" target="_blank" rel="noopener noreferrer">
                Visit Medium Profile
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Writing Philosophy */}
          <div className="mt-12 bg-white border border-blue-100 rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">My Writing Philosophy</h3>
            <p className="text-foreground/70 leading-relaxed">
              I believe in making technology accessible through clear, engaging writing. My goal is to bridge the gap between technical expertise and public understanding, empowering readers to make informed decisions about technology adoption and advocating for ethical innovation that serves humanity's greatest needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
