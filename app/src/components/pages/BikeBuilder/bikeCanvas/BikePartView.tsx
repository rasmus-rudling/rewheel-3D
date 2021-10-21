import * as THREE from 'three';
import { useRef } from 'react';

type Props = JSX.IntrinsicElements["group"] & {
  // Can't be interface since base type includes optinal arguments
  geometry: THREE.BufferGeometry;
  position: THREE.Vector3;
  orientation: THREE.Euler;
  color: THREE.Color;

};

const BikePartView = ({ geometry, position, orientation, color}: Props) => {
  const material = new THREE.MeshStandardMaterial({color: color, roughness: 0});

	const group = useRef<THREE.Mesh>();

	return (
		<group ref={group} dispose={null}>
			<mesh
				//name="FRAME"
				castShadow
				receiveShadow
				geometry={geometry}
				position={position}
				rotation={orientation}
				material={material}
			/>
		</group>
	);
};

export default BikePartView;
