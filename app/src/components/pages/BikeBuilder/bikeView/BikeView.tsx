import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../../resources/testGeometry/bikeFrame.gltf";
import FrontWheelModel from "./../../../resources/testGeometry/frontWheel.gltf";

import ComposedBikeBuild from './ComposedBikeBuild';

import { useCurrentBuild } from '../../../../contexts/CurrentBuildContext';
import { BikeConfig } from "./bikeViewTypes";


const BikeView = () => {
  const currentBikeBuild = useCurrentBuild();
  const bikeConfig: BikeConfig = {}

  useEffect(() => {
    currentBikeBuild.products.forEach(product => {

      const scene = useGLTF(product.modelSrc) as GLTF;
      console.log(scene)
      // Object.keys(scene).forEach((key) => {
      //   let value = scene[key];
      // })
    })
    
  }, [currentBikeBuild])

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <ComposedBikeBuild bikeConfig={bikeConfig} />
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
