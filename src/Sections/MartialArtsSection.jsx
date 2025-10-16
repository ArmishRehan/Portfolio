import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const MartialArtsSection = () => {
    const certificates = [
         {
            title: "2nd Dan Black Belt Certificate",
            link: "https://drive.google.com/file/d/12AfffcwXqpHzsokDwvAnd459RdU_PrPv/view?usp=drive_link",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
        {
            title: "1st Dan Black Belt Certificate",
            link: "https://drive.google.com/file/d/1ia6CFfeWgj-5OwQEISRhgGtPJyI-QW4p/view?usp=drive_link",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
       
        {
            title: "Competition Participation",
            link: "https://drive.google.com/file/d/1UvsMRb9bEDxyYiFXsNKThoTLUVGRZ2ym/view?usp=drive_link",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
    ];

    return (
        <section id="martial-arts" className="py-24 px-2 relative">
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
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
                            I am a World Taekwondo–certified 2nd Dan Black Belt and an Asian Bronze Medalist.
                            With nearly eight years of dedicated training, Taekwondo has shaped my mindset teaching me focus,
                            discipline, and perseverance. It’s more than a sport to me; it’s a lifelong journey that continues
                            to strengthen both my body and character.
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
