import { useEffect } from 'react';
import { BikeConfig } from '../../../../../types';
import * as THREE from 'three';
import BikePart from '../BikePartView';
import BikeBuildView from './BikeBuildView'

interface Props {
	bikeConfig: BikeConfig;
}

const BikeBuildPresenter = ({ bikeConfig }: Props) => {
	const bikeParts: JSX.Element[] = [];

	if (bikeConfig) {
		Object.keys(bikeConfig).forEach((key) => {
			let position = {} as THREE.Vector3;
			let rotation = {} as THREE.Euler;

			switch (key) {
				case 'FRAME':
					position = new THREE.Vector3();
					rotation = new THREE.Euler();
					bikeParts.push(
						<BikePart
							geometry={bikeConfig[key].geometry}
							position={position}
							orientation={rotation}
							color={bikeConfig[key].color}
						/>
					);
					break;
				case 'WHEEL':
					position = bikeConfig['FRAME'].anchors['FRONTWHEEL'].position;
					rotation = bikeConfig['FRAME'].anchors['FRONTWHEEL'].rotation;
					bikeParts.push(
						<BikePart
							geometry={bikeConfig[key].geometry}
							position={position}
							orientation={rotation}
							color={bikeConfig[key].color}
						/>
					);
					position = bikeConfig['FRAME'].anchors['BACKWHEEL'].position;
					rotation = bikeConfig['FRAME'].anchors['BACKWHEEL'].rotation;
					bikeParts.push(
						<BikePart
							geometry={bikeConfig[key].geometry}
							position={position}
							orientation={rotation}
							color={bikeConfig[key].color}
						/>
					);
					break;
				case 'HANDLEBAR':
					position = bikeConfig['FRAME'].anchors['HANDLEBAR'].position;
					rotation = bikeConfig['FRAME'].anchors['HANDLEBAR'].rotation;
					bikeParts.push(
						<BikePart
							geometry={bikeConfig[key].geometry}
							position={position}
							orientation={rotation}
							color={bikeConfig[key].color}
						/>
					);
					break;
				case 'SEATPOST':
					position = bikeConfig['FRAME'].anchors['SEATPOST'].position;
					rotation = bikeConfig['FRAME'].anchors['SEATPOST'].rotation;
					bikeParts.push(
						<BikePart
							geometry={bikeConfig[key].geometry}
							position={position}
							orientation={rotation}
							color={bikeConfig[key].color}
						/>
					);
					break;
				default:
					console.log(
						'This type does not exist, check correctness of product type names.'
					);
			}
		});
	}

	return (
		<BikeBuildView bikeParts={bikeParts} />
	);
};

export default BikeBuildPresenter;
