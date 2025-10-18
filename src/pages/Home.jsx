import { Navbar } from "../components/Navbar";
import { HeroSection } from "../Sections/HeroSection";
import { AboutSection } from "../Sections/AboutSection";
import SkillsSection from "../Sections/SkillsSection";
import  ProjectsSection  from "../Sections/ProjectsSection";
import { MartialArtsSection } from "../Sections/MartialArtsSection";
import EducationSection from "../Sections/EducationSection";
import StarBackground from "../components/StarBackground";
import ExperienceSection from "../Sections/ExperienceSection";
import ContactSection from "../Sections/ContactSection";

export const Home = () => {
  return (
    
    <div>

      <Navbar />
        <StarBackground />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <MartialArtsSection />
        <ContactSection />
      
    </div>
  );
};
