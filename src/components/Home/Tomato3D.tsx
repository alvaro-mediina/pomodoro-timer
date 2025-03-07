import { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const TomatoModel = () => {
  const gltf = useLoader(GLTFLoader, '/model/tomate-model.glb');
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      scale={[70, 70, 70]}
      position={[0, 30, 0]}
    />
  );
};

const Tomato3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <Canvas
      style={{ width: '100%', height: '500px' }}
      camera={{ position: [0, 0, 320], fov:30}}
    >
      <ambientLight intensity={2} />
      <pointLight position={[2, 2, 2]} />
      {isLoaded && <TomatoModel />}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Tomato3D;