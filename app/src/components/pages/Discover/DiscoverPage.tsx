<<<<<<< HEAD
import React, { Component, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Button1 from "../../common/buttons/Button1View";
import BikeView from "../BikeBuilder/bikeView/BikeView";
import Carousel from "../../common/Carousel";
import { GET_ALL_BIKES } from "../../../graphql/queries/bikes";

import { BikeBuild } from "./../../../types/index";

// const GetAllBikes = () => {
//   const { loading, error, data } = useQuery(GET_ALL_BIKES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error when querying API :(</p>;

//   return data.getAllBikes.map(
//     ({ id, color }: { id: String; color: String }) => (
//       <div>
//         <p>
//           {id}: {color}
//         </p>
//       </div>
//     )
//   );
// };

const bikeBuilds = [
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
];

const DiscoverPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BIKES);

  let bikes = data;

  console.log(bikes);
  console.log("hej");

  // let numberOfObjects = bikes.length;
  let numberOfObjects = 5;
  const [index, setIndex] = useState(Math.floor(numberOfObjects / 2));

  const nextProperty = () => {
    setIndex(index + 1);

    //console.log(index);
  };

  const prevProperty = () => {
    setIndex(index - 1);

    //console.log(index);
  };

  return (
    <div className="w-full h-full mt-10 mb-5">
      <Carousel bikeBuilds={bikeBuilds} index={index} />
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
          disabled={index === numberOfObjects - 1}
          text="Nästa"
          addBorder={true}
          filled={true}
          blackTextColor={false}
        />
      </div>
    </div>
  );
=======
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

import { BikeConfig, Product } from './../../../types/index';

const DiscoverPage = () => {
	const bikesFetchInfo = useQuery(GET_ALL_BIKES);
	const productsFetchInfo = useQuery(GET_ALL_PRODUCTS);

	const [currentBikeConfigs, setCurrentBikeConfigs] = useState<BikeConfig[]>(
		[]
	);

	useEffect(() => {
		if (!bikesFetchInfo.loading && !productsFetchInfo.loading) {
			const allBikes = bikesFetchInfo.data.getAllBikes;
			const allProducts = productsFetchInfo.data.getAllProducts;

			const newCurrentConfigs: BikeConfig[] = [];

			allBikes.forEach((bike: any) => {
				const currentBikeParts: Product[] = [];
				const bikePartIds = bike.products;

				bikePartIds.forEach((bikePartId: string) => {
					console.log(bikePartId);
					const bikePart = allProducts.find(
						(currentProduct: Product) =>
							currentProduct.product_id === bikePartId
					);

					console.log(bikePart);

					currentBikeParts.push(bikePart);
				});

				const currentBikeConfig: BikeConfig =
					getNewRenderedBuildConfig(currentBikeParts);

				newCurrentConfigs.push(currentBikeConfig);
			});

			setCurrentBikeConfigs(newCurrentConfigs);
		}
	}, [bikesFetchInfo, productsFetchInfo]);

	let numberOfObjects = currentBikeConfigs.length;
	const [index, setIndex] = useState(Math.floor(numberOfObjects / 2));

	const nextProperty = () => {
		setIndex(index + 1);
	};

	const prevProperty = () => {
		setIndex(index - 1);
	};

	return (
		<div className="w-full h-full mt-10 mb-5">
			<Carousel bikeConfigs={currentBikeConfigs} index={index} />
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
					disabled={index === numberOfObjects - 1}
					text="Nästa"
					addBorder={true}
					filled={true}
					blackTextColor={false}
				/>
			</div>
		</div>
	);
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de
};

export default DiscoverPage;
