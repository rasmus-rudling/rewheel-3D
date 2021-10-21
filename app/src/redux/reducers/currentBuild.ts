import { BikeBuild, Product } from '../../types';
import { getNewRenderedBuildConfig } from '../../utility/functions'

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
		(product) => product.product_id === newProduct.product_id
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
