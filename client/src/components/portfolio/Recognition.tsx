import { Award, Star } from "lucide-react";

/**
 * Recognition Section Component
 * Design: Achievement cards with elegant presentation
 * Features: Prestigious recognitions, professional credibility
 */

const recognitions = [
  {
    title: "Mastercard Foundation Scholar",
    description: "Recognized for academic excellence and commitment to social impact",
    icon: "🎓"
  },
  {
    title: "Millennium Fellow",
    description: "Selected by UN Academic Impact & Millennium Campus Network for leadership potential",
    icon: "🌍"
  },
  {
    title: "Featured Changemaker",
    description: "Recognized by Mastercard Foundation Mawuya Fireside Chat",
    icon: "⭐"
  },
  {
    title: "Software Engineering Major",
    description: "Bachelor of Science in Software Engineering from USIU-Africa",
    icon: "🏆"
  },
  {
    title: "Founder of HealingTech Initiative",
    description: "Leading social impact initiatives supporting 100+ marginalized youth",
    icon: "🚀"
  },
  {
    title: "AI Apprentice",
    description: "Africa Cybersecurity & AI Foundation - Advanced AI training and mentorship",
    icon: "🤖"
  },
  {
    title: "Digital Trainer",
    description: "Delivering technology education and capacity building across East Africa",
    icon: "📚"
  },
  {
    title: "Community Impact Leader",
    description: "Recognized for contributions to digital inclusion and youth empowerment",
    icon: "❤️"
  }
];

export default function Recognition() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center gap-3">
            <Award className="w-10 h-10 text-accent" />
            Recognition & Achievements
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Recognized for technical excellence, leadership, and commitment to technology for social impact
          </p>
        </div>

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both"
              }}
            >
              <div className="h-full bg-gradient-to-br from-white to-blue-50/30 border-2 border-accent/20 rounded-xl p-6 hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
                <div className="text-4xl mb-4">{recognition.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3 leading-snug">
                  {recognition.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
                  {recognition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 md:p-12 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-start gap-4">
            <Star className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Professional Credentials</h3>
              <p className="text-foreground/70 leading-relaxed">
                These recognitions reflect a commitment to technical excellence, ethical innovation, and community empowerment. They validate my position as an emerging AI professional and technology leader dedicated to creating positive societal impact through responsible innovation and digital inclusion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
