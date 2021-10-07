import React, { useRef, Suspense, useState } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../../resources/testGeometry/bikeFrame.gltf";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    [key: string]: THREE.Object3D;
  };
  materials: {};
};

enum Component {
  FRAME,
  HANDLEBAR,
  FRONTWHEEL,
  BACKWHEEL,
  SEATPOST,
}
interface Anchor {
  position: THREE.Vector3;
  rotation: THREE.Vector3;
}
interface Anchors {
  [key: string]: Anchor;
}
interface ComponentConfig {
  id: number;
  type: Component;
  anchors: Anchors;
}

const BikeFrame = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(BikeFrameModel) as GLTFResult;
  for (const item in nodes) {
    console.log(nodes)
    //if (item.type === "Object3D") console.log(nodes[key]);

    return (
      <mesh
        name="bikeFrame"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    );
  }

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <group name="Scene" position={[0, -0.3, 0]}>
        <group name="frontWheelAnchor" position={[-1.64, 0.17, 0]} />
        <group name="backWheelAnchor" position={[1.1, 0.07, 0]} />
        <group
          name="seatPostAnchor"
          position={[0.45, 1.39, 0]}
          rotation={[0, 0, -0.31]}
        />
        <group
          name="handlebarAnchor"
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
      </group> */}
    </group>
  );
};

useGLTF.preload(BikeFrameModel);

const BikeBuild = () => {
  const [frameConfig, setframeConfig] = useState({} as ComponentConfig);
  const [seatPostConfig, setSeatPostConfig] = useState({} as ComponentConfig);
  const [handlebarConfig, sethandlebarConfig] = useState({} as ComponentConfig);
  const [backWheelConfig, setBackWheelConfig] = useState({} as ComponentConfig);
  const [frontWheelConfig, setFrontWheelConfig] = useState({} as ComponentConfig);

  return <BikeFrame />;
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
