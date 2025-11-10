import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProjectsSection = () => {
  const projects = [
    {
      title: "100 JavaScript Projects",
      description: "A comprehensive collection of 100 JavaScript projects showcasing various web development concepts, interactive features, and real-world applications.",
      tech: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "APIs"],
      category: "Web Development",
      color: "primary",
      link: "http://100-js-project.s3-website.eu-north-1.amazonaws.com"
    },
    {
      title: "WordPress Web Design (Elementor + Razorpay)",
      description: "Built responsive business websites using Elementor. Integrated Razorpay for secure online payments.",
      tech: ["WordPress", "Elementor", "Razorpay", "Payment Gateway"],
      category: "Web Development",
      color: "secondary",
      link: "https://mathcoders.org/program/after-school-program/"
    },
    {
      title: "Fast Restaurant (React + Firebase)",
      description: "Created a food ordering platform with dynamic menu management. Integrated Firebase for authentication & real-time database.",
      tech: ["React", "Firebase", "Authentication", "Real-time Database"],
      category: "Web Development",
      color: "accent",
      link: "https://koushik-fast-food.vercel.app"
    },
    {
      title: "Interactive Scratch Game",
      description: "Educational math quiz game for elementary students (Class 3-5). Features animations, instant feedback, and engaging interactive storytelling.",
      tech: ["Scratch", "Game Development", "Educational Design"],
      category: "Education",
      color: "primary"
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`inline-block px-3 py-1 bg-${project.color}/10 border border-${project.color}/20 rounded-full`}>
                    <span className={`text-xs font-medium text-${project.color}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted/20 rounded-md text-xs border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild className="hover-glow">
            <a 
              href="https://github.com/KKG-213" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection