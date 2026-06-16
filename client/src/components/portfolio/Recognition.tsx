import SectionHeader from "./SectionHeader";

const recognitions = [
  {
    title: "Mastercard Foundation Scholar",
    description: "Academic excellence and a drive to use technology for social good",
    icon: "🎓",
  },
  {
    title: "Millennium Fellow",
    description: "UN Academic Impact & Millennium Campus Network",
    icon: "🌍",
  },
  {
    title: "Featured Changemaker",
    description: "Mawuya Fireside Chat for community-driven innovation and leadership",
    icon: "⭐",
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container">
        <SectionHeader
          accent="Recognition"
          title="Recognitions"
          subtitle="A few milestones along the way."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {recognitions.map((item) => (
            <div
              key={item.title}
              className="group bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/80 rounded-2xl p-6 text-center hover:shadow-lg hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-base font-bold text-primary mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
