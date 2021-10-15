import React, { useState, useContext, createContext, useEffect } from 'react';

import { BikeBuild, Product } from '../types';

const CurrentBuildContext = createContext<BikeBuild>({
	products: [],
	totalPrice: 0,
});

const CurrentBuildUpdateContext = createContext<(newProduct: Product) => void>(
	() => null
);

export const useCurrentBuild = () => {
	return useContext(CurrentBuildContext);
};

export const useCurrentBuildUpdate = () => {
	return useContext(CurrentBuildUpdateContext);
};

const CurrentBuildProvider: React.FC = ({ children }) => {
	const [currentBuild, setCurrentBuild] = useState<BikeBuild>({
		products: [],
		totalPrice: 0,
	});

	const addNewProduct = (newProduct: Product) => {
		let oldProducts = [...currentBuild.products];

		const newProductAlreadyInBuild = oldProducts.some(
			(product) => product.id === newProduct.id
		);

		let oldProductsCleared = oldProducts.filter(
			(product) => product.type.name !== newProduct.type.name
		);

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

		setCurrentBuild({
			products: oldProductsCleared,
			totalPrice: newTotPrice,
		});
	};

	return (
		<CurrentBuildContext.Provider value={currentBuild}>
			<CurrentBuildUpdateContext.Provider value={addNewProduct}>
				{children}
			</CurrentBuildUpdateContext.Provider>
		</CurrentBuildContext.Provider>
	);
};

export default CurrentBuildProvider;
