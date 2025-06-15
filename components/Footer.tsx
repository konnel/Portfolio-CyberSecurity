
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-cyber-bg/50 dark:bg-gray-900/50 border-t border-cyber-secondary/30 py-8 text-center text-cyber-text-secondary dark:text-gray-400">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with React, Tailwind CSS, R3F, Framer Motion, and <span className="text-cyber-primary">&lt;3</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
