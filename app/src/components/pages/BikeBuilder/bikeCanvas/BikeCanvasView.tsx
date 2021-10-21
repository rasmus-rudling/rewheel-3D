import React, { useRef, Suspense, useState, useEffect } from 'react';
import { useGLTF, OrbitControls, Plane, ContactShadows, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import ComposedBikeBuild from './bikeBuild/BikeBuildPresenter';

import { BikeConfig } from '../../../../types';

type Props = {
	// Can't be interface since base type includes optinal arguments
	bikeConfig: BikeConfig;
};

const BikeView = ({ bikeConfig }: Props) => {
	// const currentBikeBuild = useCurrentBuild();

	return (
		<Canvas
			dpr={[1, 2]}
			shadows
			camera={{ position: [-4, 2, -4], fov: 45 }}
			className="bg-gray-400"
		>
			{/* <ambientLight intensity={0.5} /> */}
			<pointLight position={[-1.16, 1.262, -2.143]} castShadow={true} />
			<pointLight position={[0.442, 0.868, 1.574]} castShadow={true} />
			<pointLight position={[-2.427, 2.07, 1.574]} castShadow={true} />
			{/* <spotLight position={[3.42, 10, 2.49]} castShadow={true}/> */}
			{/* <Plane receiveShadow={true} material={new THREE.MeshStandardMaterial()} scale={new THREE.Vector3(4, 4, 4)} rotation={new THREE.Euler(-Math.PI/2, 0, 0)} position={new THREE.Vector3(0, -1.2, 0)} /> */}

			<Suspense fallback={<div>Loading... </div>}>
				<ComposedBikeBuild bikeConfig={bikeConfig} />
			</Suspense>
			<OrbitControls
				enablePan={false}
				enableZoom={false}
				minPolarAngle={Math.PI / 2.5}
				maxPolarAngle={Math.PI / 2.5}
			/>
			<Environment preset="city" />
			<ContactShadows rotation-x={Math.PI / 2} position={[0, -1.2, 0]} opacity={1} width={20} height={20} blur={1.5} far={4.5}  />
		</Canvas>
	);
};

export default BikeView;
