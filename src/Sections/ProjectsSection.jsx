import { motion } from "framer-motion";
import { FlipCard } from "../components/FlipCard";
import Wanderlust from "../assets/Wanderlust.png";
import Coupon from "../assets/Coupon.png";
import BudgetBuddy from "../assets/BudgetBuddy.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "WanderLust",
      image: Wanderlust,
      link: "https://github.com/ArmishRehan/MajorProject-WanderLust.git",
      video: "https://drive.google.com/file/d/1faYz2DGueb5dLghFJJAJc2IPyhUOGDKc/view?usp=drive_link",
      description: "Wanderlust is a full-stack travel listing platform built with Node.js, Express.js, MongoDB, and Bootstrap, offering features like user authentication, interactive maps, reviews, and responsive design. It provides a seamless experience for creating, browsing, and managing diverse accommodation listings.",
    },
    {
      title: "Coupon Master",
      image: Coupon,
      video: "https://drive.google.com/file/d/1oooqZLeuMpIFE-9vFe3HDQ1jdDPOXJV2/view?usp=sharing",
      description: "This Coupon Management System is a full-stack project using React, Node.js, Express.js, MySQL, and Tailwind CSS, featuring role-based workflows for store users, creators, and admins to manage coupon requests and approvals. It includes secure JWT authentication, responsive design, and complete CRUD functionality across user roles.",
      link: "https://github.com/ArmishRehan/Coupon.git",
    },
    {
      title: "BudgetBuddy",
      image: BudgetBuddy,
      video: "https://drive.google.com/file/d/1jWo56AQVsZF0J3PF92daGv4d4NMGtrIw/view?usp=drive_link",
      link: "https://github.com/ArmishRehan/BudgetBuddyProject.git",
      description: "Budget Buddy is a personal finance tracker that helps users manage income, expenses, and savings with ease. Built using Node.js, Express, and MySQL, it provides clear insights into spending habits for better financial control.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-3 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {projects.map((project, index) => (
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
              className="w-full h-full"
            >
              <FlipCard
                imageSrc={project.image}
                heading={project.title}
                backText={project.description}
                link={project.link}
                video={project.video}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}