
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import SectionWrapper from "../../components/SectionWrapper";
import { SKILLS_DATA } from "../../constants"; // Corrected import path
import { BriefcaseIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const About: React.FC = () => {
  const containerVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <SectionWrapper idName="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-4 text-cyber-primary dark:text-cyber-primary">
          About Me
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-center text-cyber-text-secondary dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A highly motivated and results-oriented Cybersecurity Analyst and IT Support Specialist with a passion for protecting digital assets and solving complex technical challenges. My journey combines deep expertise in network security, system hardening, and incident response with a strong foundation in user-centric IT support and infrastructure management.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
          <motion.div variants={itemVariants} className="bg-cyber-bg/30 dark:bg-gray-800/50 p-6 rounded-lg shadow-xl border border-cyber-secondary/30">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-accent flex items-center">
              <BriefcaseIcon className="w-7 h-7 mr-3 text-cyber-accent" />
              Cybersecurity Expertise
            </h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-text-secondary dark:text-gray-300">
              <li>Hardening enterprise infrastructure and cloud environments.</li>
              <li>Rapid incident detection, response, and forensic analysis.</li>
              <li>Developing and managing SIEM dashboards for threat intelligence.</li>
              <li>Automating security operations with scripting and SOAR principles.</li>
              <li>Vulnerability assessment and penetration testing methodologies.</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-cyber-bg/30 dark:bg-gray-800/50 p-6 rounded-lg shadow-xl border border-cyber-secondary/30">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-accent flex items-center">
              <UserCircleIcon className="w-7 h-7 mr-3 text-cyber-accent" />
              IT Support &amp; Systems
            </h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-text-secondary dark:text-gray-300">
              <li>Comprehensive IT support for diverse user bases.</li>
              <li>Windows & Linux server administration and maintenance.</li>
              <li>Network configuration, troubleshooting, and optimization.</li>
              <li>Active Directory management and identity services.</li>
              <li>Proactive system monitoring and performance tuning.</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-10 text-cyber-primary dark:text-cyber-primary">
          My Skillset
        </motion.h3>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-cyber-bg/50 dark:bg-gray-800/70 p-6 rounded-lg shadow-lg border border-cyber-secondary/40 hover:shadow-cyber-primary/20 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {skill.icon && React.isValidElement(skill.icon) && (
                    <span className="mr-3">
                      {React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-7 h-7 text-cyber-primary" })}
                    </span>
                  )}
                  <h4 className="text-lg font-semibold text-cyber-text-primary dark:text-gray-100">{skill.name}</h4>
                </div>
                <span className="text-sm font-medium text-cyber-accent">{skill.level}%</span>
              </div>
              <div className="w-full bg-cyber-secondary/30 rounded-full h-3 dark:bg-gray-700">
                <motion.div
                  className="bg-cyber-primary h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
