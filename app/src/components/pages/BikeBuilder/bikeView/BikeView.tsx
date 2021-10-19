import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./testGeometry/bikeFrame.gltf";
import FrontWheelModel from "./testGeometry/frontWheel.gltf";

import ComposedBikeBuild from "./ComposedBikeBuild";

import { BikeConfig } from "../../../../types";
import {  BikeBuild, Product } from "../../../../types";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Object3D } from "three";

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

const BikeView = () => {
  // const currentBikeBuild = useCurrentBuild();

  const currentBikeBuild = useSelector((state: RootStateOrAny) => state.currentBuild);

  useEffect(() => {

  }, [currentBikeBuild])


  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight intensity={.5} />
      <pointLight position={[-1.160, 1.262, -2.143]} />
      <pointLight position={[0.442, 0.868, 1.574]} />
      <pointLight position={[-2.427, 2.070, 1.574]} />

      <Suspense fallback={<div>Loading... </div>}>
        <ComposedBikeBuild bikeConfig={currentBikeBuild.renderedBuildConfig} />
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
