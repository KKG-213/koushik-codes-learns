const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl hover-glow">
                <img 
                  src="/lovable-uploads/3a13d06f-7591-40d5-b946-cebde496e6b6.png" 
                  alt="Koushik Kumar - Full Stack Web Developer and Freelancer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/90 backdrop-blur-md rounded-full p-3 border border-primary/30">
                <span className="text-primary-foreground font-semibold">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate Web Developer with a strong foundation in computer science and a 
              drive for innovation. Currently pursuing my B.Tech in CSE with an impressive 8 CGPA.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Specializing in <span className="text-primary font-semibold">HTML</span>, <span className="text-primary font-semibold">CSS</span>, <span className="text-primary font-semibold">JavaScript</span>, <span className="text-secondary font-semibold">Node.js</span>, <span className="text-secondary font-semibold">WordPress</span>, <span className="text-accent font-semibold">MySQL</span>, and <span className="text-accent font-semibold">MongoDB</span>. I've solved 
              600+ problems across various coding platforms and built numerous projects ranging 
              from dynamic web applications to full-stack solutions.
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection