import { Calendar, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer & Consultant",
      company: "Independent / Client Projects",
      location: "Remote",
      period: "Current",
      description:
        "Designing and building end-to-end web solutions for businesses and startups across travel, healthcare, e-commerce, and SaaS, with a focus on responsive UI, user journeys, business workflows, and scalable frontend architecture.",
      type: "current",
      highlight: "Multi-Industry Delivery",
    },
    {
      title: "Full Stack Developer & Tech Coordinator",
      company: "Atraski Technology Transformations",
      location: "Remote",
      period: "6 Months",
      description:
        "Built and maintained client-facing web applications, worked across product delivery cycles, and supported technical operations for multiple business brands spanning commerce, services, and digital transformation projects.",
      type: "past",
      highlight: "Client Delivery",
    },
    {
      title: "Full Stack Developer",
      company: "Math Coders Pvt Ltd",
      location: "Hazaribag",
      period: "June 2025 - September 2025",
      description:
        "Developed scalable web applications and contributed to end-to-end product execution for an educational platform, balancing UI quality, business requirements, and deployment readiness.",
      type: "past",
      highlight: "Product Development",
    },
    {
      title: "Web Design & Development",
      company: "Freelance",
      location: "Remote",
      period: "6 Months",
      description:
        "Created custom websites and digital experiences with WordPress, JavaScript, HTML, CSS, and MySQL for business and brand-focused solutions, while delivering a strong portfolio of practical web projects.",
      type: "past",
      highlight: "10+ Projects",
    },
  ]

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold gradient-text">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`card-glass rounded-xl p-6 hover-glow ${
                exp.type === "current" ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-semibold text-foreground">{exp.title}</h3>
                  <h4 className="mb-2 text-lg font-medium text-primary">{exp.company}</h4>
                  <p className="leading-relaxed text-foreground/80">{exp.description}</p>
                </div>

                <div className="space-y-2 md:text-right">
                  <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  {exp.type === "current" && (
                    <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                      <span className="text-xs font-medium text-primary">Current Role</span>
                    </div>
                  )}
                  {exp.highlight && (
                    <div className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
                      <span className="text-xs font-medium text-accent">{exp.highlight}</span>
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