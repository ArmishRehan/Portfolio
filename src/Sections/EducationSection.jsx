import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award, Star, Book } from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";

export default function EducationSection() {
  const education = [
    {
      title: "Bachelor of Science in Computer Engineering",
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
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center"
        >
          Academic <span className="text-primary">Journey</span>
        </motion.h2>

        {/* Grid - matches experience section */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group h-full"
            >
              <SpotlightCard
                className="h-full backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-6 relative overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
                spotlightColor="rgba(232, 167, 245, 0.15)"
              >
                {/* Subtle accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-40" />
                
                <div className="flex flex-col h-full relative z-10">
                  {/* Icon in box */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <edu.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1">
                    {edu.title}
                  </h3>

                  {/* School */}
                  <p className="text-gray-300 text-xs sm:text-sm font-medium mb-3">
                    {edu.school}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-white/10 mb-3" />

                  {/* Compact info grid */}
                  <div className="space-y-2.5 text-xs sm:text-sm flex-grow">
                    {/* Year */}
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="w-7 h-7 rounded-lg bg-pink-400/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      </div>
                      <span>{edu.year}</span>
                    </div>

                    {/* Grade */}
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="w-7 h-7 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-3.5 h-3.5 text-yellow-400" />
                      </div>
                      <span className="font-medium">{edu.grade}</span>
                    </div>

                    {/* Status or Subjects */}
                    {edu.status ? (
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Star className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-primary font-semibold">
                          {edu.status}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Book className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <div className="mt-1.5">
                          <span className="text-white font-semibold">Majors: </span>
                          <span className="text-gray-300">
                            {edu.subjects.join(", ")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}