import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, Link } from "lucide-react";

export default function ExperienceSection() {
    const experiences = [
        {
            role: "Web Automation Intern",
            company: "Syncropix – Remote",
            period: "Feb 2024 - Mar 2024",
            description: [
                "Worked on real-world automation projects using Make.com and Monday.com.",
                "Built custom workflows to automate tasks across platforms like Gmail, Google Sheets, and others.",
                "Achieved Make.com Certification Levels 1, 2, and 3."
            ],
            certificateUrl: "https://drive.google.com/file/d/1m7GIOL92VhSynmdSjD0YLla2RnmDtFV8/view?usp=drive_link",
            icon: Briefcase,
        },
        {
            role: "Development Intern",
            company: "J. – Onsite",
            period: "Sep 2025 - Oct 2025",
            description: [
                "Contributed to IT development projects in a fast-paced team environment.",
                "Worked on internal tools and systems, ensuring smooth deployment and functionality.",
                "Gained hands-on experience in collaborative development workflows."
            ],
            certificateUrl: "https://www.make.com/certificates/your-certificate-link",
            icon: Briefcase,
            
        }
    ];

    return (
        <section id="experience" className="py-16 px-3 sm:px-6 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: index * 0.2 }}
                            whileHover={{ y: -6 }}
                            className="flex relative group"
                        >
                            {/* Outer glow */}
                            <div
                                className="
                                absolute inset-0 rounded-2xl border border-white/5
                                pointer-events-none
                                transition-shadow duration-500
                                group-hover:shadow-[0_0_15px_rgba(108,127,224,0.5)]
                            "
                            />


                            {/* Card Content */}
                            <div
                                className="h-full w-full 
                           backdrop-blur-md bg-white/5 rounded-2xl border border-white/10
                           flex flex-col justify-between text-left 
                           p-4 sm:p-6 relative overflow-hidden"
                            >
                                <div className="flex flex-col flex-grow relative z-10">
                                    {/* Icon */}
                                    <exp.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 opacity-90" />

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                                        {exp.role}
                                    </h3>

                                    {/* Company */}
                                    <p className="text-gray-300 text-sm  font-bold sm:text-sm mt-1">
                                        {exp.company}
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-white/10 my-3" />

                                    {/* Period */}
                                    <div className="flex flex-wrap items-center gap-2 text-gray-300 text-xs sm:text-sm mb-3">
                                        <Calendar className="w-4 h-4 text-cyan-300 opacity-80" />
                                        <span>{exp.period}</span>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2 text-xs sm:text-sm text-gray-300 flex-grow">
                                        {exp.description.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Award className="w-5 h-5 text-yellow-400 opacity-80 mt-[2px]" />
                                                <span className="leading-snug">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 flex-grow mt-2">
                                        {exp.certificateUrl && (
                                            <a
                                                href={exp.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs sm:text-sm text-primary mt-2 hover:underline"
                                            >
                                                <Link className="w-5 h-5 opacity-80" />
                                                <span>View Certificate</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
