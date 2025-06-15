
import React, { Suspense, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Stars from './Stars'; // Corrected import

interface SceneProps {
  children?: ReactNode;
  className?: string;
  cameraSettings?: {
    fov?: number;
    position?: [number, number, number];
  };
}

const Scene: React.FC<SceneProps> = ({ children, className, cameraSettings }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className || ''}`}>
      <Canvas
        camera={cameraSettings || { fov: 45, position: [0, 0, 5] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          {React.createElement('ambientLight', { intensity: 0.5 })}
          {React.createElement('directionalLight', { position: [5, 5, 5] as [number, number, number], intensity: 1 })}
          {React.createElement('pointLight', { position: [-5, -5, -5] as [number, number, number], intensity: 0.7, color: "#7d00ff" })}
          
          <Stars />
          {children}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
