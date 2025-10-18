import {motion} from "framer-motion";
import profile_img from "../assets/profile_img.jpg";


export const AboutSection = () => {
    return (
        
        <section id="about" className="py-24 px-2 relative">
    

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center">
                    Who<span className="text-primary"> I Am</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="space-y-6">
                        <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                        >
                        <h3 className="text-2xl font-semibold">
                           Computer Engineer • Web Developer 
                        </h3>

                        {/* Image only on mobile, below heading */}
                        <div className="md:hidden flex justify-center">
                            <img 
                                src={profile_img} 
                                alt="Profile" 
                                className="rounded-full"
                            />
                        </div>
                        
                        <p className="text-muted-foreground">
                            Hi, I’m Armish a Computer Engineer and Web Developer who loves
                            blending creativity with logic. I enjoy designing and developing
                            responsive, user-friendly websites that tell stories and deliver
                            meaningful digital experiences.
                        </p>

                        <p className="text-muted-foreground">
                            Technology for me is more than just code it’s about learning, experimenting, and constantly improving.
                            I value attention to detail, purposeful design, and the process of turning imagination into real digital experiences.
                            Every project I work on is an opportunity to grow, explore new tools, and craft something that leaves a lasting impact.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="https://drive.google.com/file/d/1iBCGsrfeCLN7jSjKgMw5GPL3zMSVv6FC/view?usp=drive_link" className="frosted-button">Download CV</a>
                        </div>
                        </motion.div>
                    </div>

                    {/* Image for desktop layout */}
                    <div className="hidden md:flex justify-center">
                        <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                        >
                        <img 
                            src="src/assets/profile_img.jpg" 
                            alt="Profile" 
                            className="rounded-full"
                        />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
