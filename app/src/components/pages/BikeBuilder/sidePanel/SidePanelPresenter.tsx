import { useEffect, useState } from 'react';

import { Product } from '../../../../types';
import SidePanelView from './SidePanelView';

import dropbarBlack from './../../../../resources/testGeometry/models/dropbarBlack.gltf';
import dropbarBlue from './../../../../resources/testGeometry/models/dropbarBlue.gltf';
import frameHighBlack from './../../../../resources/testGeometry/models/frameHighBlack.gltf';
import frameHighRed from './../../../../resources/testGeometry/models/frameHighRed.gltf';
import frameLowRed from './../../../../resources/testGeometry/models/frameLowBlack.gltf';
import frameLowTeal from './../../../../resources/testGeometry/models/frameLowTeal.gltf';
import saddleBlack from './../../../../resources/testGeometry/models/saddleBlack.gltf';




import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleProductInBuild } from '../../../../redux/actions/currentBuild';
import { changeProductType } from '../../../../redux/actions/currentProductType';

const totNumberOfTypes = 4;

const frameProducts: Product[] = [
	{
		id: '111',
		modelSrc: 'https://drive.google.com/uc?export=view&id=1bu4MJPpKljOpDxd_8Hs40gjwlk9pOAWP',
		name: 'Black Turbo',
		brand: 'Specialized',
		grade: 4,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://drive.google.com/uc?export=view&id=1am3DpGgcz-vTSF76J2jMo94_qeOU_eZX',
		type: 'frame',
	},
	{
		id: '222',
		modelSrc: FrameRed,
		name: 'Super Speed Red',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: 'frame',
	}
];

const wheelProducts: Product[] = [
	{
		id: '333',
		modelSrc: FrontWheelWhite,
		name: 'Super fancy wheel',
		brand: 'Wheel co',
		grade: 4,
		numReviews: 2,
		price: 850,
		imgLink:
			'https://cdnm.bike-discount.de/media/org/orgb_D/orgid_78/thumbs/740591_5949415.jpg',
		type: 'wheel',
	},
	{
		id: '999',
		modelSrc: BackWheelWhite,
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

const handlebarProducts: Product[] = [
	{
		id: '444',
		modelSrc: HandlebarBlack,
		name: 'Black Thunder',
		brand: '2Cool4School',
		grade: 5,
		numReviews: 2,
		price: 750,
		imgLink:
			'https://cdnm.bike-discount.de/media/org/orgb_D/orgid_78/thumbs/740591_5949415.jpg',
		type: 'handle bar',
	},
];

const seatpostProducts: Product[] = [
	{
		id: '123',
		modelSrc: SeatpostBlue,
		name: 'Black Thunder',
		brand: '2Cool4School',
		grade: 5,
		numReviews: 2,
		price: 350,
		imgLink:
			'https://cdnm.bike-discount.de/media/org/orgb_D/orgid_78/thumbs/740591_5949415.jpg',
		type: 'saddle',
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
		} else if (currentProductType === 'handle bar') {
			setProductsToShow(handlebarProducts);
		} else if (currentProductType === 'saddle') {
			setProductsToShow(seatpostProducts);
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
