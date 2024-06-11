// SpinningCube.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const SpinningCube = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

const CubeAnimation = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <SpinningCube />
  </Canvas>
);

export default CubeAnimation;
