import { Brain, Code, Eye, Scale, Users, Zap, BookOpen, Heart } from "lucide-react";

/**
 * Areas of Focus Component
 * Design: Grid layout with icon cards, clean typography
 * Features: Smooth entrance animations, consistent spacing
 */

const areas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "AI model development and machine learning applications"
  },
  {
    icon: Code,
    title: "Web Systems Development",
    description: "Full-stack web applications and digital platforms"
  },
  {
    icon: Eye,
    title: "Accessibility Technology",
    description: "Technology solutions for underserved communities"
  },
  {
    icon: Scale,
    title: "AI Governance",
    description: "Ethical AI, responsible innovation, and policy"
  },
  {
    icon: Users,
    title: "Digital Inclusion",
    description: "Bridging the digital divide in emerging markets"
  },
  {
    icon: Zap,
    title: "Youth Empowerment",
    description: "Digital literacy and STEM education programs"
  },
  {
    icon: BookOpen,
    title: "Technology Research",
    description: "Emerging technologies and innovation ecosystems"
  },
  {
    icon: Heart,
    title: "Tech for Social Good",
    description: "Technology solutions aligned with UN SDGs"
  }
];

export default function AreasOfFocus() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Areas of Focus
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Combining technical expertise with social impact across diverse domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both"
                }}
              >
                <div className="h-full bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
