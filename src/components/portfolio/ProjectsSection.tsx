import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Creative Threads",
      description: "A social media platform for digital artists to showcase their artwork, connect with other creatives, and build their artistic community. Features include real-time messaging, artwork galleries, and trending artist discovery.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js"],
      images: [
        "/lovable-uploads/d0c37ebf-d4cd-40ad-8920-90c4729d9b28.png",
        "/lovable-uploads/578687a0-a596-462c-978c-58bcb7a6ff60.png",
        "/lovable-uploads/684b64a7-7c83-4f62-a6c6-ab90df421e34.png",
        "/lovable-uploads/826cda48-dab5-444a-bcb6-ebc45d79f27a.png"
      ],
      liveUrl: "https://creative-theards.vercel.app",
      githubUrl: "https://github.com/SagarShrestha657/creative-threads",
      category: "Social Media"
    },
    {
      id: 2,
      title: "FetchMart",
      description: "An intelligent e-commerce platform that helps users compare products across multiple platforms like Amazon, Flipkart, and more. Features AI-powered product recommendations, price comparison, and smart search functionality.",
      tech: ["React.js", "Node.js", "Express.js", "Web Scraping", "AI Integration"],
      images: [
        "/lovable-uploads/98f49a72-36ae-41d5-9d7e-c378eaa6cfd1.png",
        "/lovable-uploads/30cd12cb-e155-4284-b1e9-e1e7419742bf.png",
        "/lovable-uploads/4c0130bc-3fb1-450f-a32a-7d0c117269d1.png",
        "/lovable-uploads/e12ae9a3-428d-4fa0-a6e3-f050f2456d0a.png",
        "/lovable-uploads/b1adb79e-3bf2-424b-8b13-81c1509a76a9.png"
      ],
      liveUrl: "https://fetch-mart.vercel.app",
      githubUrl: "https://github.com/SagarShrestha657/fetchmart",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "PassVault",
      description: "A secure password manager application that helps users safely store and manage their login credentials. Features include encrypted storage, password generation, and secure access across devices.",
      tech: ["React.js", "Node.js", "Encryption", "JWT", "MongoDB"],
      images: [
        "/lovable-uploads/01598cec-0dbc-444d-846d-338be849d723.png"
      ],
      liveUrl: "https://pass-vault-black.vercel.app",
      githubUrl: "https://github.com/SagarShrestha657/passvault",
      category: "Security"
    }
  ];

  const [imageIndices, setImageIndices] = useState<{[key: number]: number}>({});

  // Auto-swipe images every 3 seconds for all projects
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    projects.forEach((project, projectIndex) => {
      if (project.images.length > 1) {
        const interval = setInterval(() => {
          setImageIndices(prev => {
            const currentIndex = prev[projectIndex] || 0;
            const nextIndex = (currentIndex + 1) % project.images.length;
            return {
              ...prev,
              [projectIndex]: nextIndex
            };
          });
        }, 4000); // Same timing for all projects
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextImage = (projectIndex: number) => {
    const project = projects[projectIndex];
    setImageIndices(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length
    }));
  };

  const prevImage = (projectIndex: number) => {
    const project = projects[projectIndex];
    setImageIndices(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + project.images.length) % project.images.length
    }));
  };

  const setImageIndex = (projectIndex: number, imageIndex: number) => {
    setImageIndices(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
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

          {/* Projects displayed vertically */}
          <div className="space-y-20">
            {projects.map((proj, projectIndex) => (
              <motion.div
                key={proj.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  projectIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + projectIndex * 0.2 }}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${projectIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: projectIndex % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.6 + projectIndex * 0.2 }}
                >
                  <div className="relative bg-card rounded-2xl p-4 border border-border overflow-hidden group">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <motion.img
                        key={`${projectIndex}-${imageIndices[projectIndex] || 0}`}
                        src={proj.images[imageIndices[projectIndex] || 0]}
                        alt={`${proj.title} screenshot`}
                        className="w-full h-full object-contain bg-card/50"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Image Navigation Arrows */}
                      {proj.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(projectIndex)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                          >
                            <ChevronLeft className="h-4 w-4 text-foreground" />
                          </button>
                          <button
                            onClick={() => nextImage(projectIndex)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                          >
                            <ChevronRight className="h-4 w-4 text-foreground" />
                          </button>
                        </>
                      )}

                      {/* Image Dots */}
                      {proj.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {proj.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setImageIndex(projectIndex, index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === (imageIndices[projectIndex] || 0)
                                  ? 'bg-primary scale-125'
                                  : 'bg-background/60 backdrop-blur-sm hover:bg-background/80'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`space-y-6 ${projectIndex % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: projectIndex % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: projectIndex % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.8, delay: 0.8 + projectIndex * 0.2 }}
                >
                  <div className="space-y-4">
                    <motion.span
                      className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 1.0 + projectIndex * 0.2 }}
                    >
                      {proj.category}
                    </motion.span>

                    <motion.h3
                      className="text-3xl md:text-4xl font-bold text-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.1 + projectIndex * 0.2 }}
                    >
                      {proj.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.2 + projectIndex * 0.2 }}
                    >
                      {proj.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.3 + projectIndex * 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {proj.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-secondary/50 to-secondary/30 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, delay: 1.4 + projectIndex * 0.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.5 + projectIndex * 0.2 }}
                  >
                    <motion.a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-card hover:bg-secondary border border-border hover:border-primary/20 text-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Selection Indicator */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="text-sm text-muted-foreground">Current focus:</span>
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/30'
                      : 'bg-border hover:bg-primary/50 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ProjectsSection;