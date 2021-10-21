import { Component, useRef, useState, useEffect } from 'react';
import BikeView from '../../pages/BikeBuilder/bikeCanvas/BikeCanvasView';

import { BikeBuild, Product } from '../../../types/index';
import { useGLTF } from '@react-three/drei';
import { modelsAndImages } from '../../../utility/models';
import { getNewRenderedBuildConfig } from '../../../utility/functions';
import { BikeConfig } from '../../../types';
import { BikeInfo } from './CarouselPresenter';

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
	const imgClass = 'h-12 rounded-full';
	const infoContainer =
		'absolute -top-20 w-full flex flex-col items-center mb-1 font-light';
	const infoContainerMain =
		'absolute -top-20 w-full flex flex-col items-center mb-1 font-light';

	const showCreator = window.location.pathname !== '/profile';

	const mainBike = (
		<div className="flex h-full w-3/6 flex-col relative items-center">
			{showCreator && (
				<div className={infoContainerMain}>
					<img src={mainBikeInfo?.creatorImg} className={imgClass} />
					Created by {mainBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full w-full px-2 flex">
				<BikeView bikeConfig={mainBikeInfo?.bikeConfig} />
			</div>
		</div>
	);

	const leftBike = leftBikeInfo && (
		<div className="flex h-2/4 w-1/5 flex-col relative justify-center flex-initial ">
			{showCreator && (
				<div className={infoContainer}>
					<img src={leftBikeInfo?.creatorImg} className={imgClass} />
					Created by {leftBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full px-2">
				<BikeView bikeConfig={leftBikeInfo?.bikeConfig} />
			</div>
		</div>
	);

	const rightBike = rightBikeInfo && (
		<div className="flex h-2/4 w-1/5 flex-col relative justify-center flex-initial ">
			{showCreator && (
				<div className={infoContainer}>
					<img src={rightBikeInfo?.creatorImg} className={imgClass} />
					Created by {rightBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full px-2">
				<BikeView bikeConfig={rightBikeInfo?.bikeConfig} />
			</div>
		</div>
	);

	return (
		<div className="flex h-3/4 w-full items-center justify-around">
			{leftBike} {mainBike} {rightBike}
		</div>
	);
};

export default CarouselView;
