import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award, Star, Book } from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";

export default function EducationSection() {
  const education = [
    {
      title: "Bachelor of Engineering in Computer Engineering",
      school: "Sir Syed University of Engineering and Technology",
      year: "2022 - 2026",
      grade: "CGPA: 3.51",
      status: "Currently Pursuing",
      icon: GraduationCap,
    },
    {
      title: "Intermediate (Pre-Engineering)",
      school: "Khatoon-e-Pakistan College",
      year: "2020 - 2022",
      grade: "Grade: A",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-16 px-3 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <SpotlightCard
                className="h-auto w-full 
                           backdrop-blur-md bg-white/5 
                           rounded-2xl border border-white/10 
                           shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                           flex flex-col text-left p-4 sm:p-6 relative overflow-hidden"
                spotlightColor="rgba(232, 167, 245, 0.15)"
              >
                {/* Main Icon */}
                <edu.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 opacity-90" />

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {edu.title}
                </h3>

                {/* School */}
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {edu.school}
                </p>

                {/* Divider */}
                <div className="border-t border-white/10 my-3" />

                {/* Info List */}
                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Year */}
                  <div className="flex flex-wrap items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-pink-400 opacity-80" />
                    <span>{edu.year}</span>
                  </div>

                  {/* Status or Subjects */}
                  {edu.status ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <Star className="w-4 h-4 text-primary opacity-90" />
                      <span className="font-medium text-primary">
                        {edu.status}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-2">
                      <Book className="w-4 h-4 text-blue-400 opacity-80" />
                      <span className="font-bold">Majors:</span>
                      <span className="text-gray-300">
                        {edu.subjects.join(", ")}
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* Grade */}
                  <div className="flex flex-wrap items-center gap-2 text-gray-300 pt-2">
                    <Award className="w-4 h-4 text-yellow-400 opacity-80" />
                    <span className="font-bold">Key Achievements:</span>
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
