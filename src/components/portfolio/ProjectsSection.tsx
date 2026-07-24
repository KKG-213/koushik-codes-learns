import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProjectsSection = () => {
  type ProjectItem = {
    title: string
    description: string
    tech: string[]
    category: string
    color: string
    link: string
  }

  const projects: ProjectItem[] = [
    {
      title: "100 JavaScript Projects",
      description: "A comprehensive collection of 100 JavaScript projects showcasing various web development concepts, interactive features, and real-world applications.",
      tech: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "APIs"],
      category: "Web Development",
      color: "primary",
      link: "http://100-js-project.s3-website.eu-north-1.amazonaws.com"
    },
    {
      title: "Countries Api",
      description: "Designed and implemented a custom REST API to serve country-level data including population, country codes, flags, and regional metadata",
      tech: ["javascript, TypeScript, Node.js, Express.js"],
      category: "Web Development",
      color: "secondary",
      link: "https://rest-countries-project-khaki-eight.vercel.app"

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
      link: "https://koushik-kitchen-connect-et8y.vercel.app/"
    }
  ]

  const shopifyProjects: ProjectItem[] = [
    {
      title: "BathAlchemy - Premium Skincare E-Commerce",
      description: "Developed and customized a Shopify skincare store with performance optimization, SEO improvements, product management, image optimization, and responsive UI enhancements.",
      tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Google Lighthouse"],
      category: "Shopify Development",
      color: "primary",
      link: "https://bathalchemy.in/"
    },
    {
      title: "U&I Luxe - Beauty & Cosmetics Store",
      description: "Developed promotional campaigns, product bundles, discount automation, and customized Shopify storefront features to improve customer engagement and conversions.",
      tech: ["Shopify", "Liquid", "JavaScript", "Product Bundles", "Discount API"],
      category: "Shopify Development",
      color: "secondary",
      link: "https://uandiluxe.com/"
    },
    {
      title: "GoRide Shoes - Footwear E-Commerce",
      description: "Developed custom collection pages, improved navigation, optimized product presentation, and enhanced the shopping experience with modern Shopify UI/UX.",
      tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Figma"],
      category: "Shopify Development",
      color: "success",
      link: "https://www.gorideshoes.com/"
    },
    {
      title: "Le Signor - Skincare Brand Store",
      description: "Developed a custom Shopify theme, implemented storefront features, configured payment systems, and optimized the website for performance and scalability.",
      tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Git"],
      category: "Shopify Development",
      color: "warning",
      link: "https://www.lesignor.in/"
    },
    {
      title: "Bolin World - Fragrance Store",
      description: "Developed custom Buy Now functionality, optimized cart performance, fixed add-to-cart issues, and enhanced the overall shopping experience.",
      tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
      category: "Shopify Development",
      color: "danger",
      link: "https://bolinworld.co.in/"
    },
    {
      title: "Nucco - Healthy Food E-Commerce",
      description: "Developed product bundle solutions, improved navigation, and implemented merchandising strategies that increased average order value.",
      tech: ["Shopify", "Liquid", "JavaScript", "Shopify Bundles"],
      category: "Shopify Development",
      color: "info",
      link: "https://www.nucco.shop/"
    },
    {
      title: "AtStay - Headless Booking Platform",
      description: "Developed and maintained a Next.js headless application integrated with Shopify Storefront API, resolving authentication and deployment issues.",
      tech: ["Next.js", "React", "Shopify Storefront API", "Clerk", "TypeScript"],
      category: "Headless Commerce",
      color: "primary",
      link: "https://atstay.in/"
    },
    {
      title: "The Jungle Harvest - Organic Products Store",
      description: "Developed marketplace-ready product catalog structures, optimized product data, and supported e-commerce integrations for improved online sales.",
      tech: ["Shopify", "Product Management", "Marketplace Integration"],
      category: "Shopify Development",
      color: "secondary",
      link: "https://thejungleharvest.com/"
    },
    {
      title: "Flat n Heels - Fashion E-Commerce",
      description: "Developed product catalog management workflows, inventory organization, Shopify product listings, and marketplace integration support.",
      tech: ["Shopify", "Inventory Management", "Excel", "Product Listing"],
      category: "Shopify Development",
      color: "success",
      link: "https://flatnheels.com/"
    }
  ]

  const wordpressProjects: ProjectItem[] = [
    {
      title: "Kasa Adbhuta – Corporate Business Website",
      description: "Designed and developed a high-converting corporate website using WordPress and Elementor, focusing on responsive layouts, lead generation, performance optimization, and an intuitive user experience.",
      tech: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript"],
      category: "WordPress Development",
      color: "primary",
      link: "https://kasaadbhuta.com/"
    },
    {
      title: "Math Coders – Robotics & AI Learning Platform",
      description: "Built a scalable WordPress-based educational platform with custom course pages, school programs, landing pages, inquiry forms, SEO optimization, and a fully responsive design for STEM education.",
      tech: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "SEO"],
      category: "WordPress Development",
      color: "secondary",
      link: "https://mathcoders.org/"
    }
  ]

  const majorProject: ProjectItem = {
    title: "Storage-App",
    description: "Developed and deployed a full-stack cloud storage platform used by 160+ users, supporting secure file upload, management, sharing, and real-time storage tracking",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "AWS (S3, CloudFront)", "Razorpay"],
    category: "Major Project",
    color: "primary",
    link: "https://storemystuff.cloud/"
  }

  const featuredProjects: ProjectItem[] = [
    {
      title: "EcoPolyPack – Corporate Manufacturing Website",
      description: "Developed a modern corporate website for a sustainable packaging manufacturer using Next.js. Built responsive industry and solution pages, optimized performance, integrated reusable UI components, and delivered a scalable architecture for enterprise content management.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      category: "Full Stack Development",
      color: "primary",
      link: "https://mts.ecopolypack.com/"
    },
    {
      title: "DcorAsia – Home Decor Business Website",
      description: "Developed and customized a responsive business website with optimized layouts, landing pages, navigation, and user experience. Implemented client-requested features and ensured seamless performance across devices.",
      tech: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript"],
      category: "WordPress Development",
      color: "secondary",
      link: "https://www.dcorasia.com/"
    },
    {
      title: "AtStay – Headless Hospitality Platform",
      description: "Developed and maintained a modern headless web application with Next.js and React. Configured authentication, optimized application routing, resolved environment issues, and enhanced deployment readiness for production.",
      tech: ["Next.js", "React", "TypeScript", "Clerk", "Shopify Storefront API"],
      category: "Full Stack Development",
      color: "success",
      link: "https://atstay.in/"
    }
  ]

  const colorClasses: Record<string, { badge: string; text: string }> = {
    primary: { badge: "bg-primary/10 border-primary/20", text: "text-primary" },
    secondary: { badge: "bg-secondary/10 border-secondary/20", text: "text-secondary" },
    success: { badge: "bg-green-500/10 border-green-500/20", text: "text-green-500" },
    warning: { badge: "bg-amber-500/10 border-amber-500/20", text: "text-amber-500" },
    danger: { badge: "bg-red-500/10 border-red-500/20", text: "text-red-500" },
    info: { badge: "bg-cyan-500/10 border-cyan-500/20", text: "text-cyan-500" },
    accent: { badge: "bg-accent/10 border-accent/20", text: "text-accent" }
  }

  const renderProjectCard = (project: ProjectItem, index: number) => {
    const classes = colorClasses[project.color] ?? colorClasses.primary

    return (
      <div
        key={index}
        className="card-glass rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className={`inline-block px-3 py-1 ${classes.badge} border rounded-full`}>
              <span className={`text-xs font-medium ${classes.text}`}>
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
    )
  }

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h2 className="text-4xl font-bold text-center mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            A mix of modern web applications, API-driven products, and business websites built for performance and user experience.
          </p>
        </div>

        <div className="border-t border-border/40 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">
              Major Project
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A flagship full-stack product showcasing scalable architecture, cloud deployment, secure uploads, and real-world user adoption.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {renderProjectCard(majorProject, 0)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>

        <div className="border-t border-border/40 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">
              Shopify Development Highlights
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              E-commerce storefronts and Shopify customizations designed to improve conversions, storefront performance, and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">
              WordPress Development Highlights
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Custom business websites and education platforms built with WordPress, Elementor, and conversion-focused UX.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordpressProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">
              Full Stack Development Highlights
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern web applications and scalable business platforms built with Next.js, React, and production-ready architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <div className="text-center">
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