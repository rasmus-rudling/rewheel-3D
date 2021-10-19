import { useEffect, useState } from "react";

import { Product } from "../../../../types";
import SidePanelView from "./SidePanelView";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toggleProductInBuild } from "../../../../redux/actions/currentBuild";
import { changeProductType } from "../../../../redux/actions/currentProductType";

const models = {
	qwe: Framemodel,
};

const totNumberOfTypes = 4;

// const frameProducts: Product[] = [
// 	{
// 		"id": "1",
// 		"name": "High frame",
// 		"brand": "Black",
// 		"grade": 4,
// 		"numReviews": 2,
// 		"price": 324,
// 		"type": "frame",
// 	},
// 	{
// 		id: "2",
// 		name: "High frame",
// 		brand: "Red",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "frame",
// 	},
// 	{
// 		id: "3",
// 		name: "Low frame",
// 		brand: "Red",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "frame",
// 	},
// 	{
// 		id: "4",
// 		name: "Low frame",
// 		brand: "Teal",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "frame",
// 	}
// ];

// const wheelProducts: Product[] = [
// 	{
// 		id: "5",
// 		name: "Fast wheels",
// 		brand: "White",
// 		grade: 4,
// 		numReviews: 2,
// 		price: 850,
// 		type: "wheel",
// 	},
// 	{
// 		id: "6",
// 		name: "Basic wheels",
// 		brand: "Black",
// 		grade: 5,
// 		numReviews: 2,
// 		price: 750,
// 		type: "wheel",
// 	},
// ];

// const handlebarProducts: Product[] = [
// 	{
// 		id: "7",
// 		name: "Drop bar",
// 		brand: "Black",
// 		grade: 4,
// 		numReviews: 2,
// 		price: 324,
// 		type: "handle bar",
// 	},
// 	{
// 		id: "8",
// 		name: "Drop bar",
// 		brand: "Blue",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "handle bar",
// 	},
// 	{
// 		id: "9",
// 		name: "Straight bar",
// 		brand: "Black",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "handle bar",
// 	},
// 	{
// 		id: "10",
// 		name: "Straight bar",
// 		brand: "Teal",
// 		grade: 5,
// 		numReviews: 11,
// 		price: 34,
// 		type: "handle bar",
// 	}
// ];

// const saddleProducts: Product[] = [
// 	{
// 		id: "11",
// 		name: "Comfy saddle",
// 		brand: "Black",
// 		grade: 5,
// 		numReviews: 2,
// 		price: 350,
// 		type: "saddle",
// 	},
// 	{
// 		id: "12",
// 		name: "Comfy saddle",
// 		brand: "Blue",
// 		grade: 5,
// 		numReviews: 2,
// 		price: 350,
// 		type: "saddle",
// 	},
// 	{
// 		id: "13",
// 		name: "Comfy saddle",
// 		brand: "Brown",
// 		grade: 5,
// 		numReviews: 2,
// 		price: 350,
// 		type: "saddle",
// 	},
// ];

const SidePanelPresenter = () => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);

	const [productsToShow, setProductsToShow] =
		useState<Product[]>([]);

	const dispatch = useDispatch();

	const currentBuild = useSelector(
		(state: RootStateOrAny) => state.currentBuild
	);

	const currentProductType = useSelector(
		(state: RootStateOrAny) => state.currentProductType
	);

	const productCardClickHandler = (newProductForBuild: Product) => {
		dispatch(toggleProductInBuild(newProductForBuild));
	};

	useEffect(() => {
		// 1. Get all products
		
		const allProducts: Product[] = [];
		
		setAllProducts(allProducts)
	}, [])


	useEffect(() => {
		const relevantProducts = allProducts.filter(product => product.type === currentProductType)
		
		setProductsToShow(relevantProducts)
	}, [currentProductType]);

	const currentProductTypeUpdateHandler = (
		changeTypeOption: "previous" | "next"
	) => {
		dispatch(changeProductType(changeTypeOption, undefined));
	};

	return (
		<SidePanelView
			currentBuild={currentBuild}
			currentProductCards={productsToShow}
			productCardClickHandler={productCardClickHandler}
			currentProductTypeUpdateHandler={currentProductTypeUpdateHandler}
			currentProductType={currentProductType}
			totNumberOfTypes={totNumberOfTypes}
		/>
	);
};

export default SidePanelPresenter;
