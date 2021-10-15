

const BikePart = (props: JSX.IntrinsicElements["group"]) => {
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