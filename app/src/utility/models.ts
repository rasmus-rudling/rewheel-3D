// Frames
import frameHighBlack from '../resources/testGeometry/models/frameHighBlack.gltf';
import frameHighRed from '../resources/testGeometry/models/frameHighRed.gltf';
import frameLowRed from '../resources/testGeometry/models/frameLowBlack.gltf';
import frameLowTeal from '../resources/testGeometry/models/frameLowTeal.gltf';

import frameHighBlackImg from '../resources/testGeometry/previewImages/frameHighBlack.png';
import frameHighRedImg from '../resources/testGeometry/previewImages/frameHighRed.png';
import frameLowRedImg from '../resources/testGeometry/previewImages/frameLowBlack.png';
import frameLowTealImg from '../resources/testGeometry/previewImages/frameLowTeal.png';

// Wheels
import wheelWhite from '../resources/testGeometry/models/wheelWhite.gltf';
import wheelBlack from '../resources/testGeometry/models/wheelBlack.gltf';

import wheelWhiteImg from '../resources/testGeometry/previewImages/wheelWhite.png';
import wheelBlackImg from '../resources/testGeometry/previewImages/wheelBlack.png';

// Handle bars
import dropbarBlack from '../resources/testGeometry/models/dropbarBlack.gltf';
import dropbarBlue from '../resources/testGeometry/models/dropbarBlue.gltf';
import straightbarBlack from '../resources/testGeometry/models/straightbarBlack.gltf';
import straightbarTeal from '../resources/testGeometry/models/straightbarTeal.gltf';

import dropbarBlackImg from '../resources/testGeometry/previewImages/dropbarBlack.png';
import dropbarBlueImg from '../resources/testGeometry/previewImages/dropbarBlue.png';
import straightbarBlackImg from '../resources/testGeometry/previewImages/straightbarBlack.png';
import straightbarTealImg from '../resources/testGeometry/previewImages/straightbarTeal.png';

// Saddles
import saddleBlack from '../resources/testGeometry/models/saddleBlack.gltf';
import saddleBlue from '../resources/testGeometry/models/saddleBlue.gltf';
import saddleBrown from '../resources/testGeometry/models/saddleBrown.gltf';

import saddleBlackImg from '../resources/testGeometry/previewImages/saddleBlack.png';
import saddleBlueImg from '../resources/testGeometry/previewImages/saddleBlue.png';
import saddleBrownImg from '../resources/testGeometry/previewImages/saddleBrown.png';

interface ModelsAndImages {
	[productId: string]: {
		model: any;
		img: any;
	};
}

export const modelsAndImages: ModelsAndImages = {
	'616ed3cde54b2cd4223ead5a': {
		model: frameHighBlack,
		img: frameHighBlackImg,
	},
	'616ed436e54b2cd4223ead5b': {
		model: frameHighRed,
		img: frameHighRedImg,
	},
	'616ed46de54b2cd4223ead5d': {
		model: frameLowRed,
		img: frameLowRedImg,
	},
	'616ed4b6e54b2cd4223ead5e': {
		model: frameLowTeal,
		img: frameLowTealImg,
	},
	'616ed4e6e54b2cd4223ead5f': {
		model: wheelWhite,
		img: wheelWhiteImg,
	},
	'616ed4fae54b2cd4223ead60': {
		model: wheelBlack,
		img: wheelBlackImg,
	},
	'616ed568e54b2cd4223ead63': {
		model: dropbarBlack,
		img: dropbarBlackImg,
	},
	'616ed5ace54b2cd4223ead64': {
		model: dropbarBlue,
		img: dropbarBlueImg,
	},
	'616ed5b6e54b2cd4223ead65': {
		model: straightbarBlack,
		img: straightbarBlackImg,
	},
	'616ed5c9e54b2cd4223ead66': {
		model: straightbarTeal,
		img: straightbarTealImg,
	},
	'616ed5e2e54b2cd4223ead68': {
		model: saddleBlack,
		img: saddleBlackImg,
	},
	'616ed62ce54b2cd4223ead69': {
		model: saddleBlue,
		img: saddleBlueImg,
	},
	'616ed651e54b2cd4223ead6a': {
		model: saddleBrown,
		img: saddleBrownImg,
	},
};
