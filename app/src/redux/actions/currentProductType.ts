export const changeProductType = (
	changeTypeOption: string | undefined,
	newProductType: string | undefined
) => ({
	type: 'CHANGE_PRODUCT_TYPE',
	data: {
		changeTypeOption: changeTypeOption,
		newProductType: newProductType,
	},
});
