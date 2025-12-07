'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: Home, section: 'experience' },
  { id: 'experience', label: 'Experience', icon: Briefcase, section: 'experience' },
  { id: 'skills', label: 'Skills', icon: Code, section: 'skills' },
  { id: 'education', label: 'Education', icon: GraduationCap, section: 'education' },
  { id: 'contact', label: 'Contact', icon: Mail, section: 'contact' },
];

export function DockNav() {
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For skills/education/contact in DetailPane, scroll to top first then to section
      if (sectionId === 'skills' || sectionId === 'education' || sectionId === 'contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center space-x-1 sm:space-x-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full px-2 sm:px-3 py-2 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.section)}
              className={`p-1.5 sm:p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                isActive
                  ? 'bg-accent text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}

