// type BikeCompProps = JSX.IntrinsicElements["group"] & {
//   name: string;
//   bikeConfig: BikeConfig;
//   setBikeConfig: React.Dispatch<React.SetStateAction<BikeConfig>>;
// };

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