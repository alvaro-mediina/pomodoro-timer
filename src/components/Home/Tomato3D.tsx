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
      scale={[75, 75, 75]}
      position={[0, 0, 0]}
    />
  );
};

const Tomato3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraSettings, setCameraSettings] = useState({ position: [0, 0, 150] as [number, number, number], fov: 40 });

  useEffect(() => {
    const updateCameraSettings = () => {
      const width = window.innerWidth;
      if(width < 640){
        setCameraSettings({ position: [0 , 0, 130], fov: 40}); //small sm xd
      }else if (width >= 640 && width < 768) {
        setCameraSettings({ position: [0, 0, 130], fov: 40 }); // sm
      } else if (width >= 768 && width < 1024) {
        setCameraSettings({ position: [0, 0, 100], fov: 50 }); // md
      } else {
        setCameraSettings({ position: [0, 30, 190], fov: 30 }); // lg
      }
    };

    updateCameraSettings();
    window.addEventListener("resize", updateCameraSettings);

    return () => window.removeEventListener("resize", updateCameraSettings);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="w-[500px] h-[400px]">
      <Canvas
        className="w-full h-full"
        camera={cameraSettings}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 30]} intensity={2} />
        <directionalLight position={[-5, -5, 30]} intensity={2} />
        <hemisphereLight color={"white"} groundColor={"#555"} intensity={1.2} />
        <pointLight position={[0, 10, 0]} intensity={2} />
        {isLoaded && <TomatoModel />}
      </Canvas>
    </div>
  );
};

export default Tomato3D;
