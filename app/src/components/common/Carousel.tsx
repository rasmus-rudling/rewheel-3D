import React, { Component, useRef, useState } from "react";
import BikeView from "../pages/BikeBuilder/bikeView/BikeView";

import { BikeConfig } from "../../types/index";

interface Props {
  bikeConfigs: BikeConfig[];
  index: number;
}

const Carousel = ({ bikeConfigs, index }: Props) => {
  const numberOfObjects = bikeConfigs.length;

  const mainObject = (
    <div className="w-2/4 px-2 h-80">
      <BikeView bikeConfig={bikeConfigs[index]} />
    </div>
  );

  const leftSideObject = (
    <div className="w-1/4 h-3/6 px-2 animate-bounce">
      <BikeView bikeConfig={bikeConfigs[index - 1]} />
    </div>
  );

  const rightSideObject = (
    <div className="w-1/4 h-3/6 px-2 animate-bounce">
      <BikeView bikeConfig={bikeConfigs[index + 1]} />
    </div>
  );

  return (
    <div className=" flex justify-center items-center w-full h-4/6">
      {index > 0 && leftSideObject}
      {mainObject}
      {index < numberOfObjects - 1 && rightSideObject}
    </div>
  );
};

export default Carousel;
