
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerClassName?: string;
}

const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({
  children,
  className = "",
  shimmerClassName = "",
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-lg ${className}`}
    >
      <span className="z-10">{children}</span>
      <motion.div
        className={`absolute inset-0 -z-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ${shimmerClassName}`}
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
      />
    </span>
  );
};

export default AnimatedShinyText;
