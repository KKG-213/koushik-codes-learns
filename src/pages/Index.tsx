import HeroSection from "@/components/portfolio/HeroSection"
import AboutSection from "@/components/portfolio/AboutSection"
import ExperienceSection from "@/components/portfolio/ExperienceSection"
import SkillsSection from "@/components/portfolio/SkillsSection"
import ProjectsSection from "@/components/portfolio/ProjectsSection"
import ContactSection from "@/components/portfolio/ContactSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-border/40 bg-background/70 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Koushik Karmakar · Koushik web solutions</span>
          <a
            href="/privacy-policy"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
