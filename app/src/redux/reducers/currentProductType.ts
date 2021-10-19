interface Action {
	type: 'CHANGE_PRODUCT_TYPE';
	data: {
		changeTypeOption?: string;
		newProductType?: string;
	};
}

export const possibleProductTypes = ['frame', 'wheel', 'handle bar', 'saddle'];

const currentProductTypeReducer = (state = 'frame', { type, data }: Action) => {
	switch (type) {
		case 'CHANGE_PRODUCT_TYPE':
			if (data.newProductType) {
				return data.newProductType;
			}

			const currentIdx = possibleProductTypes.indexOf(state);
			let newIdx;

			if (data.changeTypeOption === 'previous') {
				newIdx = Math.max(0, currentIdx - 1);
			} else {
				newIdx = Math.min(possibleProductTypes.length - 1, currentIdx + 1);
			}

			let newProdcutTypeName = possibleProductTypes[newIdx];

			return newProdcutTypeName;
		default:
			return state;
	}
};

export default currentProductTypeReducer;
