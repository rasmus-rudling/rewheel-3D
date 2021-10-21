import { ComponentConfig } from './three';

export interface User {
	// id: string;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	imgUrl: string;
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
	// modelSrc: string;
	name: string;
	brand: string;
	grade: number;
	numReviews: number;
	price: number;
	product_id: string;
	// imgLink: string;
	type: string;
}

export interface BikeConfig {
	[key: string]: ComponentConfig;
}

export interface BikeBuild {
	products: Product[];
	totalPrice: number;
	renderedBuildConfig: BikeConfig;
}

export interface SavedBuild {
	name: string;
	build: BikeBuild;
	savedAt?: Date;
	id: number;
}
