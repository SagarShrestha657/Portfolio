import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Sign Secure AMO Private Limited",
      location: "Mumbai, India",
      period: "Feb 2025 - Apr 2025",
      description: "Contributed to major projects including HR Admin Panel and Payload CMS as part of the Product Development team. Collaborated cross-functionally, demonstrating strong problem-solving skills, technical proficiency, and commitment to project goals.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            <span className="text-foreground">Work </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content card */}
                  <motion.div
                    className={`flex-1 ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 shadow-lg">
                      <motion.div
                        className="flex flex-col md:flex-row md:items-center gap-2 mb-3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      >
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-muted-foreground mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      >
                        {experience.description}
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                      >
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 1.6 + index * 0.2 + techIndex * 0.1 
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;