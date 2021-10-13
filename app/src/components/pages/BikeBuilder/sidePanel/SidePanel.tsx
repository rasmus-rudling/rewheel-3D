import ProductCard from './ProductCard';
import Navigation from './Navigation';
import Button1 from '../../../common/buttons/Button1View';
import { Product } from '../../../../types';

const currentProductCards: Product[] = [
	{
		id: '',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: 'frame',
	},
	{
		id: '',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: 'frame',
	},
	{
		id: '',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 1,
		numReviews: 17,
		price: 804,
		imgLink: 'https://www.bike-components.de/assets/p/i/1280x960/386566.jpg',
		type: 'frame',
	},
	{
		id: '',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 2,
		numReviews: 2,
		price: 324,
		imgLink:
			'https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85',
		type: 'frame',
	},
	{
		id: '',
		modelSrc: '',
		name: 'Super fancy frame',
		brand: 'Specialized',
		grade: 5,
		numReviews: 11,
		price: 34,
		imgLink:
			'https://www.planetx.co.uk/imgs/products/px/950x600_constWH/FTPXTIADV4_P1-05.jpg?v=mo',
		type: 'frame',
	},
];

// TODO: Context för Filter, sortering och den tillfälligt valda kategorin

const SidePanel = () => {
	return (
		<div className="h-full bg-gray-200 flex flex-col">
			<Navigation />
			<div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
				{currentProductCards.map((product) => (
					<ProductCard
						id={product.id}
						name={product.name}
						brand={product.brand}
						grade={product.grade}
						numReviews={product.numReviews}
						price={product.price}
						imgLink={product.imgLink}
						type={product.type}
						modelSrc={product.modelSrc}
					/>
				))}
			</div>

			<div className="bg-gray-200 px-3 py-3">
				<div className="flex flex-col">
					<span className="font-light">Totalt pris: 5 232 kr</span>
					<span className="font-light">Klimatkostnad: 123 Co2e</span>
					<span className="font-light">Klimatbesparing: 1 223 Co2e</span>
				</div>
				<div className="flex mt-3">
					<Button1
						color="green"
						onClickHandler={() => {
							console.log('Spara');
						}}
						text="Spara"
						addBorder={true}
						blackTextColor={false}
						filled={true}
						extraClass="flex-grow"
					/>
					<Button1
						color="blue"
						onClickHandler={() => {
							console.log('Nästa');
						}}
						text="Nästa"
						addBorder={true}
						blackTextColor={false}
						filled={true}
						extraClass="flex-grow"
					/>
				</div>
			</div>
		</div>
	);
};

export default SidePanel;
