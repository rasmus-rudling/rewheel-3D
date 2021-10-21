import React, { Component, useRef, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, gql } from '@apollo/client';
import { GET_MY_BIKES } from '../../../graphql/queries/bikes';
import Carousel from '../../common/carousel/CarouselPresenter';
import { BikeBuild, BikeConfig, Product } from './../../../types/index';
import {
	GET_ALL_PRODUCTS,
	GET_PRODUCT,
} from '../../../graphql/queries/products';

import Button1 from '../../common/buttons/Button1View';

const ProfilePage = () => {
	const { user, isAuthenticated } = useAuth0();
	const [allBikes, setAllBikes] = useState<BikeBuild[]>([]);
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [index, setIndex] = useState(0);

	const productsFetchInfo = useQuery(GET_ALL_PRODUCTS);
	const bikesFetchInfo = useQuery(GET_MY_BIKES, {
		variables: { email: user?.email },
	});

	useEffect(() => {
		if (bikesFetchInfo.data) {
			let newMyBikes = bikesFetchInfo.data.getMyBikes;
			const allProducts = productsFetchInfo.data.getAllProducts;
			console.log(newMyBikes);
			setIndex(Math.floor(newMyBikes.length / 2));
			setAllBikes(newMyBikes);
			setAllProducts(allProducts);
		}
	}, [bikesFetchInfo.data, productsFetchInfo.data]);

	const nextProperty = () => {
		setIndex(index + 1);
	};

	const prevProperty = () => {
		setIndex(index - 1);
	};

	if (isAuthenticated && user) {
		return (
			<div className="w-full">
				<div className="flex flex-col mt-5 items-center">
					<img className="w-20 m-2 rounded-full" src={user.picture} />
					<span className="m-1 font-medium text-2xl">
						Välkommen {user.email}!
					</span>
					<p className="m-2 font-light">
						Här kan du se de cyklar du har sparat.
					</p>
				</div>

				<div className="w-full flex flex-col">
					<Carousel
						allBikes={allBikes}
						allProducts={allProducts}
						index={index}
					/>

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
			</div>
		);
	} else {
		return (
			<div className="flex flex-col mt-10 items-center">
				<p className={'font-medium text-2xl'}>
					Du måste vara inloggad för att se den här sidan.
				</p>
			</div>
		);
	}
};

export default ProfilePage;
