
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants

interface SectionWrapperProps {
  children: React.ReactNode;
  idName?: string;
  className?: string;
}

const sectionVariants: Variants = { // Defined as a const and typed with Variants
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

const SectionWrapper = ({ children, idName, className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      variants={sectionVariants} // Used the const
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
      id={idName}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
