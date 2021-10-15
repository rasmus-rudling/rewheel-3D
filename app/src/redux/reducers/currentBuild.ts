import { BikeBuild, Product } from '../../types';

interface Action {
	type: 'TOGGLE_PRODUCT';
	data: {
		newProduct: Product;
	};
}

const initBuild: BikeBuild = {
	products: [],
	totalPrice: 0,
};

const currentBuildReducers = (state = initBuild, { type, data }: Action) => {
	switch (type) {
		case 'TOGGLE_PRODUCT':
			let oldProducts = [...state.products];

			const newProductAlreadyInBuild = oldProducts.some(
				(product) => product.id === data.newProduct.id
			);

			let oldProductsCleared = oldProducts.filter(
				(product) => product.type.name !== data.newProduct.type.name
			);

			if (!newProductAlreadyInBuild) {
				oldProductsCleared.push(data.newProduct);
			}

			let newTotPrice;

			if (oldProductsCleared.length > 0) {
				const totPriceReducer = (totPrice: number, currentPrice: number) =>
					totPrice + currentPrice;
				const productPrices = oldProductsCleared.map(
					(product) => product.price
				);
				newTotPrice = productPrices.reduce(totPriceReducer);
			} else {
				newTotPrice = 0;
			}

			let newBuild = {
				products: oldProductsCleared,
				totalPrice: newTotPrice,
			};

			return newBuild;
		default:
			return state;
	}
};

export default currentBuildReducers;
