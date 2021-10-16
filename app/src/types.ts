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

export interface ProductType {
	name: string;
	idx: number;
	numberOfTypes: number;
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
	type: ProductType;
}

export interface BikeBuild {
	products: Product[];
	totalPrice: number;
}

export interface SavedBuild {
	name: string;
	build: BikeBuild;
	savedAt?: Date;
	id: number;
}