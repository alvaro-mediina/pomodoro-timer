import { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { div } from 'three/tsl';

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
      position={[0, 10, 0]}
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
    <div className="w-[90%] h-[500px] sm:w-[80%] md:w-[70%] lg:w-[70%] ml-20">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 280], fov:25}}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 30]} intensity={2} />
        <directionalLight position={[-5, -5, 30]} intensity={2} />
        <hemisphereLight color={"white"} groundColor={"#555"} intensity={1.2} />
        <pointLight position={[0, 10, 0]} intensity={2} />
        {isLoaded && <TomatoModel />}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Tomato3D;