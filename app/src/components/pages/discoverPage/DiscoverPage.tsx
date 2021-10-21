import CustomButton from '../../common/buttons/CustomButtonView';
import Carousel from '../../common/carousel/CarouselPresenter';
import { GET_ALL_BIKES } from '../../../graphql/queries/bikes';
import React, { useState, useEffect } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';

import { GET_ALL_PRODUCTS } from '../../../graphql/queries/products';

import { BikeBuild, Product } from './../../../types/index';
import { GET_ALL_USERS_NAME_AND_IMG } from '../../../graphql/queries/users';

export interface CreatorsInfo {
	[creatorEmail: string]: {
		imgUrl: string;
		firstName: string;
	};
}

export interface UserQuery {
	email: string;
	firstName: string;
	imgUrl: string;
}

const DiscoverPage = () => {
	const bikesFetchInfo = useQuery(GET_ALL_BIKES);
	const productsFetchInfo = useQuery(GET_ALL_PRODUCTS);
	const usersNameAndImg = useQuery(GET_ALL_USERS_NAME_AND_IMG);

	const [allBikes, setAllBikes] = useState<BikeBuild[]>([]);
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [index, setIndex] = useState(0);
	const [creatorsInfo, setCreatorsInfo] = useState<CreatorsInfo>({});

	useEffect(() => {
		if (bikesFetchInfo.data && productsFetchInfo.data && usersNameAndImg.data) {
			const newAllBikes = bikesFetchInfo.data.getAllBikes;
			const allProducts = productsFetchInfo.data.getAllProducts;
			const allUsersNameAndImg: UserQuery[] = usersNameAndImg.data.getAllUsers;
			console.log(allUsersNameAndImg);
			console.log(allUsersNameAndImg);

			const newCreatorsInfo: CreatorsInfo = {};

			allUsersNameAndImg.forEach((user: UserQuery) => {
				newCreatorsInfo[user.email] = {
					firstName: user.firstName,
					imgUrl: user.imgUrl,
				};
			});

			setCreatorsInfo(newCreatorsInfo);
			setIndex(Math.floor(newAllBikes.length / 2));
			setAllBikes(newAllBikes);
			setAllProducts(allProducts);
		}
	}, [bikesFetchInfo.data, productsFetchInfo.data, usersNameAndImg.data]);

	const nextProperty = () => {
		setIndex(index + 1);
	};

	const prevProperty = () => {
		setIndex(index - 1);
	};

	useEffect(() => {
		console.log(allBikes);
	}, [allBikes]);

	return (
		<div className="w-full h-full mt-10 mb-5">
			<Carousel
				allBikes={allBikes}
				allProducts={allProducts}
				index={index}
				creatorsInfo={creatorsInfo}
			/>

			<div className="flex justify-center">
				<CustomButton
					color="blue"
					onClickHandler={() => prevProperty()}
					disabled={index === 0}
					text="Föregående"
					addBorder={true}
					blackTextColor={false}
				/>

				<CustomButton
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
