import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const MartialArtsSection = () => {
    const certificates = [
        {
            title: "1st Dan Black Belt Certificate",
            link: "src/assets/profile_img.jpg",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
        {
            title: "2nd Dan Black Belt Certificate",
            link: "https://drive.google.com/file/d/12AfffcwXqpHzsokDwvAnd459RdU_PrPv/view?usp=drive_link",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
        {
            title: "Competition Participation",
            link: "src/assets/profile_img.jpg",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
    ];

    return (
        <section id="martial-arts" className="py-24 px-2 relative">
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Martial<span className="text-primary"> Arts</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted-foreground">
                            I have been practicing martial arts for several years, focusing
                            mainly on Taekwondo. Through dedication and hard work, I have
                            earned multiple certifications and participated in national-level
                            competitions. Martial arts has shaped my discipline, confidence,
                            and strength, both physically and mentally.
                        </p>

                        <p className="text-lg text-muted-foreground">
                            Below are some of my certifications and achievements you can
                            explore:
                        </p>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-4"
                    >
                        {certificates.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 backdrop-blur-md bg-white/5 rounded-2xl 
                                           border border-white/10 transition 
                                           hover:shadow-[0_0_20px_rgba(108,127,224,0.5)] 
                                           hover:scale-[1.02] duration-300"
                            >
                                {cert.icon}
                                <span className="text-base font-medium">{cert.title}</span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
