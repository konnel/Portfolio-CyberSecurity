
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Imported Variants
import SectionWrapper from "../../components/SectionWrapper";
import { BLOG_POSTS_DATA } from "../../constants";
import { CalendarDaysIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
  const containerVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = { // Typed with Variants
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, duration: 0.5 } },
  };

  return (
    <SectionWrapper idName="blog">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-bold text-center mb-4 text-cyber-primary dark:text-cyber-primary"
        >
          Insights &amp; War Stories
        </motion.h2>
        <motion.p 
          variants={itemVariants} 
          className="text-xl text-center text-cyber-text-secondary dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Sharing lessons learned from the trenches of cybersecurity, real-world scenarios, and thoughts on emerging threats and technologies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-cyber-bg/50 dark:bg-gray-800/60 rounded-xl shadow-xl overflow-hidden flex flex-col border border-cyber-secondary/30 hover:border-cyber-primary/70 transition-all duration-300 hover:shadow-cyber-primary/20"
            >
              {post.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-cyber-primary dark:text-cyber-accent mb-2">{post.title}</h3>
                <div className="flex items-center text-xs text-cyber-text-secondary dark:text-gray-400 mb-3">
                  <CalendarDaysIcon className="w-4 h-4 mr-1.5" />
                  <span>{post.date}</span>
                </div>
                <p className="text-sm text-cyber-text-secondary dark:text-gray-300 mb-4 flex-grow">{post.summary}</p>
                <div className="mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-cyber-secondary/50 text-cyber-text-primary text-xs px-2 py-1 rounded-full mr-2 mb-1">
                      <TagIcon className="w-3 h-3 inline-block mr-1" />{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`#/blog/${post.slug}`} // Placeholder for actual blog post link
                  className="mt-auto inline-flex items-center text-cyber-primary hover:text-cyber-accent font-medium group transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Blog;
