import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Heart, Users, Eye, BookOpen, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Leadership Page
 * Design: Dedicated page for HealingTech Initiative and community impact
 */

export default function LeadershipPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-6 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Leadership & Community Impact
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Empowering communities through technology, mentorship, and digital inclusion
            </p>
          </div>
        </section>

        {/* HealingTech Initiative */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                HealingTech Initiative
              </h2>
              <p className="text-2xl font-semibold text-accent mb-6">
                Technology. Inclusion. Empowerment.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-12">
              HealingTech Initiative is a social impact initiative dedicated to leveraging technology to improve lives through digital literacy, mentorship, innovation, wellbeing support, and youth empowerment. The initiative has supported marginalized youth through coding, digital literacy, mentorship, and personal development opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
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

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  Impact Metrics
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 border border-accent/20 rounded-lg p-6">
                    <p className="text-4xl font-bold text-accent">100+</p>
                    <p className="text-foreground/70 font-semibold">Marginalized youth supported</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 border border-accent/20 rounded-lg p-6">
                    <p className="text-4xl font-bold text-accent">40</p>
                    <p className="text-foreground/70 font-semibold">Children with albinism supported</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 border border-accent/20 rounded-lg p-6">
                    <p className="text-2xl font-bold text-accent">Ongoing</p>
                    <p className="text-foreground/70 font-semibold">Digital literacy programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clear Sight Project */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-accent" />
                The Clear Sight Project
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                The Clear Sight Project supported children with albinism by improving access to optical support and raising awareness about educational inclusion and wellbeing. This initiative demonstrates our commitment to accessibility and inclusive technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src="/manus-storage/opticalproject_0a510912.jpeg"
                    alt="Clear Sight Project 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src="/manus-storage/optitalproject2_b985d897.jpeg"
                    alt="Clear Sight Project 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src="/manus-storage/opticalproject3_acc70fcf.jpeg"
                    alt="Clear Sight Project 3"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Children & Youth */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-accent" />
              Children & Youth Empowerment
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-3xl">
              Through mentorship, digital literacy, technology education, leadership development, and STEM exposure, we support children and youth in building skills and confidence for the digital age.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/Childrenandyouth_385a5186.jpeg"
                  alt="Children and Youth 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/childrenandyouth2_f1a61d4e.jpeg"
                  alt="Children and Youth 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/childrenandyouth3_44a25917.jpeg"
                  alt="Children and Youth 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Training */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-accent" />
              Digital Training & Workshops
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-3xl">
              Delivering practical technology education including AI training, digital literacy workshops, coding sessions, technology awareness programs, STEM engagement, and community technology education to diverse learners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="h-56 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/Digitaltrainer_6e62e424.jpeg"
                  alt="Digital Training 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-56 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/Digitaltrainer2_a6fdfdd5.jpeg"
                  alt="Digital Training 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-56 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/Digitaltrainer3_c13f20ce.jpeg"
                  alt="Digital Training 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-56 overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/digitaltrainer4_667365af.jpeg"
                  alt="Digital Training 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
