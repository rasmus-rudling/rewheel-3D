import React, { Component, useRef, useState } from "react";

import Button1 from "../../common/buttons/Button1View";
import BikeView from "../BikeBuilder/bikeView/BikeView";

import { BikeBuild } from "./../../../types/index";

// export interface BikeBuild {
// 	products: Product[];
// 	totalPrice: number;
// 	renderedBuildConfig: BikeConfig;
// }

// const data = {
//   properties: [
//     {
//       index: 0,
//       color: "bg-red-500",
//     },
//     {
//       index: 1,
//       color: "bg-green-500",
//     },
//     {
//       index: 2,
//       color: "bg-pink-500",
//     },
//     {
//       index: 3,
//       color: "bg-yellow-300",
//     },
//     {
//       index: 4,
//       color: "bg-purple-500",
//     },
//     {
//       index: 5,
//       color: "bg-blue-500",
//     },
//     {
//       index: 6,
//       color: "bg-gray-500",
//     },
//   ],
// };

const data = [
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
  { products: [], totalPrice: 0, renderedBuildConfig: {} } as BikeBuild,
];

var numberOfObjects = data.length;

const DiscoverPage = () => {
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
      <div className=" flex justify-center items-center w-full h-4/6">
        <div className="w-1/4 h-3/6 px-2 animate-bounce">
          {index > 0 ? <BikeView bikeBuild={data[index]} /> : ""}
        </div>

        <div className="w-2/4 px-2 h-80">
          <BikeView bikeBuild={data[index]} />
        </div>

        <div className="w-1/4 h-3/6 px-2 animate-bounce">
          {index < numberOfObjects - 1 ? (
            <BikeView bikeBuild={data[index]} />
          ) : (
            ""
          )}
        </div>
      </div>

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
