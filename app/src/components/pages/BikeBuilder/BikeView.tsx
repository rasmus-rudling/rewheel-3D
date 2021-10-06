import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../../resources/testGeometry/bikeFrame.gltf";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
  };
  materials: {};
};

const BikeFrame = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(BikeFrameModel) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, -0.3, 0]}>
        <group name="frontWheelAnchor" position={[-1.64, 0.17, 0]} />
        <group name="backWheelAnchor" position={[1.1, 0.07, 0]} />
        <group
          name="seatPostAnchor"
          position={[0.45, 1.39, 0]}
          rotation={[0, 0, -0.31]}
        />
        <group
          name="stearingAnchor"
          position={[-1.05, 1.44, 0]}
          rotation={[0, 0, -0.39]}
        />
        <mesh
          name="bikeFrame"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
        />
      </group>
    </group>
  );
};

useGLTF.preload(BikeFrameModel);

const BikeView = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <BikeFrame />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default BikeView;
