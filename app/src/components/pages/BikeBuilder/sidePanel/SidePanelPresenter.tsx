import { useEffect, useState } from 'react';
import {
	useCurrentBuild,
	useCurrentBuildUpdate,
} from '../../../../contexts/CurrentBuildContext';
import {
	useCurrentProductType,
	useCurrentProductTypeUpdate,
} from '../../../../contexts/CurrentProductType';
import { Product } from '../../../../types';
import SidePanelView from './SidePanelView';

const frameProducts: Product[] = [
	{
		id: 'qwe',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: {
			name: 'frame',
			idx: 0,
		},
	},
	{
		id: 'weqweqwe',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: {
			name: 'frame',
			idx: 0,
		},
	},
	{
		id: 'adjjkqwekjqwe',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 1,
		numReviews: 17,
		price: 804,
		imgLink: 'https://www.bike-components.de/assets/p/i/1280x960/386566.jpg',
		type: {
			name: 'frame',
			idx: 0,
		},
	},
	{
		id: '123jo1k2josd',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: {
			name: 'frame',
			idx: 0,
		},
	},
	{
		id: 'asdjlq2kj3',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: {
			name: 'frame',
			idx: 0,
		},
	},
];

const wheelProducts: Product[] = [
	{
		id: 'qwdqwe12312e',
		modelSrc: '',
		name: 'Super fancy wheel',
		brand: 'Cool',
		grade: 5,
		numReviews: 2,
		price: 750,
		imgLink:
			'https://cdnm.bike-discount.de/media/org/orgb_D/orgid_78/thumbs/740591_5949415.jpg',
		type: {
			name: 'wheel',
			idx: 1,
		},
	},
];

const SidePanelPresenter = () => {
	const [productsToShow, setProductsToShow] =
		useState<Product[]>(frameProducts);
	const currentBuildUpdate = useCurrentBuildUpdate();
	const currentBuild = useCurrentBuild();

	const currentProductType = useCurrentProductType();
	const currentProductTypeUpdate = useCurrentProductTypeUpdate();

	const productCardClickHandler = (newProductForBuild: Product) => {
		currentBuildUpdate(newProductForBuild);
	};

	useEffect(() => {
		if (currentProductType.name === 'frame') {
			setProductsToShow(frameProducts);
		} else if (currentProductType.name === 'wheel') {
			setProductsToShow(wheelProducts);
		}
	}, [currentProductType]);

	const currentProductTypeUpdateHandler = (
		changeTypeOption: 'previous' | 'next'
	) => {
		currentProductTypeUpdate(changeTypeOption);
	};

	return (
		<SidePanelView
			currentBuild={currentBuild}
			currentProductCards={productsToShow}
			productCardClickHandler={productCardClickHandler}
			currentProductTypeUpdateHandler={currentProductTypeUpdateHandler}
		/>
	);
};

export default SidePanelPresenter;
