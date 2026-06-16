import { TECH_STACK_SECTIONS } from "@/lib/constants";

export default function TechStackGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {TECH_STACK_SECTIONS.map(({ label, items }) => (
        <div
          key={label}
          className="bg-white border border-blue-100/80 rounded-2xl p-5 shadow-sm"
        >
          <p className="text-sm font-semibold text-accent mb-3">{label}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
