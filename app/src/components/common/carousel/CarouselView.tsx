import { Component, useRef, useState, useEffect } from "react";
import BikeView from "../../pages/BikeBuilder/bikeCanvas/BikeCanvasView";

import { BikeBuild, Product } from "../../../types/index";
import { useGLTF } from "@react-three/drei";
import { modelsAndImages } from "../../../utility/models";
import { getNewRenderedBuildConfig } from "../../../utility/functions";
import { BikeConfig } from "../../../types";
import { BikeInfo } from "./CarouselPresenter";

// interface Props {
//   mainBikeConfig: BikeConfig,
//   leftBikeConfig?: BikeConfig,
//   rightBikeConfig?: BikeConfig,
// }

interface Props {
  mainBikeInfo: BikeInfo;
  leftBikeInfo?: BikeInfo;
  rightBikeInfo?: BikeInfo;
}

const CarouselView = ({ mainBikeInfo, leftBikeInfo, rightBikeInfo }: Props) => {
  const imgClass = "h-12 rounded-full";
  const infoContainer = "flex flex-col items-center mb-1 font-light";

  const showCreator = window.location.pathname !== "/profile";

  return (
    <div className=" flex justify-center items-center w-full h-4/6">
      {leftBikeInfo && (
        <div className="w-1/4 h-3/6 px-2">
          {showCreator && (
            <div className={infoContainer}>
              <img src={leftBikeInfo?.creatorImg} className={imgClass} />
              Created by {leftBikeInfo?.creatorFirstName}.
            </div>
          )}
          <BikeView bikeConfig={leftBikeInfo?.bikeConfig} />
        </div>
      )}

      <div className="w-2/4 px-2 h-80">
        {showCreator && (
          <div className={infoContainer}>
            <img src={mainBikeInfo?.creatorImg} className={imgClass} />
            Created by {mainBikeInfo?.creatorFirstName}.
          </div>
        )}
        <BikeView bikeConfig={mainBikeInfo?.bikeConfig} />
      </div>

      {rightBikeInfo && (
        <div className="w-1/4 h-3/6 px-2">
          {showCreator && (
            <div className={infoContainer}>
              <img src={rightBikeInfo?.creatorImg} className={imgClass} />
              Created by {rightBikeInfo?.creatorFirstName}.
            </div>
          )}

          <BikeView bikeConfig={rightBikeInfo?.bikeConfig} />
        </div>
      )}
    </div>
  );
};

export default CarouselView;
