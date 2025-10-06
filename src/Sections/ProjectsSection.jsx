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
      description: "Wanderlust is a full-stack travel listing platform built with Node.js, Express.js, MongoDB, and Bootstrap, offering features like user authentication, interactive maps, reviews, and responsive design. It provides a seamless experience for creating, browsing, and managing diverse accommodation listings.",
    },
        {
      title: "Coupon Master",
      image: Coupon,
      description: "This Coupon Management System is a full-stack project using React, Node.js, Express.js, MySQL, and Tailwind CSS, featuring role-based workflows for store users, creators, and admins to manage coupon requests and approvals. It includes secure JWT authentication, responsive design, and complete CRUD functionality across user roles.",
      link: "https://github.com/ArmishRehan/Coupon.git",
    },
    {
      title: "BudgetBuddy",
      image: BudgetBuddy,
      link: "https://github.com/ArmishRehan/BudgetBuddyProject.git",
      description: "Budget Buddy is a personal finance tracker that helps users manage income, expenses, and savings with ease. Built using Node.js, Express, and MySQL, it provides clear insights into spending habits for better financial control.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-3 sm:px-6 relative">
      
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((project, index) => (
            <FlipCard
              key={index}
              imageSrc={project.image}
              heading={project.title}
              backText={project.description}
              link={project.link}
            />
          ))}
        </div>
      
    </section>
  );
}
