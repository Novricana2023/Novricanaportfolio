import { Brain, Code, Eye, Scale, Users, Zap, BookOpen, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const areas = [
  { icon: Brain, title: "Artificial Intelligence", description: "AI models, NLP, computer vision, YOLOv8, and ML pipelines" },
  { icon: Code, title: "Software Engineering", description: "Python, JavaScript, web systems, React, Node.js, ASP.NET" },
  { icon: Eye, title: "Accessibility Tech", description: "Solutions for underserved communities" },
  { icon: Scale, title: "AI Governance", description: "Ethical AI and responsible innovation" },
  { icon: Users, title: "Digital Inclusion", description: "Bridging the digital divide in Africa" },
  { icon: Zap, title: "Youth Empowerment", description: "STEM education and digital literacy" },
  { icon: BookOpen, title: "Tech Research", description: "Emerging technologies and innovation" },
  { icon: Heart, title: "Tech for Social Good", description: "Aligned with UN Sustainable Development Goals" },
];

export default function AreasOfFocus() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/20">
      <div className="container">
        <SectionHeader
          accent="Expertise"
          title="Areas of Focus"
          subtitle="Combining deep technical skills with a mission-driven approach to innovation."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {areas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white border border-blue-100/60 rounded-2xl p-5 hover:shadow-lg hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-primary mb-1.5">{title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
