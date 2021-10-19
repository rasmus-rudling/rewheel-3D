import { useEffect, useState } from 'react';

import { Product } from '../../../../types';
import SidePanelView from './SidePanelView';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleProductInBuild } from '../../../../redux/actions/currentBuild';
import { changeProductType } from '../../../../redux/actions/currentProductType';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../../../graphql/queries/products';

const totNumberOfTypes = 4;

interface ProductFromDB {
	product_id?: string;
	id?: string;
	name: string;
	brand: string;
	grade: number;
	numReviews: number;
	price: number;
	type: string;
}

const SidePanelPresenter = () => {
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
		let allProductsFiltered: Product[] = [];

		allProductsCopy.forEach((product: ProductFromDB) => {
			let productCopy: ProductFromDB = { ...product };

			productCopy.id = productCopy.product_id;
			delete productCopy.product_id;

			let filteredProduct = {
				id: productCopy.id ? productCopy.id : '',
				name: productCopy.name,
				brand: productCopy.brand,
				grade: productCopy.grade,
				numReviews: productCopy.numReviews,
				price: productCopy.price,
				type: productCopy.type,
			};

			allProductsFiltered.push(filteredProduct);
		});

		setAllProducts(allProductsFiltered);
	}, [loading]);

	useEffect(() => {
		const relevantProducts = allProducts.filter(
			(product) =>
				product.type.toLowerCase() === currentProductType.toLowerCase()
		);

		setProductsToShow(relevantProducts);
	}, [currentProductType, allProducts]);

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
