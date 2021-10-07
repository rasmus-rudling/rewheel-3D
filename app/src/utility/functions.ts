export const convertStringToCamelCase = (stringToConvert: string) => {
	return stringToConvert.replace(
		/(?:^\w|[A-Z]|\b\w|\s+)/g,
		function (match, index) {
			if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
			return index === 0 ? match.toLowerCase() : match.toUpperCase();
		}
	);
};
