
import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Removed useLocation and Link
import { motion, Variants } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation(); // Removed useLocation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };

  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, height: 0, transition: { type: 'spring', stiffness: 300, damping: 30, when: "afterChildren" } },
    open: { opacity: 1, height: 'auto', transition: { type: 'spring', stiffness: 300, damping: 30, when: "beforeChildren" } },
  };
  
  // Removed getIsActive function as it's no longer needed for routing

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cyber-bg/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={() => handleScrollToSection('home')} className="text-2xl font-bold text-cyber-primary hover:text-cyber-accent transition-colors duration-300">
            CyberSec Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.id}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => handleScrollToSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                    text-cyber-text-secondary hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-accent
                    `}
                >
                  {link.title}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyber-primary hover:text-cyber-accent focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        {/* The div below will only be rendered when isOpen is true, 
            allowing Framer Motion to animate its appearance/disappearance based on variants.
            No need for conditional rendering (isOpen && ...) for the direct child of motion.div 
            if variants handle presence.
        */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-bg dark:bg-gray-900 border-t border-cyber-secondary/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleScrollToSection(link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                text-cyber-text-secondary hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-accent
                `}
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
