import SectionHeader from "./SectionHeader";

const workplaces = [
  "ABNO Softwares International",
  "Africa Cybersecurity & AI Foundation",
  "NxtGen Labs MW",
];

const communityLeadership = [
  "HealingTech Initiative — Founder",
  "Tujenge Youth Initiative",
  "Friends Anduru, Korogocho",
  "Malawian International Students Association",
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white scroll-mt-24">
      <div className="container">
        <SectionHeader
          accent="Journey"
          title="Where I've Been"
          subtitle="A snapshot of the spaces that have shaped my work — not a résumé, just the places that matter."
        />

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Places I've Worked</h3>
            <ul className="space-y-3">
              {workplaces.map((place) => (
                <li
                  key={place}
                  className="px-4 py-3 bg-white border border-blue-100/80 rounded-xl text-sm font-medium text-foreground/80 hover:border-accent/25 hover:shadow-sm transition-all"
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Community Leadership</h3>
            <ul className="space-y-3">
              {communityLeadership.map((org) => (
                <li
                  key={org}
                  className="px-4 py-3 bg-white border border-blue-100/80 rounded-xl text-sm font-medium text-foreground/80 hover:border-accent/25 hover:shadow-sm transition-all"
                >
                  {org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
