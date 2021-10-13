import React, { useState, useContext, createContext, useEffect } from 'react';

import { BikeBuild, Product, ProductType } from '../types';

const CurrentProductTypeContext = createContext<ProductType>({
	name: 'frame',
	idx: 0,
});
const CurrentProductTypeUpdateContext = createContext<
	(changeTypeOption: 'previous' | 'next') => void
>(() => null);

export const useCurrentProductType = () => {
	return useContext(CurrentProductTypeContext);
};

export const useCurrentProductTypeUpdate = () => {
	return useContext(CurrentProductTypeUpdateContext);
};

const CurrentProductTypeProvider: React.FC = ({ children }) => {
	const [currentProductType, seturrentProductType] = useState<ProductType>({
		name: 'frame',
		idx: 0,
	});

	const setNewCurrentProductType = (changeTypeOption: 'previous' | 'next') => {
		const possibleProductTypes = ['frame', 'wheel', 'handle bar', 'saddle'];

		const currentIdx = currentProductType.idx;
		let newIdx;

		if (changeTypeOption === 'previous') {
			newIdx = Math.max(0, currentIdx - 1);
		} else {
			newIdx = Math.min(possibleProductTypes.length - 1, currentIdx + 1);
		}

		let newProductType: 'frame' | 'wheel' | 'handle bar' | 'saddle';

		if (newIdx === 0) {
			newProductType = 'frame';
		} else if (newIdx === 1) {
			newProductType = 'wheel';
		} else if (newIdx === 2) {
			newProductType = 'saddle';
		} else {
			newProductType = 'handle bar';
		}

		seturrentProductType({
			name: newProductType,
			idx: newIdx,
		});
	};

	return (
		<CurrentProductTypeContext.Provider value={currentProductType}>
			<CurrentProductTypeUpdateContext.Provider
				value={setNewCurrentProductType}
			>
				{children}
			</CurrentProductTypeUpdateContext.Provider>
		</CurrentProductTypeContext.Provider>
	);
};

export default CurrentProductTypeProvider;
