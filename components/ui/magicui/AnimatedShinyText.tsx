
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerColors?: string[];
  shimmerSize?: string;
  borderRadius?: string;
}

const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({
  children,
  className = "",
  shimmerColors = ["#ffffff", "#7dd3fc", "#ffffff"],
  shimmerSize = "100px",
  borderRadius = "100px",
}) => {
  return (
    <motion.span
      className={`relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedShinyText;
