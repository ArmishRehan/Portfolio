import { motion } from "framer-motion";
import { Calendar, Award, Link } from "lucide-react";

export default function ExperienceSection() {
    const experiences = [
        {
            role: "Automation Intern",
            company: "Syncropix",
            location: "Remote",
            period: "Feb 2024 - Mar 2024",
            description: [
                "Worked on real-world automation projects using Make.com and Monday.com",
                "Built custom workflows to automate tasks across platforms like Gmail and Google Sheets",
                "Achieved Make.com Certification Levels 1, 2, and 3"
            ],
            certificateUrl: "https://drive.google.com/file/d/1m7GIOL92VhSynmdSjD0YLla2RnmDtFV8/view?usp=drive_link",
            
        },
        {
            role: "Development Intern",
            company: "J.",
            location: "Onsite",
            period: "Sep 2025 - Oct 2025",
            description: [
                "Worked on Magento and contributed to UI development for an ongoing project",
                "Independently built a real-time discount management system to streamline company operations",
                "This experience gave me practical insight into production-level databases and professional development workflows."
            ],
            certificateUrl: "https://drive.google.com/file/d/1ltnL6JJeEBh6RH_J-3A6Xs3kfL0xPxTv/view?usp=drive_link",
            
        }
    ];

    return (
        <section id="experience" className="py-16 px-3 sm:px-6 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center"
                >
                    Professional <span className="text-primary">Journey</span>
                </motion.h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
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
                            {/* Card Content */}
                            <div className="h-full backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-6 relative overflow-hidden hover:bg-white/[0.07] transition-all duration-300">
                                
                                {/* Subtle hover glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(108,127,224,0.15)]" />

                                <div className="flex flex-col h-full relative z-10">
                                    

                                    {/* Title & Company */}
                                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-bold mb-3">
                                        {exp.company} <span className="text-gray-400 font-normal">• {exp.location}</span>
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-white/10 mb-3" />

                                    {/* Period */}
                                    <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm mb-4">
                                        <Calendar className="w-4 h-4 text-cyan-300 opacity-80" />
                                        <span>{exp.period}</span>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 flex-grow mb-4">
                                        {exp.description.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <Award className="w-4 h-4 text-yellow-400 opacity-80 mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Certificate Link */}
                                    {exp.certificateUrl && (
                                        <a
                                            href={exp.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline mt-auto group/link"
                                        >
                                            <Link className="w-4 h-4 opacity-80 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            <span>View Certificate</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}