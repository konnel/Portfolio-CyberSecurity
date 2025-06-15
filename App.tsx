
import React, { useState, useEffect } from 'react';
// import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'; // Removed
// import { AnimatePresence } from 'framer-motion'; // Removed as AnimatedRoutes is removed
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./src/sections/Home";
import About from './src/sections/About';
import Work from './src/sections/Work';
import Blog from './src/sections/Blog';
import Contact from './src/sections/Contact';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

// const ScrollToTop: React.FC = () => { // Removed
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// const AnimatedRoutes: React.FC = () => { // Removed
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.hash || location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/work" element={<Work />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}%`;
    setScrollProgress(parseFloat(scroll));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-cyber-bg dark:bg-gray-900 text-cyber-text-primary dark:text-gray-100 transition-colors duration-300">
        <div 
          className="fixed top-0 left-0 h-1 bg-cyber-primary z-50 transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adjust pt if navbar height changes */}
          <Home />
          <About />
          <Work />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 bg-cyber-secondary hover:bg-cyber-accent text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </div>
  );
};

export default App;
