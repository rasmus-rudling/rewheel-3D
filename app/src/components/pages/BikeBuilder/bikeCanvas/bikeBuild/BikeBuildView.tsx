import { useEffect } from 'react';
import { BikeConfig } from '../../../../../types';
import * as THREE from 'three';
import BikePart from '../BikePartView';

interface Props {
	bikeParts: JSX.Element[];
}

const BikeBuildPresenter = ({ bikeParts }: Props) => {
	return (
		<group name="bikeBuild" position={[0, -0.4, 0]}>
			{bikeParts.map((e) => e)}
		</group>
	);
};

export default BikeBuildPresenter;
