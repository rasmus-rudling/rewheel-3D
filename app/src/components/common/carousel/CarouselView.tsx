import { Component, useRef, useState, useEffect } from 'react';
import BikeView from '../../pages/BikeBuilder/bikeCanvas/BikeCanvasView';

import { BikeBuild, Product } from '../../../types/index';
import { useGLTF } from '@react-three/drei';
import { modelsAndImages } from '../../../utility/models';
import { getNewRenderedBuildConfig } from '../../../utility/functions';
import { BikeConfig } from '../../../types'

interface Props {
  mainBikeConfig: BikeConfig,
  leftBikeConfig?: BikeConfig,
  rightBikeConfig?: BikeConfig,
}

const CarouselView = ({ leftBikeConfig, mainBikeConfig, rightBikeConfig }: Props) => {
	return (
		<div className=" flex justify-center items-center w-full h-4/6">
			{leftBikeConfig && (
        <div className="w-1/4 h-3/6 px-2">
        <BikeView bikeConfig={leftBikeConfig} />
      </div>
      )}

			<div className="w-2/4 px-2 h-80">
        <BikeView bikeConfig={mainBikeConfig} />
      </div>

			{rightBikeConfig && (
        <div className="w-1/4 h-3/6 px-2">
        <BikeView bikeConfig={rightBikeConfig} />
      </div>
      )}
		</div>
	);
};

export default CarouselView;
