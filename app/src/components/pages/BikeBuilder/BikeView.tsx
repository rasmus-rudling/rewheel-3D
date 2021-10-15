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

type GLTFResult = GLTF & {
  nodes: {
    FRAME: THREE.Mesh;
  };
  materials: {};
};

type BikeCompProps = JSX.IntrinsicElements["group"] & {
  path: string;
  bikeConfig: BikeConfig;
};

// type BikeCompProps = JSX.IntrinsicElements["group"] & {
//   name: string;
//   bikeConfig: BikeConfig;
//   setBikeConfig: React.Dispatch<React.SetStateAction<BikeConfig>>;
// };

type Anchor = {
  position: THREE.Vector3;
  rotation: THREE.Euler;
};

type Anchors = {
  [key: string]: Anchor;
};

type ComponentConfig = {
  id: number;
  source: string;
  anchors: Anchors;
};

type BikeConfig = {
  [key: string]: ComponentConfig;
};

const BikeComponent = (props: BikeCompProps) => {
  const group = useRef<THREE.Mesh>();
  const scene = useGLTF(props.path) as GLTF;

  let componentPosition = new THREE.Vector3(0, 0, 0);
  let componentRotation = new THREE.Euler(0, 0, 0);

  console.log(scene);
  const mesh: any = scene.scene.children.find((e) => e.type === "Mesh");

  if (mesh.name === "FRONTWHEEL") {
    componentPosition = props.bikeConfig["FRAME"].anchors[mesh.name].position;
    componentRotation = props.bikeConfig["FRAME"].anchors[mesh.name].rotation;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="FRAME"
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        position={componentPosition}
        rotation={componentRotation}
      />
    </group>
  );
};

// const BikeComponent = (props: BikeCompProps) => {
//   const group = useRef<THREE.Group>();
//   const { scene } = useGLTF(BikeFrameModel) as GLTF;

//   let componentPosition = new THREE.Vector3(0, 0, 0);
//   let componentRotation = new THREE.Euler(0, 0, 0);
//   const bikeConfigTemp = { ...props.bikeConfig };
//   const componentConfig = {} as ComponentConfig;
//   const anchors: Anchors = {};
//   const children: any = scene.children;

//   let objectName = "";

//   for (const idx in scene.children) {
//     const childType = scene.children[idx].type;
//     const childName = scene.children[idx].name;

//     if (childType === "Object3D") {
//       anchors[childName] = {
//         position: children[idx].position,
//         rotation: children[idx].rotation,
//       } as Anchor;
//     } else if (childType === "Mesh") {
//       objectName = scene.children[idx].name;
//       componentConfig.geometry = children[idx].geometry;
//     }
//   }

//   componentConfig.anchors = anchors;
//   bikeConfigTemp[objectName] = componentConfig;

//   useFrame(() => {

//     props.setBikeConfig(bikeConfigTemp);

//   })

//   // if (objectName == "FRONTWHEEL") {
//   //   componentPosition = bikeConfig["FRAME"].anchors["FRONTWHEEL"].position;
//   //   componentRotation = bikeConfig["FRAME"].anchors["FRONTWHEEL"].rotation;
//   // }

//   return (
//     <>
//       <mesh
//         name={props.name}
//         ref={group}
//         castShadow
//         receiveShadow
//         geometry={props.bikeConfig[props.name].geometry}
//         position={componentPosition}
//         rotation={componentRotation}
//       />
//       <Object3D></Object3D>
//     </>
//   );
// };

useGLTF.preload(BikeFrameModel);

const BikeBuild = () => {
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

  const buildComponents = [];

  return (
    <group name="bikeBuild">
      <BikeComponent path={BikeFrameModel} bikeConfig={bikeConfig} />
      <BikeComponent path={FrontWheelModel} bikeConfig={bikeConfig} />
    </group>
  );
};

const BikeView = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <BikeBuild />
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
