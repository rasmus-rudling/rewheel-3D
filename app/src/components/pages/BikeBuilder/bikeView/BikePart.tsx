import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type Props = JSX.IntrinsicElements["group"] & {
  // Can't be interface since base type includes optinal arguments
  modelSrc: string;
  position: THREE.Vector3;
  orientation: THREE.Euler;
};

const BikePart = (props: Props) => {
  const modelSrc = props.modelSrc; // Include geometry instead?
  const position = props.position;
  const orientation = props.orientation;

  const group = useRef<THREE.Mesh>();
  const scene = useGLTF(modelSrc) as GLTF;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        //name="FRAME"
        castShadow
        receiveShadow
        //geometry={mesh.geometry}
        //position={position}
        //rotation={orientation}
      />
    </group>
  );
};

export default BikePart;
