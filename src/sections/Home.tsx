
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import { Link } from 'react-router-dom';
import SectionWrapper from '../../components/SectionWrapper'; // Corrected import path
import AnimatedShinyText from '../../components/ui/magicui/AnimatedShinyText'; // Corrected import path
import BackgroundBeams from '../../components/ui/aceternity/BackgroundBeams'; // Corrected import path
import Scene from "../../three/Scene"; // Corrected import path
import Astronaut from "../../three/Astronaut"; // Corrected import path
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Home: React.FC = () => {
  const textVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Scene cameraSettings={{ fov: 50, position: [0, 1, 6] }}>
        <Astronaut />
      </Scene>
      <BackgroundBeams /> {/* Subtle beams in the background */}
      
      <SectionWrapper idName="home" className="relative z-10 text-center !py-0">
        <motion.h1
          custom={0.2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6"
        >
          <AnimatedShinyText className="text-cyber-primary dark:text-cyber-primary">
            Securing Digital Frontiers.
          </AnimatedShinyText>
        </motion.h1>

        <motion.p
          custom={0.4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl text-cyber-text-secondary dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Cybersecurity expert & IT professional crafting resilient infrastructures and pioneering modern web solutions with immersive experiences.
        </motion.p>

        <motion.div
          custom={0.6}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="#/work"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-cyber-bg dark:text-gray-900 bg-cyber-primary rounded-lg shadow-lg hover:bg-cyber-accent transition-colors duration-300 transform hover:scale-105"
          >
            View My Work
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="#/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-cyber-primary border-2 border-cyber-primary rounded-lg shadow-lg hover:text-cyber-accent hover:border-cyber-accent transition-colors duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
