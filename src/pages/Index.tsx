import Header from "@/components/Header"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import EducationSection from "@/components/sections/EducationSection"
import CertificationsSection from "@/components/sections/CertificationsSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Header />
      
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
      </main>
    </div>
  );
};

export default Index;
