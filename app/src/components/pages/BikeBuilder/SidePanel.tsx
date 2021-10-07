import ProductCard from './ProductCard';
import Navigation from './Navigation';

const currentProductCards = [
	{
		name: 'Super fancy frame',
		subheader: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
	},
	{
		name: 'Super fancy frame',
		subheader: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
	},
	{
		name: 'Super fancy frame',
		subheader: 'Specialized',
		grade: 1,
		numReviews: 17,
		price: 804,
		imgLink: 'https://www.bike-components.de/assets/p/i/1280x960/386566.jpg',
	},
	{
		name: 'Super fancy frame',
		subheader: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
	},
	{
		name: 'Super fancy frame',
		subheader: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
	},
];

const SidePanel = () => {
	return (
		<div className="h-full bg-gray-600 flex flex-col">
			{/* <Navigation /> */}
			{/* <div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
				{currentProductCards.map((product) => (
					<ProductCard
						name={product.name}
						subheader={product.subheader}
						grade={product.grade}
						numReviews={product.numReviews}
						price={product.price}
						imgLink={product.imgLink}
					/>
				))}
			</div> */}
			<div className="bg-green-600 w-full h-20" />
			<div className="bg-blue-600 w-full h-10" />
		</div>
	);
};

// const SidePanel = () => {
// 	return (
// 		<div className="h-auto bg-gray-100 flex flex-col">
// 			<Navigation />
// 			<div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
// 				{currentProductCards.map((product) => (
// 					<ProductCard
// 						name={product.name}
// 						subheader={product.subheader}
// 						grade={product.grade}
// 						numReviews={product.numReviews}
// 						price={product.price}
// 						imgLink={product.imgLink}
// 					/>
// 				))}
// 			</div>
// 			<div className="bg-gray-200 flex-none px-3 py-2">
// 				<div className="grid grid-cols-2">
// 					<span className="col-span-2">Totalt pris: xx</span>
// 					<span className="">Klimatkostnad: xx</span>
// 					<span className="ml-1">Klimatbesparing: xx</span>
// 				</div>
// 				<div className="block mt-3">
// 					<button className="inline-block float-left w-44 h-9 bg-gray-50">
// 						Spara
// 					</button>
// 					<button className="inline-block float-right w-44 h-9 bg-gray-50">
// 						Nästa
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default SidePanel;
