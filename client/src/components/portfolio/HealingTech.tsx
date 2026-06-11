import { Heart, Users, Eye, BookOpen } from "lucide-react";

/**
 * HealingTech Initiative Section Component
 * Design: Narrative-driven with image galleries and impact stories
 * Features: Multiple subsections, image integration, community focus
 */

export default function HealingTech() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container">
        {/* Main Headline */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            HealingTech Initiative
          </h2>
          <p className="text-2xl font-semibold text-accent mb-6">
            Technology. Inclusion. Empowerment.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
        </div>

        {/* Initiative Overview */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
            HealingTech Initiative is a social impact initiative dedicated to leveraging technology to improve lives through digital literacy, mentorship, innovation, wellbeing support, and youth empowerment. The initiative has supported marginalized youth through coding, digital literacy, mentorship, and personal development opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                Core Focus Areas
              </h3>
              <ul className="space-y-3 text-foreground/70">
                {[
                  "Digital Literacy & Technology Access",
                  "Mental Wellness Awareness",
                  "Digital Inclusion",
                  "Youth Empowerment",
                  "Community Innovation",
                  "Mentorship Programs",
                  "Technology for Social Good"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                Impact Metrics
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-blue-100 rounded-lg p-4">
                  <p className="text-3xl font-bold text-accent">100+</p>
                  <p className="text-foreground/70">Marginalized youth supported</p>
                </div>
                <div className="bg-white border border-blue-100 rounded-lg p-4">
                  <p className="text-3xl font-bold text-accent">40</p>
                  <p className="text-foreground/70">Children with albinism supported (Clear Sight Project)</p>
                </div>
                <div className="bg-white border border-blue-100 rounded-lg p-4">
                  <p className="text-3xl font-bold text-accent">Ongoing</p>
                  <p className="text-foreground/70">Digital literacy & mentorship programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Sight Project */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
              <Eye className="w-7 h-7 text-accent" />
              The Clear Sight Project
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The Clear Sight Project supported children with albinism by improving access to optical support and raising awareness about educational inclusion and wellbeing. This initiative demonstrates our commitment to accessibility and inclusive technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img
                src="/manus-storage/opticalproject_0a510912.jpeg"
                alt="Clear Sight Project 1"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/optitalproject2_b985d897.jpeg"
                alt="Clear Sight Project 2"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/opticalproject3_acc70fcf.jpeg"
                alt="Clear Sight Project 3"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Children & Youth Programs */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Users className="w-7 h-7 text-accent" />
              Children & Youth Empowerment
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Through mentorship, digital literacy, technology education, leadership development, and STEM exposure, we support children and youth in building skills and confidence for the digital age.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img
                src="/manus-storage/Childrenandyouth_385a5186.jpeg"
                alt="Children and Youth 1"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/childrenandyouth2_f1a61d4e.jpeg"
                alt="Children and Youth 2"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/childrenandyouth3_44a25917.jpeg"
                alt="Children and Youth 3"
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Digital Training */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-accent" />
              Digital Training & Workshops
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Delivering practical technology education including AI training, digital literacy workshops, coding sessions, technology awareness programs, STEM engagement, and community technology education to diverse learners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <img
                src="/manus-storage/Digitaltrainer_6e62e424.jpeg"
                alt="Digital Training 1"
                className="w-full h-40 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/Digitaltrainer2_a6fdfdd5.jpeg"
                alt="Digital Training 2"
                className="w-full h-40 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/Digitaltrainer3_c13f20ce.jpeg"
                alt="Digital Training 3"
                className="w-full h-40 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
              <img
                src="/manus-storage/digitaltrainer4_667365af.jpeg"
                alt="Digital Training 4"
                className="w-full h-40 object-cover rounded-lg hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
