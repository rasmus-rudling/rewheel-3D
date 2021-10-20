import { useEffect, useState } from 'react';

import { Product, User } from '../../../../types';
import SidePanelView from './SidePanelView';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleProductInBuild } from '../../../../redux/actions/currentBuild';
import { changeProductType } from '../../../../redux/actions/currentProductType';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../../../graphql/queries/products';
import { SAVE_NEW_BIKE } from '../../../../graphql/mutations/bikeBuilds';

const totNumberOfTypes = 4;

const SidePanelPresenter = () => {
	const [addBike, saveBikeObj] = useMutation(SAVE_NEW_BIKE);

	const loggedInUser: User = useSelector(
		(state: RootStateOrAny) => state.loggedInUser
	);

	const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

	const [allProducts, setAllProducts] = useState<Product[]>([]);

	const [productsToShow, setProductsToShow] = useState<Product[]>([]);

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
		const allProductsFromDB = data?.getAllProducts;

		let allProductsCopy = allProductsFromDB ? [...allProductsFromDB] : [];

		setAllProducts(allProductsCopy);
	}, [loading]);


	useEffect(() => {
		const relevantProducts = allProducts.filter((product) => {
			return product.type.toLowerCase() === currentProductType.toLowerCase();
		});

		setProductsToShow(relevantProducts);
	}, [currentProductType, allProducts]);

	const currentProductTypeUpdateHandler = (
		changeTypeOption: 'previous' | 'next'
	) => {
		dispatch(changeProductType(changeTypeOption, undefined));
	};

	const saveBikeHandler = () => {
		if (currentBuild.products.length !== 4) return;

		const productIDs: Product[] = currentBuild.products.map(
			(product: Product) => product.product_id
		);

		addBike({
			variables: {
				email: loggedInUser.email,
				products: productIDs,
				createdBy: loggedInUser.email,
			},
		});
	};

	return (
		<SidePanelView
			currentBuild={currentBuild}
			currentProductCards={productsToShow}
			productCardClickHandler={productCardClickHandler}
			currentProductTypeUpdateHandler={currentProductTypeUpdateHandler}
			currentProductType={currentProductType}
			totNumberOfTypes={totNumberOfTypes}
			saveBikeHandler={saveBikeHandler}
		/>
	);
};

export default SidePanelPresenter;
