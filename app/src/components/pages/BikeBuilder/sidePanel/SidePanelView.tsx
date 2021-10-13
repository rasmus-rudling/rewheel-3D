import ProductCard from './productCard/ProductCardView';
import NavigationAndFilters from './navigationAndFilters/NavigationAndFilters';
import Button1 from '../../../common/buttons/Button1View';
import { BikeBuild, Product } from '../../../../types';

interface Props {
	currentBuild: BikeBuild;
	currentProductCards: Product[];
	productCardClickHandler: Function;
	currentProductTypeUpdateHandler: Function;
}

const SidePanelView = ({
	currentBuild,
	currentProductCards,
	productCardClickHandler,
	currentProductTypeUpdateHandler,
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
				</div>
				<div className="flex mt-3">
					<Button1
						color="blue"
						onClickHandler={() => currentProductTypeUpdateHandler('previous')}
						text="Förgående"
						addBorder={true}
						blackTextColor={false}
						filled={false}
						extraClass="flex-grow"
					/>
					<Button1
						color="blue"
						onClickHandler={() => currentProductTypeUpdateHandler('next')}
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
