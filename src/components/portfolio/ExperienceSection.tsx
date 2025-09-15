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