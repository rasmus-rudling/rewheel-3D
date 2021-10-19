import { useEffect } from 'react';
import { BikeConfig } from '../../../../types';
import * as THREE from 'three';
import BikePart from './BikePart';

interface Props {
	bikeConfig: BikeConfig;
}

const ComposedBikeBuild = ({ bikeConfig }: Props) => {
	const bikeParts: JSX.Element[] = [];

	// useEffect(() => {
	console.log('Bikeconfig in composedbuild', bikeConfig);
	// }, [bikeConfig]);

	Object.keys(bikeConfig).forEach((key) => {
		let position = {} as THREE.Vector3;
		let rotation = {} as THREE.Euler;

		switch (key) {
			case 'FRAME':
				position = new THREE.Vector3();
				rotation = new THREE.Euler();
				break;
			case 'FRONTWHEEL':
				position = bikeConfig['FRAME'].anchors['FRONTWHEEL'].position;
				rotation = bikeConfig['FRAME'].anchors['FRONTWHEEL'].rotation;
				break;
			case 'BACKWHEEL':
				position = bikeConfig['FRAME'].anchors['BACKWHEEL'].position;
				rotation = bikeConfig['FRAME'].anchors['BACKWHEEL'].rotation;
				break;
			case 'HANDLEBAR':
				position = bikeConfig['FRAME'].anchors['HANDLEBAR'].position;
				rotation = bikeConfig['FRAME'].anchors['HANDLEBAR'].rotation;
				break;
			case 'SEATPOST':
				position = bikeConfig['FRAME'].anchors['SEATPOST'].position;
				rotation = bikeConfig['FRAME'].anchors['SEATPOST'].rotation;
				break;
			default:
				console.log(
					'This type does not exist, check correctness of product type names.'
				);
		}

		bikeParts.push(
			<BikePart
				key={'bike part' + key}
				geometry={bikeConfig[key].geometry}
				position={position}
				orientation={rotation}
			/>
		);
	});

	return (
		<group name="bikeBuild" position={[0, -0.4, 0]}>
			{bikeParts.map((e) => e)}
		</group>
	);
};

export default ComposedBikeBuild;
