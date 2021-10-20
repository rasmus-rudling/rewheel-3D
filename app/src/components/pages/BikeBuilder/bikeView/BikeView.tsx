import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import ComposedBikeBuild from "./ComposedBikeBuild";

type Props = {
  // Can't be interface since base type includes optinal arguments
  bikeBuild: any;
};

const BikeView = (props: Props) => {
  // const currentBikeBuild = useCurrentBuild();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [-4, 2, -4], fov: 45 }}
      className="bg-black"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[-1.16, 1.262, -2.143]} />
      <pointLight position={[0.442, 0.868, 1.574]} />
      <pointLight position={[-2.427, 2.07, 1.574]} />

      <Suspense fallback={<div>Loading... </div>}>
        <ComposedBikeBuild bikeConfig={props.bikeBuild.renderedBuildConfig} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default BikeView;
