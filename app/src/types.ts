export interface User {
	id: string;
	username: string;
	name: string;
}

export interface ActiveFilterAlternatives {
	[filterAlternative: string]: boolean;
}

export interface PartFilter {
	filterName: string;
	activeFilterAlternatives: ActiveFilterAlternatives;
}
