import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text">
            Koushik Kumar
          </h1>

          <h2 className="text-2xl md:text-3xl text-foreground/90 font-light">
            Full Stack Web Developer With GenAi
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            “Full-Stack Web Developer skilled in end-to-end web development and
            practical integration of Generative AI into real-world
            applications.”
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              variant="hero"
              size="lg"
              className="hover-glow"
              onClick={() => {
                window.open("https://wa.me/916200067891", "_blank");
              }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Github className="w-5 h-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/KKG-213"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-md border border-border hover:bg-card-hover hover-glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/koushik-kumar-1784a5222"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-md border border-border hover:bg-card-hover hover-glow transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Koushikgupta234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-md border border-border hover:bg-card-hover hover-glow transition-all duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:razkmr1234@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-md border border-border hover:bg-card-hover hover-glow transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+916200067891"
              className="p-3 rounded-full bg-card/50 backdrop-blur-md border border-border hover:bg-card-hover hover-glow transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          {/* Location */}
          <p className="text-muted-foreground">Jharkhand, Dhanbad, India</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
