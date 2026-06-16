import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { LINKS } from "@/lib/constants";

const topics = [
  "Software Engineering",
  "Artificial Intelligence",
  "Cybersecurity",
  "Digital Innovation",
  "Emerging Technologies",
  "Technology for Social Impact",
];

export default function Writing() {
  return (
    <section id="writing" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container max-w-4xl">
        <SectionHeader
          accent="Publications"
          title="Writing & Publications"
          subtitle="Making complex technical concepts accessible — and advocating for responsible innovation through the written word."
        />

        <p className="text-foreground/70 leading-relaxed mb-8">
          I write about software engineering, AI, cybersecurity, and technology for social impact on Medium. My articles aim to bridge the gap between technical expertise and public understanding.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {topics.map((topic) => (
            <div
              key={topic}
              className="bg-blue-50/50 border border-blue-100/60 rounded-xl p-4 text-center hover:shadow-sm transition-shadow"
            >
              <p className="text-sm font-semibold text-primary">{topic}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-50/60 to-blue-50/60 border border-accent/10 rounded-2xl p-6 md:p-10 text-center">
          <BookOpen className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary mb-3">Read on Medium</h3>
          <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
            Articles on software engineering, digital technology, cybersecurity, and the intersection of AI with social good.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full group">
            <a href={LINKS.medium} target="_blank" rel="noopener noreferrer">
              Visit Medium Profile
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
