import { useEffect, useState } from 'react';

import { Product, ProductType } from '../../../../types';
import SidePanelView from './SidePanelView';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleProductInBuild } from '../../../../redux/actions/currentBuild';
import { changeProductType } from '../../../../redux/actions/currentProductType';

const totNumberOfTypes = 4;

const frameProductType: ProductType = {
	name: 'frame',
	idx: 0,
	numberOfTypes: totNumberOfTypes,
};

const wheelProductType: ProductType = {
	name: 'wheel',
	idx: 1,
	numberOfTypes: totNumberOfTypes,
};

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
		type: frameProductType,
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
		type: frameProductType,
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
		type: frameProductType,
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
		type: frameProductType,
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
		type: frameProductType,
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
		type: wheelProductType,
	},
];

const SidePanelPresenter = () => {
	const [productsToShow, setProductsToShow] =
		useState<Product[]>(frameProducts);

	const dispatch = useDispatch();

	const currentBuild = useSelector(
		(state: RootStateOrAny) => state.currentBuild
	);

	const currentProductType = useSelector(
		(state: RootStateOrAny) => state.currentProductType
	);

	const productCardClickHandler = (newProductForBuild: Product) => {
		dispatch(toggleProductInBuild(newProductForBuild));
	};

	useEffect(() => {
		console.log(currentProductType);
		if (currentProductType.name === 'frame') {
			setProductsToShow(frameProducts);
		} else if (currentProductType.name === 'wheel') {
			setProductsToShow(wheelProducts);
		}
	}, [currentProductType]);

	const currentProductTypeUpdateHandler = (
		changeTypeOption: 'previous' | 'next'
	) => {
		dispatch(changeProductType(changeTypeOption));
	};

	return (
		<SidePanelView
			currentBuild={currentBuild}
			currentProductCards={productsToShow}
			productCardClickHandler={productCardClickHandler}
			currentProductTypeUpdateHandler={currentProductTypeUpdateHandler}
			currentProductType={currentProductType}
			totNumberOfTypes={totNumberOfTypes}
		/>
	);
};

export default SidePanelPresenter;
