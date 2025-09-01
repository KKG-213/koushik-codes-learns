const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate Software Engineer and AI/Robotics Course Instructor with a strong 
              foundation in computer science and a drive for innovation. Currently pursuing my 
              B.Tech in CSE with an impressive 8 CGPA.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With hands-on experience in both industry and education, I specialize in developing 
              cutting-edge solutions and sharing knowledge with aspiring developers. I've solved 
              600+ problems across various coding platforms and built numerous projects ranging 
              from web applications to AI-powered systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-primary font-semibold">400+</span>
                <span className="text-muted-foreground ml-2">GeeksforGeeks Problems</span>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-2">
                <span className="text-secondary font-semibold">200+</span>
                <span className="text-muted-foreground ml-2">LeetCode Problems</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-glass rounded-xl p-6 hover-glow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground">UCET, Hazaribag • 2021-2025</p>
                  <p className="text-accent font-semibold">8.0 CGPA</p>
                </div>
                <div>
                  <h4 className="font-medium">CBSE XII</h4>
                  <p className="text-muted-foreground">Saraswati Shishu Mandir • 2017-2019</p>
                </div>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 hover-glow">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Current Role</h3>
              <div>
                <h4 className="font-medium">Course Instructor AI and Robotics</h4>
                <p className="text-muted-foreground">Math Coders Pvt Ltd • 2025-Present</p>
                <p className="text-sm text-foreground/80 mt-2">
                  Teaching AI & Robotics, managing frontend/backend systems, and onboarding students from different schools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection