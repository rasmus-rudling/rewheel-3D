import React, { Component, useRef, useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Button1 from "../../common/buttons/Button1View";
import BikeView from "../BikeBuilder/bikeView/BikeView";
import Carousel from "../../common/Carousel";
import { GET_ALL_BIKES } from '../../../graphql/queries/bikes';

import { getNewRenderedBuildConfig } from '../../../utility/functions'

import { BikeBuild, BikeConfig } from "./../../../types/index";


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

// type Bike {
//   id: ID!
//   products: [String]
//   createdBy: String
// }

const DiscoverPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BIKES);

  const [currentBikeConfigs, setCurrentBikeConfigs] = useState<BikeConfig[]>([]);

  useEffect(() => {
    const allBikes = data.getAllBikes;

    if (allBikes) {
      const newCurrentBikes: BikeConfig[] = [];

      allBikes.map((bike: any) => {
        const bikeRenderConfig: BikeConfig = getNewRenderedBuildConfig(bike.products);
        
        newCurrentBikes.push(bikeRenderConfig)
      })

      setCurrentBikeConfigs(newCurrentBikes)
    } 

  }, [loading])

  let numberOfObjects = bikeBuilds.length;
  const [index, setIndex] = useState(Math.floor(numberOfObjects / 2));

  console.log(index);
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
