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
		<div className="flex h-full w-3/5 flex-col relative">
			{showCreator && (
				<div className={infoContainerMain}>
					<img src={mainBikeInfo?.creatorImg} className={imgClass} />
					Created by {mainBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full  px-2">
				<BikeView bikeConfig={mainBikeInfo?.bikeConfig} />
			</div>
		</div>
	);

	const leftBike = (
		<div className="flex h-3/ w-1/4 flex-col relative justify-center">
			{showCreator && (
				<div className={infoContainer}>
					<img src={mainBikeInfo?.creatorImg} className={imgClass} />
					Created by {mainBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full px-2">
				<BikeView bikeConfig={mainBikeInfo?.bikeConfig} />
			</div>
		</div>
	);

	const rightBike = (
		<div className="flex h-3/4 w-1/4 flex-col relative justify-center">
			{showCreator && (
				<div className={infoContainer}>
					<img src={mainBikeInfo?.creatorImg} className={imgClass} />
					Created by {mainBikeInfo?.creatorFirstName}.
				</div>
			)}
			<div className="h-full px-2">
				<BikeView bikeConfig={mainBikeInfo?.bikeConfig} />
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
