import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";


export interface Anchor {
    position: THREE.Vector3;
    rotation: THREE.Euler;
};
  
export interface Anchors {
  [key: string]: Anchor;
};

export interface ComponentConfig {
  geometry: THREE.BufferGeometry;
  color: THREE.Color;
  anchors: Anchors;
};

export type GLTFResult = GLTF & {
    nodes: Mesh[];
  };