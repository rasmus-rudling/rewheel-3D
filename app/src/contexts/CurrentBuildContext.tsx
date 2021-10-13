import React, { useState, useContext, createContext, useEffect } from 'react';

import { Product } from '../types';

const CurrentBuildContext = createContext<Product[]>([]);
const CurrentBuildUpdateContext = createContext<
	(newProduct: Product) => void
>(() => null);

export const useCurrentBuild = () => {
	return useContext(CurrentBuildContext);
};

export const useCurrentBuildUpdate = () => {
	return useContext(CurrentBuildUpdateContext);
};

const CurrentBuildProvider: React.FC = ({ children }) => {
	const [currentBuild, setCurrentBuild] = useState<Product[]>([]);

	const addNewProduct = (newProduct: Product) => {
        let oldBuild = [...currentBuild];
        let oldBuildCleared = oldBuild.filter(product => product.type !== newProduct.type);

        oldBuildCleared.push(newProduct);

        setCurrentBuild(oldBuildCleared);
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
