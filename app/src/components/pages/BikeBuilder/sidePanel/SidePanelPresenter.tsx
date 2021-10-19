import { useEffect, useState } from 'react';

import { Product } from '../../../../types';
import SidePanelView from './SidePanelView';

import Framemodel from './../../../../resources/testGeometry/bikeFrame.gltf';
import FrontWheelModel from './../../../../resources/testGeometry/frontWheel.gltf';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleProductInBuild } from '../../../../redux/actions/currentBuild';
import { changeProductType } from '../../../../redux/actions/currentProductType';

const models = {
	qwe: Framemodel,
};

const totNumberOfTypes = 4;

const frameProducts: Product[] = [
	{
		id: 'qwe',
		modelSrc: Framemodel,
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: 'frame',
	},
	{
		id: 'weqweqwe',
		modelSrc: Framemodel,
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: 'frame',
	},
	{
		id: 'adjjkqwekjqwe',
		modelSrc: Framemodel,
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 1,
		numReviews: 17,
		price: 804,
		imgLink: 'https://www.bike-components.de/assets/p/i/1280x960/386566.jpg',
		type: 'frame',
	},
	{
		id: '123jo1k2josd',
		modelSrc: Framemodel,
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: 'frame',
	},
	{
		id: 'asdjlq2kj3',
		modelSrc: Framemodel,
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: 'frame',
	},
];

const wheelProducts: Product[] = [
	{
		id: 'qwdqwe12312e',
		modelSrc: FrontWheelModel,
		name: 'Super fancy wheel',
		brand: 'Cool',
		grade: 5,
		numReviews: 2,
		price: 750,
		imgLink:
			'https://cdnm.bike-discount.de/media/org/orgb_D/orgid_78/thumbs/740591_5949415.jpg',
		type: 'wheel',
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
		if (currentProductType === 'frame') {
			setProductsToShow(frameProducts);
		} else if (currentProductType === 'wheel') {
			setProductsToShow(wheelProducts);
		}
	}, [currentProductType]);

	const currentProductTypeUpdateHandler = (
		changeTypeOption: 'previous' | 'next'
	) => {
		dispatch(changeProductType(changeTypeOption, undefined));
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
