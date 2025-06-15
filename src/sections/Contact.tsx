
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import SectionWrapper from "../../components/SectionWrapper";
import ContactForm from "../../components/ContactForm";
import BackgroundBeams from "../../components/ui/aceternity/BackgroundBeams";
import { ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Contact: React.FC = () => {
  const containerVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="relative overflow-hidden"> {/* Ensure beams don't cause scroll */}
      <BackgroundBeams /> 
      <SectionWrapper idName="contact" className="relative z-10"> {/* Ensure content is above beams */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold mb-4 text-cyber-primary dark:text-cyber-primary flex items-center justify-center"
          >
            <ChatBubbleLeftRightIcon className="w-10 h-10 mr-3" />
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-cyber-text-secondary dark:text-gray-300 mb-10"
          >
            Have a project in mind, a question, or just want to connect? Feel free to reach out. I'm always open to discussing new challenges and opportunities in the cybersecurity landscape.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-cyber-text-secondary dark:text-gray-400">
            <p className="flex items-center justify-center">
              <EnvelopeIcon className="w-5 h-5 mr-2 text-cyber-primary" />
              Or email me directly at: <a href="mailto:your.email@example.com" className="ml-1 text-cyber-primary hover:text-cyber-accent underline">your.email@example.com</a> 
            </p>
            <p className="text-sm mt-2">(Replace with your actual email address)</p>
          </motion.div>

        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
