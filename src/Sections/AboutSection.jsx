import {motion} from "framer-motion";


export const AboutSection = () => {
    return (
        
        <section id="about" className="py-24 px-2 relative">
    

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    About<span className="text-primary"> Me</span>
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
                            Passionate Web Developer and XYZ
                        </h3>

                        {/* Image only on mobile, below heading */}
                        <div className="md:hidden flex justify-center">
                            <img 
                                src="src/assets/profile_img.jpg" 
                                alt="Profile" 
                                className="rounded-full"
                            />
                        </div>
                        
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quasi a harum nisi amet minus ex cupiditate saepe tempore ut. 
                            Voluptatum atque nobis accusantium, alias tenetur consectetur? 
                            Fugiat voluptatibus repellendus molestiae.
                        </p>

                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quasi a harum nisi amet minus ex cupiditate saepe tempore ut. 
                            Voluptatum atque nobis accusantium, alias tenetur consectetur? 
                            Fugiat voluptatibus repellendus molestiae.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="src/assets/Resume.pdf" className="frosted-button">Download CV</a>
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
