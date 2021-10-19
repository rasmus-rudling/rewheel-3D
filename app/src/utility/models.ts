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
	'1': {
		model: frameHighBlack,
		img: frameHighBlackImg,
	},
	'2': {
		model: frameHighRed,
		img: frameHighRedImg,
	},
	'3': {
		model: frameLowRed,
		img: frameLowRedImg,
	},
	'4': {
		model: frameLowTeal,
		img: frameLowTealImg,
	},
	'5': {
		model: wheelWhite,
		img: wheelWhiteImg,
	},
	'6': {
		model: wheelBlack,
		img: wheelBlackImg,
	},
	'7': {
		model: dropbarBlack,
		img: dropbarBlackImg,
	},
	'8': {
		model: dropbarBlue,
		img: dropbarBlueImg,
	},
	'9': {
		model: straightbarBlack,
		img: straightbarBlackImg,
	},
	'10': {
		model: straightbarTeal,
		img: straightbarTealImg,
	},
	'11': {
		model: saddleBlack,
		img: saddleBlackImg,
	},
	'12': {
		model: saddleBlue,
		img: saddleBlueImg,
	},
	'13': {
		model: saddleBrown,
		img: saddleBrownImg,
	},
};
