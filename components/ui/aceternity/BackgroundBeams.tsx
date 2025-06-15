
import React from "react";

const BackgroundBeams: React.FC = () => {
  // This is a very simplified version.
  // Original Aceternity UI component is more complex and uses SVG/canvas.
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute top-1/2 left-1/2 h-[300px] w-[1px] bg-cyber-primary/30 dark:bg-cyber-accent/20 animate-beam-pulse"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * (360 / 5)}deg) translateY(-150px)`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>
       <div className="absolute inset-0 bg-gradient-to-br from-cyber-bg/50 via-transparent to-cyber-bg/50 opacity-50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/50" />
    </div>
  );
};

export default BackgroundBeams;
