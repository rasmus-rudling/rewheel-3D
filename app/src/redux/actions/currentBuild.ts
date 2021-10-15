import { Product } from '../../types';

export const toggleProductInBuild = (newProduct: Product) => ({
	type: 'TOGGLE_PRODUCT',
	data: {
		newProduct: newProduct,
	},
});
