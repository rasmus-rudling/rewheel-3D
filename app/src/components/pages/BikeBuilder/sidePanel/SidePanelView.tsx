import ProductCard from './productCard/ProductCardView';
import NavigationAndFilters from './navigationAndFilters/NavigationAndFilters';
import Button1 from '../../../common/buttons/Button1View';
import { BikeBuild, Product } from '../../../../types';

interface Props {
	currentBuild: BikeBuild;
	currentProductCards: Product[];
	productCardClickHandler: Function;
}

const SidePanelView = ({
	currentBuild,
	currentProductCards,
	productCardClickHandler,
}: Props) => {
	return (
		<div className="h-full bg-gray-200 flex flex-col">
			<NavigationAndFilters />
			<div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
				{currentProductCards.map((product) => (
					<ProductCard
						productInfo={product}
						onCardClick={() => productCardClickHandler(product)}
						inCurrentBuild={currentBuild.products.some(
							(productInBuild) => productInBuild.id === product.id
						)}
					/>
				))}
			</div>

			<div className="bg-gray-200 px-3 py-3">
				<div className="flex flex-col">
					<span className="font-light">
						Totalt pris: {currentBuild.totalPrice} kr
					</span>
					{/* <span className="font-light">Klimatkostnad: 123 Co2e</span>
					<span className="font-light">Klimatbesparing: 1 223 Co2e</span> */}
				</div>
				<div className="flex mt-3">
					<Button1
						color="blue"
						onClickHandler={() => {
							console.log('Spara');
						}}
						text="Förgående"
						addBorder={true}
						blackTextColor={false}
						filled={false}
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

export default SidePanelView;
