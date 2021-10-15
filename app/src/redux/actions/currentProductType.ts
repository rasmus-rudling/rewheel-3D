export const changeProductType = (changeTypeOption: string) => ({
	type: 'CHANGE_PRODUCT_TYPE',
	data: {
		changeTypeOption: changeTypeOption,
	},
});
