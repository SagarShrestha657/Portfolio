import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media App",
      description: "Social media platform with real-time messaging, posts, and user profiles.",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations and optimized performance.",
      image: "/placeholder.svg",
      technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Recipe Finder",
      description: "Recipe discovery app with search functionality and nutritional information.",
      image: "/placeholder.svg",
      technologies: ["React", "Recipe API", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.2 + index * 0.2 + techIndex * 0.1 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  >
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.h3
            className="text-2xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Other Notable Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
