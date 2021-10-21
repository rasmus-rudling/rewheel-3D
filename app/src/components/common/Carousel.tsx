import { Component, useRef, useState, useEffect } from 'react';
import BikeView from '../pages/BikeBuilder/bikeView/BikeView';

import { BikeBuild, BikeConfig, Product } from '../../types/index';
import { useGLTF } from '@react-three/drei';
import { modelsAndImages } from '../../utility/models';
import { getNewRenderedBuildConfig } from '../../utility/functions';

interface Props {
	index: number;
	allBikes: any[];
	allProducts: Product[];
}

const Carousel = ({ index, allBikes, allProducts }: Props) => {
	const [bikeConfigs, setBikeConfigs] = useState<BikeConfig[]>([]);

	for (let i = 1; i < 14; i++) {
		useGLTF.preload(modelsAndImages[i].model);
	}

	useEffect(() => {
		if (allBikes && allProducts) {
			if (allBikes.length !== 0 && allProducts.length !== 0) {
				const newBikeConfig: BikeConfig[] = [];

				allBikes.forEach((bike) => {
					const bikeProductIds: string[] = bike.products;

					const currentBikeParts: Product[] = [];

					bikeProductIds.forEach((productId: string) => {
						const bikePart =
							allProducts.find(
								(currentProduct: Product) =>
									currentProduct.product_id === productId
							) || allProducts[0];

						currentBikeParts.push(bikePart);
					});

					const currentBikeConfig: BikeConfig =
						getNewRenderedBuildConfig(currentBikeParts);

					newBikeConfig.push(currentBikeConfig);
				});

				setBikeConfigs(newBikeConfig);
			}
		}
	}, [allBikes]);

	const mainObject = (
		<div className="w-2/4 px-2 h-80">
			<BikeView bikeConfig={bikeConfigs[index]} />
		</div>
	);

	const leftSideObject = (
		<div className="w-1/4 h-3/6 px-2">
			<BikeView bikeConfig={bikeConfigs[index - 1]} />
		</div>
	);

	const rightSideObject = (
		<div className="w-1/4 h-3/6 px-2">
			<BikeView bikeConfig={bikeConfigs[index + 1]} />
		</div>
	);

	return (
		<div className=" flex justify-center items-center w-full h-4/6">
			{index > 0 && leftSideObject}
			{mainObject}
			{index < allBikes.length - 1 && rightSideObject}
		</div>
	);
};

export default Carousel;
