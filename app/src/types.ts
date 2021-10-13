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

export interface Product {
	id: string;
	modelSrc: string;
	name: string;
	brand: string;
	grade: number;
	numReviews: number;
	price: number;
	imgLink: string;
	type: 'frame' | 'handle bar' | 'saddle' | 'wheel';
}

export interface BikeBuild {
	parts: Product[];
} 

export interface SavedBuild {
	name: string;
	build: BikeBuild;
	savedAt?: Date;
	id: number;
}