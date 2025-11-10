import { Calendar, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Course Instructor AI and Robotics",
      company: "Math Coders Pvt Ltd",
      location: "Hazaribag",
      period: "June 2025 - Present",
      description: "Teaching AI and Robotics, managing frontend and backend (WordPress) of website, and onboarding students from different schools.",
      type: "current"
    },
    {
      title: "160 Days of DSA",
      company: "GeeksforGeeks",
      location: "Online",
      period: "Completed",
      description: "Successfully completed 160 days of intensive Data Structures and Algorithms practice on GeeksforGeeks platform.",
      type: "achievement",
      link: "https://drive.google.com/file/d/1JQINWOuNGqeVRl4J4WiiJgR3zd9uZDEv/view?usp=drive_link"
    },
    {
      title: "Web Design & Development",
      company: "Freelance",
      location: "Remote",
      period: "6 Months",
      description: "Specialized in web design using WordPress, HTML, CSS, JavaScript, and MySQL. Successfully completed 10+ JavaScript projects showcasing dynamic web applications and interactive user interfaces.",
      type: "past",
      highlight: "10+ JavaScript Projects"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`card-glass rounded-xl p-6 hover-glow ${
                exp.type === 'current' ? 'border-l-4 border-l-primary' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="md:text-right space-y-2">
                  <div className="flex items-center md:justify-end gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  {exp.type === 'current' && (
                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      <span className="text-xs font-medium text-primary">Current Role</span>
                    </div>
                  )}
                  {exp.highlight && (
                    <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                      <span className="text-xs font-medium text-accent">{exp.highlight}</span>
                    </div>
                  )}
                  {exp.link && (
                    <a 
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-sm font-medium text-primary">View Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection