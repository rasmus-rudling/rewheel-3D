import { BikeConfig, Product } from '../types/index';
import {
	GLTFResult,
	ComponentConfig,
	Anchor,
	Anchors,
} from '../types/three';

import { useGLTF } from '@react-three/drei';
import { modelsAndImages } from './models';

export const convertStringToCamelCase = (stringToConvert: string) => {
	return stringToConvert.replace(
		/(?:^\w|[A-Z]|\b\w|\s+)/g,
		function (match, index) {
			if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
			return index === 0 ? match.toLowerCase() : match.toUpperCase();
		}
	);
};

export const capitalizeFirstLetter = (stringToConvert: string) => {
	return stringToConvert.charAt(0).toUpperCase() + stringToConvert.slice(1);
};

export const getNewRenderedBuildConfig = (products: Product[]) => {
	const bikeConfig: BikeConfig = {};
	console.log("products", products)
	products.forEach((product: Product) => {
		const productGLTF = useGLTF(
			modelsAndImages[product.product_id].model
		) as GLTFResult;

		const componentConfig = {} as ComponentConfig;
		const anchors: Anchors = {};
		let partType = '';

		Object.values(productGLTF.nodes).forEach((key) => {
			if (key.type === 'Object3D') {
				const anchor: Anchor = {
					position: key.position,
					rotation: key.rotation,
				};
				anchors[key.name] = anchor;
			}
			if (key.type === 'Mesh') {
				const material = key.material as THREE.MeshStandardMaterial;
				partType = key.name;
				componentConfig.geometry = key.geometry;
				componentConfig.color = material.color;
			}
		});

		componentConfig.anchors = anchors;
		bikeConfig[partType] = componentConfig;
	});

	return bikeConfig;
};