import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 87 },
        { name: "PostgreSQL", level: 82 },
        { name: "Git", level: 93 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20 relative overflow-hidden">
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
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: [0.4, 0, 0.6, 1]
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating skill badges */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Python', 'AWS', 'Docker', 'GraphQL'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium text-foreground"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0 
                } : { 
                  opacity: 0, 
                  scale: 0, 
                  rotate: -10 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;