
import React, { Suspense } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Imported THREE

// Placeholder for Astronaut model loading
// In a real scenario, you would replace 'path/to/your/astronaut.glb'
// with the actual path to your GLTF model file in the public folder.
// e.g. useGLTF('/models/astronaut.glb')

const Model: React.FC = () => {
  // const { scene } = useGLTF('/models/astronaut.glb'); // This would be the actual model
  // return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
  
  // Placeholder Geometry if model is not available
  const meshRef = React.useRef<THREE.Mesh>(null!);
  useFrame((_state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    React.createElement(
      'mesh',
      { ref: meshRef, position: [0, 0, 0] as [number, number, number], scale: 0.8 },
      React.createElement('icosahedronGeometry', { args: [1, 1] }),
      React.createElement('meshStandardMaterial', { color: "#7d00ff", wireframe: false, emissive: "#00f0ff", emissiveIntensity: 0.3, metalness: 0.6, roughness: 0.3 })
    )
  );
};

// This preloads the model. If you have a real model, uncomment useGLTF.preload.
// useGLTF.preload('/models/astronaut.glb'); 

const Astronaut: React.FC = () => {
  return (
    <Suspense fallback={null}> {/* Fallback can be a Drei <Loader /> or custom */}
      <Model />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3}/>
    </Suspense>
  );
};

export default Astronaut;
