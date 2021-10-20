import React, { Component, useRef, useState, useEffect } from "react";
import { useQuery, gql, useApolloClient } from "@apollo/client";
import Button1 from "../../common/buttons/Button1View";
import BikeView from "../BikeBuilder/bikeView/BikeView";
import Carousel from "../../common/Carousel";
import { GET_ALL_BIKES } from '../../../graphql/queries/bikes';
import { GET_PRODUCT } from '../../../graphql/queries/products';


import { getNewRenderedBuildConfig } from '../../../utility/functions'

import { BikeBuild, BikeConfig } from "./../../../types/index";


const bikeBuilds = [
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
];



const DiscoverPage = () => {
  const apolloClient = useApolloClient();

  const { loading, error, data } = useQuery(GET_ALL_BIKES);

  const [currentBikeConfigs, setCurrentBikeConfigs] = useState<BikeConfig[]>([]);

  useEffect(() => {
    const allBikes = data?.getAllBikes;

    console.log(allBikes)
    

    if (allBikes) {
      const newCurrentBikes: BikeConfig[] = [];

      allBikes.map((bike: any) => {
        const bikeParts = []
        const bikePartIds = bike.products

        bikePartIds.forEach(async (bikePartId: string) => {
          console.log("part-id =", bikePartId)
          const result = await apolloClient.query({
            query: GET_PRODUCT,
            variables: {
              id: bikePartId,
            },
          })
          console.log(result)
          // 1. Get bike part info from DB
          // 2: Push to bikeParts
        })

        // const bikeRenderConfig: BikeConfig = getNewRenderedBuildConfig();
        
        // newCurrentBikes.push(bikeRenderConfig)
      })

      setCurrentBikeConfigs(newCurrentBikes)
    } 

  }, [loading])

  useEffect(() => {
    console.log(error)
  }, [error])

  let numberOfObjects = bikeBuilds.length;
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
};

export default DiscoverPage;
