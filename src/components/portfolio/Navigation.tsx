import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeTextElement = itemRefs.current[activeSection];
    const navBarContainer = navContainerRef.current;

    if (activeTextElement && navBarContainer) {
      const navContainerRect = navBarContainer.getBoundingClientRect();
      const activeTextElementRect = activeTextElement.getBoundingClientRect();

      setIndicatorStyle({
        width: activeTextElementRect.width,
        left: activeTextElementRect.left - navContainerRect.left,
        top: activeTextElementRect.top - navContainerRect.top + activeTextElementRect.height + 4, // 4px below text
      });
    }
  }, [activeSection, navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div ref={navContainerRef} className="hidden md:flex gap-8 relative">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'} py-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span ref={(el) => (itemRefs.current[item.id] = el)}>
                    {item.label}
                  </span>
                </motion.button>
              ))}
              {/* Single indicator element always rendered */}
              <motion.div
                className="h-0.5 bg-primary absolute bottom-0"
                layout
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                style={indicatorStyle}
              />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;