import { BikeBuild, BikeConfig, Product } from '../../types';
import {
	GLTFResult,
	ComponentConfig,
	Anchor,
	Anchors,
} from '../../types/three';

import { useGLTF } from '@react-three/drei';

interface Action {
	type: 'TOGGLE_PRODUCT';
	data: {
		newProduct: Product;
	};
}


const initBuild: BikeBuild = {
	products: [],
	totalPrice: 0,
	renderedBuildConfig: {},
};

const getNewBuild = (products: Product[], newProduct: Product) => {
	let oldProducts = [...products];

	const newProductAlreadyInBuild = oldProducts.some(
		(product) => product.id === newProduct.id
	);

	const framExist = oldProducts.some((product) => product.type === 'frame');

	let oldProductsCleared = oldProducts.filter(
		(product) => product.type !== newProduct.type
	);

	if (
		(newProductAlreadyInBuild && newProduct.type === 'frame') ||
		(!framExist && newProduct.type !== 'frame')
	) {
		return {
			products: [],
			totalPrice: 0,
			renderedBuildConfig: {},
		};
	}

	if (!newProductAlreadyInBuild) {
		oldProductsCleared.push(newProduct);
	}

	let newTotPrice;

	if (oldProductsCleared.length > 0) {
		const totPriceReducer = (totPrice: number, currentPrice: number) =>
			totPrice + currentPrice;
		const productPrices = oldProductsCleared.map((product) => product.price);
		newTotPrice = productPrices.reduce(totPriceReducer);
	} else {
		newTotPrice = 0;
	}

	let newBuild = {
		products: oldProductsCleared,
		totalPrice: newTotPrice,
		renderedBuildConfig: {},
	};

	return newBuild;
};

const getNewRenderedBuildConfig = (products: Product[]) => {
  const bikeConfig: BikeConfig = {};

  products.forEach((product: Product) => {
    // console.log(scene)
    const productGLTF = useGLTF(product.modelSrc) as GLTFResult;
    console.log(productGLTF);

    const componentConfig = {} as ComponentConfig;
    const anchors: Anchors = {};
    let partType = "";

    Object.values(productGLTF.nodes).forEach((key) => {
      if (key.type === "Object3D") {
        const anchor: Anchor = {
          position: key.position,
          rotation: key.rotation,
        };
        anchors[key.name] = anchor;
      }
      if (key.type === "Mesh") {
        const material = key.material as THREE.MeshStandardMaterial
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

const currentBuildReducers = (state = initBuild, { type, data }: Action) => {
	switch (type) {
		case 'TOGGLE_PRODUCT':
			let newBuild: BikeBuild = getNewBuild(state.products, data.newProduct);

			const newRenderedBuildConfig = getNewRenderedBuildConfig(
				newBuild.products
			);

			newBuild.renderedBuildConfig = newRenderedBuildConfig;

			return newBuild;
		default:
			return state;
	}
};

export default currentBuildReducers;
