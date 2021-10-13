import { useEffect } from 'react';
import {
	useCurrentBuild,
	useCurrentBuildUpdate,
} from '../../../../contexts/CurrentBuildContext';
import { Product } from '../../../../types';
import SidePanelView from './SidePanelView';

const currentProductCards: Product[] = [
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
		type: 'frame',
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
		type: 'frame',
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
		type: 'frame',
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
		type: 'frame',
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
		type: 'frame',
	},
];

const SidePanelPresenter = () => {
	const currentBuildUpdate = useCurrentBuildUpdate();
	const currentBuild = useCurrentBuild();

	const productCardClickHandler = (newProductForBuild: Product) => {
		currentBuildUpdate(newProductForBuild);
	};

	return (
		<SidePanelView
			currentBuild={currentBuild}
			currentProductCards={currentProductCards}
			productCardClickHandler={productCardClickHandler}
		/>
	);
};

export default SidePanelPresenter;
