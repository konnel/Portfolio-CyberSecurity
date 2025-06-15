
import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three'; // Imported THREE
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

interface StarsProps {
  [key: string]: any; // Allow any additional props
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<THREE.Points>(null!); // Typed useRef with THREE.Points
  // Generate 5000 star positions within a sphere of radius 1.5
  // Each point has 3 coordinates (x,y,z), so 5000 * 3 floats
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }));

  useFrame((_state, delta) => {
    if (ref.current) {
      // Subtle rotation animation for the stars
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    React.createElement(
      'group',
      { rotation: [0, 0, Math.PI / 4] },
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00f0ff" // Cyber primary color for stars
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false} // Important for layering effects
        />
      </Points>
    )
  );
};

export default Stars;
