import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <motion.span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Sagar Shrestha
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              Software Developer
            </motion.span>
            <motion.span
              className="mx-4 text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              •
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              Problem Solver
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Motivated Software Developer with foundational knowledge in modern web technologies including
            React, MongoDB, Next.js, Express, Node.js, Git, GitHub, and Docker.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lovable-uploads/Sagar Ganesh Shrestha Resume.pdf';
                link.download = 'Sagar Ganesh Shrestha Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary hover:bg-primary/5"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;