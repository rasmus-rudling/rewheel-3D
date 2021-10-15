import { ProductType } from '../../types';

interface Action {
	type: 'CHANGE_PRODUCT_TYPE';
	data: {
		changeTypeOption: string;
	};
}

const initCurrentProductType: ProductType = {
	name: 'frame',
	idx: 0,
	numberOfTypes: 4,
};

const possibleProductTypes = ['frame', 'wheel', 'handle bar', 'saddle'];

const currentProductTypeReducer = (
	state = initCurrentProductType,
	{ type, data }: Action
) => {
	switch (type) {
		case 'CHANGE_PRODUCT_TYPE':
			const currentIdx = state.idx;
			let newIdx;

			if (data.changeTypeOption === 'previous') {
				newIdx = Math.max(0, currentIdx - 1);
			} else {
				newIdx = Math.min(possibleProductTypes.length - 1, currentIdx + 1);
			}

			let newProdcutTypeName = possibleProductTypes[newIdx];

			const newProdcutType: ProductType = {
				name: newProdcutTypeName,
				idx: newIdx,
				numberOfTypes: state.numberOfTypes,
			};

			return newProdcutType;
		default:
			return state;
	}
};

export default currentProductTypeReducer;
