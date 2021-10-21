import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF, OrbitControls, Plane, Circle } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import ComposedBikeBuild from "./bikeBuild/BikeBuildPresenter";
import { BikeConfig } from "../../../../types";
import BikePodium from "../../../../resources/images/bike_podium.svg";
import * as THREE from "three";

type Props = {
  // Can't be interface since base type includes optinal arguments
  bikeConfig: BikeConfig;
};

const BikeView = ({ bikeConfig }: Props) => {
  // const currentBikeBuild = useCurrentBuild();

  return (
    <div className="h-full w-full bg-gray-300">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [-4, 2, -4], fov: 50 }}
        className="z-10"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[-1.16, 1.262, -2.143]} />
        <pointLight position={[0.442, 0.868, 1.574]} />
        <pointLight position={[-2.427, 2.07, 1.574]} />
        {/* <Plane
          receiveShadow={true}
          material={new THREE.MeshStandardMaterial()}
          scale={new THREE.Vector3(4, 4, 4)}
          rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
          position={new THREE.Vector3(0, -1.2, 0)}
        /> */}

        <Suspense fallback={<div>Loading... </div>}>
          <ComposedBikeBuild bikeConfig={bikeConfig} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
      <img className="z-0 h-full mx-auto absolute inset-0" src={BikePodium} />
    </div>
  );
};

export default BikeView;
