
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import SectionWrapper from "../../components/SectionWrapper";
import { BentoGrid, BentoGridItem } from "../../components/ui/aceternity/BentoGrid";
import { PROJECTS_DATA } from "../../constants";
import { ArrowUpRightIcon, CodeBracketIcon, EyeIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid';

const ProjectImageHeader: React.FC<{imageUrl?: string, title?: string}> = ({imageUrl, title}) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] md:min-h-[6rem] rounded-xl bg-gradient-to-br from-cyber-secondary to-cyber-accent overflow-hidden">
    {imageUrl ? (
      <img src={imageUrl} alt={title || 'Project image'} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <CodeBracketSquareIcon className="w-12 h-12 text-cyber-bg opacity-50" />
      </div>
    )}
  </div>
);

const Work: React.FC = () => {
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
    <SectionWrapper idName="work">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12 text-cyber-primary dark:text-cyber-primary">
          My Work &amp; Projects
        </motion.h2>
        
        <BentoGrid className="md:auto-rows-[20rem]">
          {PROJECTS_DATA.map((project, i) => (
            <BentoGridItem
              key={project.id}
              id={project.id}
              title={project.title}
              description={
                <div className="flex flex-col h-full">
                  <p className="text-xs text-cyber-text-secondary dark:text-neutral-300 mb-2 flex-grow">{project.description}</p>
                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-cyber-primary mb-1">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-cyber-secondary/50 text-cyber-text-primary px-2 py-0.5 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs inline-flex items-center text-cyber-primary hover:text-cyber-accent transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <EyeIcon className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs inline-flex items-center text-cyber-primary hover:text-cyber-accent transition-colors"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <CodeBracketIcon className="w-4 h-4 mr-1" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              }
              header={<ProjectImageHeader imageUrl={project.imageUrl} title={project.title} />}
              icon={<ArrowUpRightIcon className="h-4 w-4 text-cyber-text-secondary group-hover/bento:text-cyber-primary transition-colors" />}
              className={i === 0 || i === PROJECTS_DATA.length -1 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
         <motion.div 
          variants={itemVariants} 
          className="text-center mt-12"
        >
          <a
            href="https://github.com/your-github-username" // Replace with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-md font-medium text-cyber-primary border-2 border-cyber-primary rounded-lg shadow-lg hover:text-cyber-accent hover:border-cyber-accent transition-colors duration-300 transform hover:scale-105"
          >
            View More on GitHub
            <ArrowUpRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Work;
