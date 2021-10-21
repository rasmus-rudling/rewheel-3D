import React, { useRef, Suspense, useState, useEffect } from "react";
import {
  useGLTF,
  OrbitControls,
  Plane,
  Circle,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import ComposedBikeBuild from "./bikeBuild/BikeBuildPresenter";
import { BikeConfig } from "../../../../types";
import * as THREE from "three";

type Props = {
  // Can't be interface since base type includes optinal arguments
  bikeConfig: BikeConfig;
};

const BikeView = ({ bikeConfig }: Props) => {
  // const currentBikeBuild = useCurrentBuild();

  return (
    <div className="h-full w-full bg-gray-100">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [-4, 2, -4], fov: 50 }}
        className="z-10"
      >
        <pointLight position={[-1.16, 1.262, -2.143]} castShadow={true} />
        <pointLight position={[0.442, 0.868, 1.574]} castShadow={true} />
        <pointLight position={[-2.427, 2.07, 1.574]} castShadow={true} />

        <Suspense fallback={""}>
          <ComposedBikeBuild bikeConfig={bikeConfig} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />

        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.2, 0]}
          opacity={1}
          width={20}
          height={20}
          blur={1.5}
          far={4.5}
        />
      </Canvas>
    </div>
  );
};

export default BikeView;
