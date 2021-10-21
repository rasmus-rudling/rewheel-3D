import React, { Component, useRef, useState, useEffect } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import Button1 from '../../common/buttons/Button1View';
import BikeView from '../BikeBuilder/bikeView/BikeView';
import Carousel from '../../common/Carousel';
import { GET_ALL_BIKES } from '../../../graphql/queries/bikes';
import {
	GET_ALL_PRODUCTS,
	GET_PRODUCT,
} from '../../../graphql/queries/products';

import { getNewRenderedBuildConfig } from '../../../utility/functions';

import { BikeBuild, BikeConfig, Product } from './../../../types/index';

const DiscoverPage = () => {
	const bikesFetchInfo = useQuery(GET_ALL_BIKES);
	const productsFetchInfo = useQuery(GET_ALL_PRODUCTS);

	const [allBikes, setAllBikes] = useState<BikeBuild[]>([]);
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (bikesFetchInfo.data && productsFetchInfo.data) {
			const newAllBikes = bikesFetchInfo.data.getAllBikes;
			const allProducts = productsFetchInfo.data.getAllProducts;

			setIndex(Math.floor(newAllBikes.length / 2));
			setAllBikes(newAllBikes);
			setAllProducts(allProducts);
		}
	}, [bikesFetchInfo.data, productsFetchInfo.data]);

	const nextProperty = () => {
		setIndex(index + 1);
	};

	const prevProperty = () => {
		setIndex(index - 1);
	};

	return (
		<div className="w-full h-full mt-10 mb-5">
			<Carousel allBikes={allBikes} allProducts={allProducts} index={index} />

			<div className="flex justify-center">
				<Button1
					color="blue"
					onClickHandler={() => prevProperty()}
					disabled={index === 0}
					text="Föregående"
					addBorder={true}
					blackTextColor={false}
				/>
				<Button1
					color="blue"
					onClickHandler={() => nextProperty()}
					disabled={index === allBikes.length - 1}
					text="Nästa"
					addBorder={true}
					filled={true}
					blackTextColor={false}
				/>
			</div>
		</div>
	);
};

export default DiscoverPage;
