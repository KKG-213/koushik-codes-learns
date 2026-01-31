import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Let's Connect!
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or help with AI and robotics education. Whether you're looking for a software engineer, 
                need guidance with your projects, or want to explore the world of AI together, let's connect!
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:razkmr1234@gmail.com"
                className="flex items-center gap-4 p-4 card-glass rounded-lg hover-glow transition-all duration-300"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">razkmr1234@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+916200067891"
                className="flex items-center gap-4 p-4 card-glass rounded-lg hover-glow transition-all duration-300"
              >
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+91 6200067891</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 card-glass rounded-lg">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Katras, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Find Me Online
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/KKG-213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <Github className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/koushik-kumar-1784a5222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-secondary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://x.com/Koushikgupta234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <Twitter className="w-8 h-8 text-accent" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                
                <a 
                  href="https://koushik-codes-learns.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">P</span>
                  </div>
                  <span className="text-sm font-medium">Portfolio</span>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="hero" size="lg" asChild className="hover-glow">
                <a href="mailto:razkmr1234@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection