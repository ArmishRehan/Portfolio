import { Navbar } from "../components/Navbar";
import { HeroSection } from "../Sections/HeroSection";
import { AboutSection } from "../Sections/AboutSection";
import SkillsSection from "../Sections/SkillsSection";
import  ProjectsSection  from "../Sections/ProjectsSection";
import { MartialArtsSection } from "../Sections/MartialArtsSection";
import EducationSection from "../Sections/EducationSection";
import Galaxy from "../components/Galaxy";
import { ThemeToggle } from "../components/ThemeToggle";
import ExperienceSection from "../Sections/ExperienceSection";
import ContactSection from "../Sections/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Galaxy
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          
        }}
        mouseRepulsion={false}
        mouseInteraction={false}
        density={0.8}
        glowIntensity={0.2}
        saturation={0.5}
        hueShift={200}
      />

      <Navbar />
      <main>
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <MartialArtsSection />
        <ContactSection />
      </main>
    </div>
  );
};
