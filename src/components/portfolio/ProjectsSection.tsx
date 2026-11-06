import { useMemo, useState } from "react"
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectCategory =
  | "All"
  | "Full-Stack Development"
  | "AI & Healthcare"
  | "SaaS Applications"
  | "E-commerce"
  | "Travel & Booking"
  | "Personal Branding"

type ProjectItem = {
  title: string
  category: Exclude<ProjectCategory, "All">
  description: string
  features: string[]
  link: string
  image: string
  imageAlt: string
  accent: string
  featured?: boolean
}

const projectCategories: ProjectCategory[] = [
  "All",
  "Full-Stack Development",
  "AI & Healthcare",
  "SaaS Applications",
  "E-commerce",
  "Travel & Booking",
  "Personal Branding",
]

const legacyProjects: ProjectItem[] = [
  {
    title: "100 JavaScript Projects",
    category: "Full-Stack Development",
    description:
      "A comprehensive collection of 100 JavaScript projects showcasing various web development concepts, interactive features, and real-world applications.",
    features: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "APIs"],
    link: "http://100-js-project.s3-website.eu-north-1.amazonaws.com",
    image: "https://image.thum.io/get/width/1200/https://100-js-project.s3-website.eu-north-1.amazonaws.com",
    imageAlt: "100 JavaScript Projects homepage screenshot",
    accent: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)",
  },
  {
    title: "Countries Api",
    category: "Full-Stack Development",
    description:
      "Designed and implemented a custom REST API to serve country-level data including population, country codes, flags, and regional metadata.",
    features: ["JavaScript", "TypeScript", "Node.js", "Express.js", "REST API"],
    link: "https://rest-countries-project-khaki-eight.vercel.app",
    image: "https://image.thum.io/get/width/1200/https://rest-countries-project-khaki-eight.vercel.app",
    imageAlt: "Countries API homepage screenshot",
    accent: "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)",
  },
  {
    title: "WordPress Web Design (Elementor + Razorpay)",
    category: "Full-Stack Development",
    description:
      "Built responsive business websites using Elementor. Integrated Razorpay for secure online payments.",
    features: ["WordPress", "Elementor", "Razorpay", "Payment Gateway", "Responsive Design"],
    link: "https://mathcoders.org/program/after-school-program/",
    image: "https://image.thum.io/get/width/1200/https://mathcoders.org/program/after-school-program/",
    imageAlt: "WordPress business website screenshot",
    accent: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
  },
  {
    title: "Fast Restaurant (React + Firebase)",
    category: "Full-Stack Development",
    description:
      "Created a food ordering platform with dynamic menu management. Integrated Firebase for authentication & real-time database.",
    features: ["React", "Firebase", "Authentication", "Real-time Database", "Menu Management"],
    link: "https://koushik-kitchen-connect-et8y.vercel.app/",
    image: "https://image.thum.io/get/width/1200/https://koushik-kitchen-connect-et8y.vercel.app/",
    imageAlt: "Fast Restaurant application screenshot",
    accent: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
  },
  {
    title: "BathAlchemy - Premium Skincare E-Commerce",
    category: "E-commerce",
    description:
      "Developed and customized a Shopify skincare store with performance optimization, SEO improvements, product management, image optimization, and responsive UI enhancements.",
    features: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Google Lighthouse"],
    link: "https://bathalchemy.in/",
    image: "https://image.thum.io/get/width/1200/https://bathalchemy.in/",
    imageAlt: "BathAlchemy storefront screenshot",
    accent: "linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)",
  },
  {
    title: "U&I Luxe - Beauty & Cosmetics Store",
    category: "E-commerce",
    description:
      "Developed promotional campaigns, product bundles, discount automation, and customized Shopify storefront features to improve customer engagement and conversions.",
    features: ["Shopify", "Liquid", "JavaScript", "Product Bundles", "Discount API"],
    link: "https://uandiluxe.com/",
    image: "https://image.thum.io/get/width/1200/https://uandiluxe.com/",
    imageAlt: "U&I Luxe storefront screenshot",
    accent: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
  },
  {
    title: "GoRide Shoes - Footwear E-Commerce",
    category: "E-commerce",
    description:
      "Developed custom collection pages, improved navigation, optimized product presentation, and enhanced the shopping experience with modern Shopify UI/UX.",
    features: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Figma"],
    link: "https://www.gorideshoes.com/",
    image: "https://image.thum.io/get/width/1200/https://www.gorideshoes.com/",
    imageAlt: "GoRide Shoes storefront screenshot",
    accent: "linear-gradient(135deg, #0f766e 0%, #22c55e 100%)",
  },
  {
    title: "Le Signor - Skincare Brand Store",
    category: "E-commerce",
    description:
      "Developed a custom Shopify theme, implemented storefront features, configured payment systems, and optimized the website for performance and scalability.",
    features: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Git"],
    link: "https://www.lesignor.in/",
    image: "https://image.thum.io/get/width/1200/https://www.lesignor.in/",
    imageAlt: "Le Signor storefront screenshot",
    accent: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
  },
  {
    title: "Bolin World - Fragrance Store",
    category: "E-commerce",
    description:
      "Developed custom Buy Now functionality, optimized cart performance, fixed add-to-cart issues, and enhanced the overall shopping experience.",
    features: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
    link: "https://bolinworld.co.in/",
    image: "https://image.thum.io/get/width/1200/https://bolinworld.co.in/",
    imageAlt: "Bolin World storefront screenshot",
    accent: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    title: "Nucco - Healthy Food E-Commerce",
    category: "E-commerce",
    description:
      "Developed product bundle solutions, improved navigation, and implemented merchandising strategies that increased average order value.",
    features: ["Shopify", "Liquid", "JavaScript", "Shopify Bundles"],
    link: "https://www.nucco.shop/",
    image: "https://image.thum.io/get/width/1200/https://www.nucco.shop/",
    imageAlt: "Nucco storefront screenshot",
    accent: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
  },
  {
    title: "AtStay - Headless Booking Platform",
    category: "E-commerce",
    description:
      "Developed and maintained a Next.js headless application integrated with Shopify Storefront API, resolving authentication and deployment issues.",
    features: ["Next.js", "React", "Shopify Storefront API", "Clerk", "TypeScript"],
    link: "https://atstay.in/",
    image: "https://image.thum.io/get/width/1200/https://atstay.in/",
    imageAlt: "AtStay booking platform screenshot",
    accent: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
  },
  {
    title: "The Jungle Harvest - Organic Products Store",
    category: "E-commerce",
    description:
      "Developed marketplace-ready product catalog structures, optimized product data, and supported e-commerce integrations for improved online sales.",
    features: ["Shopify", "Product Management", "Marketplace Integration"],
    link: "https://thejungleharvest.com/",
    image: "https://image.thum.io/get/width/1200/https://thejungleharvest.com/",
    imageAlt: "The Jungle Harvest storefront screenshot",
    accent: "linear-gradient(135deg, #84cc16 0%, #4ade80 100%)",
  },
  {
    title: "Flat n Heels - Fashion E-Commerce",
    category: "E-commerce",
    description:
      "Developed product catalog management workflows, inventory organization, Shopify product listings, and marketplace integration support.",
    features: ["Shopify", "Inventory Management", "Excel", "Product Listing"],
    link: "https://flatnheels.com/",
    image: "https://image.thum.io/get/width/1200/https://flatnheels.com/",
    imageAlt: "Flat n Heels storefront screenshot",
    accent: "linear-gradient(135deg, #e879f9 0%, #a855f7 100%)",
  },
  {
    title: "Kasa Adbhuta – Corporate Business Website",
    category: "Full-Stack Development",
    description:
      "Designed and developed a high-converting corporate website using WordPress and Elementor, focusing on responsive layouts, lead generation, performance optimization, and an intuitive user experience.",
    features: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript"],
    link: "https://kasaadbhuta.com/",
    image: "https://image.thum.io/get/width/1200/https://kasaadbhuta.com/",
    imageAlt: "Kasa Adbhuta corporate business website screenshot",
    accent: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
  },
  {
    title: "Math Coders – Robotics & AI Learning Platform",
    category: "Full-Stack Development",
    description:
      "Built a scalable WordPress-based educational platform with custom course pages, school programs, landing pages, inquiry forms, SEO optimization, and a fully responsive design for STEM education.",
    features: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "SEO"],
    link: "https://mathcoders.org/",
    image: "https://image.thum.io/get/width/1200/https://mathcoders.org/",
    imageAlt: "Math Coders educational platform screenshot",
    accent: "linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)",
  },
  {
    title: "Storage-App",
    category: "Full-Stack Development",
    description:
      "Developed and deployed a full-stack cloud storage platform used by 160+ users, supporting secure file upload, management, sharing, and real-time storage tracking.",
    features: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "AWS (S3, CloudFront)", "Razorpay"],
    link: "https://storemystuff.cloud/",
    image: "https://image.thum.io/get/width/1200/https://storemystuff.cloud/",
    imageAlt: "Storage-App cloud storage dashboard screenshot",
    accent: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)",
  },
  {
    title: "EcoPolyPack – Corporate Manufacturing Website",
    category: "Full-Stack Development",
    description:
      "Developed a modern corporate website for a sustainable packaging manufacturer using Next.js. Built responsive industry and solution pages, optimized performance, integrated reusable UI components, and delivered a scalable architecture for enterprise content management.",
    features: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    link: "https://mts.ecopolypack.com/",
    image: "https://image.thum.io/get/width/1200/https://mts.ecopolypack.com/",
    imageAlt: "EcoPolyPack corporate website screenshot",
    accent: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
  },
  {
    title: "DcorAsia – Home Decor Business Website",
    category: "Full-Stack Development",
    description:
      "Developed and customized a responsive business website with optimized layouts, landing pages, navigation, and user experience. Implemented client-requested features and ensured seamless performance across devices.",
    features: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript"],
    link: "https://www.dcorasia.com/",
    image: "https://image.thum.io/get/width/1200/https://www.dcorasia.com/",
    imageAlt: "DcorAsia business website screenshot",
    accent: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
]

const newProjects: ProjectItem[] = [
  {
    title: "Ranchi Tempo Travels",
    category: "Travel & Booking",
    description:
      "A travel and transportation website designed to showcase tempo traveller rental services and help customers explore travel options and book transportation services.",
    features: [
      "Professional travel website UI",
      "Service and vehicle presentation",
      "Customer inquiry and booking functionality",
      "Responsive design for mobile and desktop",
      "Customer-focused travel experience",
    ],
    link: "https://ranchitempotravels.com/",
    image: "https://image.thum.io/get/width/1200/https://ranchitempotravels.com/",
    imageAlt: "Ranchi Tempo Travels homepage screenshot",
    accent: "linear-gradient(135deg, #2563eb 0%, #22c55e 100%)",
    featured: true,
  },
  {
    title: "KlinikID",
    category: "AI & Healthcare",
    description:
      "An online healthcare management system connecting patients and doctors through a digital healthcare platform. The system supports patient management, doctor management, and appointment booking.",
    features: [
      "Patient management system",
      "Doctor management",
      "Online appointment booking",
      "ABDM-aligned healthcare workflows",
      "Healthcare-focused user experience",
    ],
    link: "https://klinikid.in/",
    image: "https://image.thum.io/get/width/1200/https://klinikid.in/",
    imageAlt: "KlinikID healthcare platform screenshot",
    accent: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    featured: true,
  },
  {
    title: "Ganpati Travel Solutions",
    category: "Travel & Booking",
    description:
      "A travel booking website offering transportation and travel booking services across Jharkhand.",
    features: [
      "Travel service presentation",
      "Booking and appointment functionality",
      "Jharkhand-wide travel service coverage",
      "Responsive frontend",
      "Customer inquiry and booking experience",
    ],
    link: "https://ganpatitravelsolutions.in/",
    image: "https://image.thum.io/get/width/1200/https://ganpatitravelsolutions.in/",
    imageAlt: "Ganpati Travel Solutions homepage screenshot",
    accent: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
  },
  {
    title: "Krishangi By Megha",
    category: "E-commerce",
    description:
      "An e-commerce website developed for an online retail business, with payment and delivery options configured to provide customers with a complete online shopping experience.",
    features: [
      "E-commerce storefront",
      "Product catalog and product pages",
      "Online payment configuration",
      "Delivery and shipping configuration",
      "Responsive design",
    ],
    link: "https://krishangibymegha.com/",
    image: "https://image.thum.io/get/width/1200/https://krishangibymegha.com/",
    imageAlt: "Krishangi By Megha storefront screenshot",
    accent: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  },
  {
    title: "Coach Arif",
    category: "Personal Branding",
    description:
      "A personal portfolio and branding website for a professional personal coach, designed to establish an online presence and showcase coaching services.",
    features: [
      "Personal branding website",
      "Professional profile presentation",
      "Coaching services showcase",
      "Responsive UI",
      "Lead generation and contact experience",
    ],
    link: "https://coacharif.in/",
    image: "https://image.thum.io/get/width/1200/https://coacharif.in/",
    imageAlt: "Coach Arif homepage screenshot",
    accent: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
  },
  {
    title: "MyLimb",
    category: "AI & Healthcare",
    description:
      "An AI-powered web application designed to help people with disabilities identify suitable prosthetic limbs based on their requirements, needs, and available budget.",
    features: [
      "AI-powered prosthetic limb recommendations",
      "Budget-based recommendations",
      "User-focused recommendation experience",
      "Assistive healthcare technology",
      "Helps users explore suitable prosthetic limb options",
    ],
    link: "https://mylimb.in/",
    image: "https://image.thum.io/get/width/1200/https://mylimb.in/",
    imageAlt: "MyLimb AI recommendation platform screenshot",
    accent: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    featured: true,
  },
  {
    title: "CA Practice Management Software – CA Sarvesh Lohia",
    category: "SaaS Applications",
    description:
      "Contributed to the development of a CA practice management software platform designed to streamline the workflow and operations of Chartered Accountant firms.",
    features: [
      "Kanban dashboard development",
      "Task and workflow management components",
      "Business management software UI",
      "Operational dashboard design",
      "Contributed to the practice management experience",
    ],
    link: "https://casarveshlohia.com/",
    image: "https://image.thum.io/get/width/1200/https://casarveshlohia.com/",
    imageAlt: "CA practice management dashboard screenshot",
    accent: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    featured: true,
  },
]

const projects: ProjectItem[] = [...legacyProjects, ...newProjects]

const flagships = newProjects.filter((project) => project.featured)

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Selected Work
          </div>
          <h2 className="mb-6 text-4xl font-bold gradient-text md:text-5xl">
            Building Digital Solutions That Solve Real-World Problems.
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            From AI-powered healthcare applications and business management platforms to scalable e-commerce and travel solutions, I build digital products that solve real business challenges.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm">
          <div className="mb-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
              Flagship Projects
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {flagships.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-background/40 shadow-[0_18px_45px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_35px_rgba(96,165,250,0.2)]"
              >
                <div className="relative h-52 overflow-hidden" style={{ background: project.accent }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.3),transparent_55%)]" />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      const placeholder = event.currentTarget.parentElement?.querySelector(".fallback-placeholder") as HTMLDivElement | null
                      event.currentTarget.style.display = "none"
                      if (placeholder) placeholder.classList.remove("hidden")
                    }}
                  />
                  <div className="fallback-placeholder absolute inset-0 hidden items-center justify-center bg-slate-900/80 text-4xl text-white">
                    {project.title.slice(0, 1)}
                  </div>
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="space-y-2 text-sm text-foreground/85">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full justify-between" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span>Live Website</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {projectCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={`${project.title}-${project.link}`}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card/60 shadow-[0_10px_30px_rgba(15,23,42,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)]"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    const placeholder = event.currentTarget.parentElement?.querySelector(".fallback-placeholder") as HTMLDivElement | null
                    event.currentTarget.style.display = "none"
                    if (placeholder) placeholder.classList.remove("hidden")
                  }}
                />
                <div className="fallback-placeholder absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-4xl font-bold text-white/90">
                  {project.title.slice(0, 1)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <ul className="space-y-2 text-sm text-foreground/85">
                  {project.features.map((feature) => (
                    <li key={`${project.title}-${feature}`} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full justify-between" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
                    <span>Live Website</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild className="hover-glow">
            <a href="https://github.com/KKG-213" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Explore More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection