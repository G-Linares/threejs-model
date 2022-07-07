import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import Gb from "./Gb";

const GBCanvas = () => {
  return (
    <Canvas className="canvas" camera={{ zoom: 2 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Gb />
      </Suspense>
    </Canvas>
  );
};

export default GBCanvas;
