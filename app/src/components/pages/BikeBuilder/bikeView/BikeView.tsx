import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../../resources/testGeometry/bikeFrame.gltf";
import FrontWheelModel from "./../../../resources/testGeometry/frontWheel.gltf";

import { BufferGeometry, Group, Object3D, Vector3 } from "three";
import { getDefaultCompilerOptions, JsxElement } from "typescript";
import { groupCollapsed } from "console";

import ComposedBikeBuild from './ComposedBikeBuild';

import { useCurrentBuild } from '../../../../contexts/CurrentBuildContext';


const bikeConfig: BikeConfig = {
  FRAME: {
    id: 0,
    source: BikeFrameModel,
      anchors: {
        "FRONTWHEEL": {
          position: new THREE.Vector3(-1.638202428817749,16668516397476196, 0),
          rotation: new THREE.Euler(0, 0, 0, 'y')
        }
      }          
    },
  };

const BikeView = () => {
  const currentBikeBuild = useCurrentBuild();

  useEffect(() => {
    currentBikeBuild.forEach(product => {
      const scene: GLTF = useGLTF(product.modelSrc);
      Object.keys(scene).forEach((key) => {
        let value = scene[key];
        
        
      })
      
      

    })
    
  }, [currentBikeBuild])

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <ComposedBikeBuild />
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
