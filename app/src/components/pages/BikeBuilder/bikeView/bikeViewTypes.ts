export interface Anchor {
    position: THREE.Vector3;
    rotation: THREE.Euler;
};
  
export interface Anchors {
  [key: string]: Anchor;
};

export interface ComponentConfig {
  geometry: THREE.BufferGeometry;
  anchors: Anchors;
};

export interface BikeConfig {
  [key: string]: ComponentConfig;
};

// export interface Scene extends GLTF {
    
// }