import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../../resources/testGeometry/bikeFrame.gltf";
import { BufferGeometry, Group } from "three";
import { JsxElement } from "typescript";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Object3D;
  };
  materials: {};
};

type BikeCompProps = JSX.IntrinsicElements["group"] & {
  config: ComponentConfig;
  setConfig: React.Dispatch<React.SetStateAction<ComponentConfig>>;
};

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
  visible: boolean;
  type: string;
  anchors: Anchors;
};

const BikeFrame = (props: BikeCompProps) => {
  const group = useRef<THREE.Group>();
  const { scene } = useGLTF(BikeFrameModel) as GLTF;

  const bikeComponentConfig = {} as ComponentConfig;
  const anchors: Anchors = {};
  const children: any = scene.children;

  let geometry = {} as BufferGeometry;
  useEffect(() => {
    for (const idx in scene.children) {
      const objectName = scene.children[idx].name;
      const objectType = scene.children[idx].type;

      if (objectType === "Object3D") {
        anchors[objectName] = {
          position: children[idx].position,
          rotation: children[idx].rotation,
        } as Anchor;
      } else if (objectType === "Mesh") {
        bikeComponentConfig.type = objectType;
        geometry = children[idx].geometry;
      }
    }

    bikeComponentConfig.anchors = anchors;
    props.setConfig(bikeComponentConfig);
  }, []);

  return (
    <mesh
      name={bikeComponentConfig.type}
      ref={group}
      castShadow
      receiveShadow
      geometry={geometry}
    />
  );
};

useGLTF.preload(BikeFrameModel);

const BikeBuild = () => {
  const [frameConfig, setFrameConfig] = useState({} as ComponentConfig);
  const [seatPostConfig, setSeatPostConfig] = useState({} as ComponentConfig);
  const [handlebarConfig, sethandlebarConfig] = useState({} as ComponentConfig);
  const [backWheelConfig, setBackWheelConfig] = useState({} as ComponentConfig);
  const [frontWheelConfig, setFrontWheelConfig] = useState(
    {} as ComponentConfig
  );

  const bikeComponents: JSX.Element[] = [];

  const displayBikeComponent = () => {
    bikeComponents.push(
      <BikeFrame config={frameConfig} setConfig={setFrameConfig} />
    );
  };

  displayBikeComponent();

  return <group name="bikeBuild">{bikeComponents.map((e) => e)}</group>;
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
