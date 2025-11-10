const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
      color: "primary"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MySQL", "MongoDB"],
      color: "secondary"
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "WordPress", "Responsive Design"],
      color: "accent"
    },
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "PHP"],
      color: "primary"
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 hover-glow"
            >
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-muted/20 rounded-lg px-3 py-2 text-center border border-border/30 hover:border-border/60 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Coding Platforms */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-accent">
            Coding Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a 
              href="https://www.geeksforgeeks.org/user/razkmrit a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-lg font-medium">GeeksforGeeks</div>
                <div className="text-muted-foreground">DSA Problems Solved</div>
              </div>
            </a>
            
            <a 
              href="https://leetcode.com/u/razkmr1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <div className="text-lg font-medium">LeetCode</div>
                <div className="text-muted-foreground">DSA Problems Solved</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection