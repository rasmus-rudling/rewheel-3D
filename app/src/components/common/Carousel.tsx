import React, { Component, useRef, useState } from "react";
import BikeView from "../pages/BikeBuilder/bikeView/BikeView";

import { BikeBuild } from "../../types/index";

interface Props {
  bikeBuilds: BikeBuild[];
  index: number;
}

// Add boolean for edit buttons or not
// Add edit button for the profile page where you can directly edit the bike

// Add Made by , Price etc

const Carousel = ({ bikeBuilds, index }: Props) => {
  var numberOfObjects = bikeBuilds.length;

  return (
    <div className=" flex justify-center items-center w-full h-4/6">
      <div className="w-1/4 h-3/6 px-2 animate-bounce">
        {index > 0 ? <BikeView bikeBuild={bikeBuilds[index]} /> : ""}
      </div>

      <div className="w-2/4 px-2 h-80 mb-20 mt-12">
        <BikeView bikeBuild={bikeBuilds[index]} />
        <div>Created by Isak </div>
      </div>

      <div className="w-1/4 h-3/6 px-2 animate-bounce">
        {index < numberOfObjects - 1 ? (
          <BikeView bikeBuild={bikeBuilds[index]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Carousel;
