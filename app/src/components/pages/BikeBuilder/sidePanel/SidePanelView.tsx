import ProductCard from './productCard/ProductCardView';
import NavigationAndFilters from './navigationAndFilters/NavigationAndFiltersPresenter';
import CustomButton from '../../../common/buttons/CustomButtonView';
import { BikeBuild, Product } from '../../../../types';
import { possibleProductTypes } from '../../../../redux/reducers/currentProductType';

interface Props {
	currentBuild: BikeBuild;
	currentProductCards: Product[];
	productCardClickHandler: Function;
	currentProductTypeUpdateHandler: Function;
	currentProductType: string;
	totNumberOfTypes: number;
	saveBikeHandler: Function;
}

const SidePanelView = ({
	currentBuild,
	currentProductCards,
	productCardClickHandler,
	currentProductTypeUpdateHandler,
	currentProductType,
	totNumberOfTypes,
	saveBikeHandler,
}: Props) => {
	return (
		<div className="h-full bg-gray-200 flex flex-col">
			<NavigationAndFilters currentProductType={currentProductType} />
			<div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
				{currentProductCards.map((product) => (
					<ProductCard
						key={'sidePanelView ' + product.product_id}
						productInfo={product}
						onCardClick={() => productCardClickHandler(product)}
						inCurrentBuild={currentBuild.products.some(
							(productInBuild) => productInBuild.product_id === product.product_id
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
					{currentProductType !== possibleProductTypes[0] ? (
						<CustomButton
							color="blue"
							onClickHandler={() => currentProductTypeUpdateHandler('previous')}
							text="Förgående"
							addBorder={true}
							blackTextColor={false}
							filled={false}
							extraClass="flex-grow"
						/>
					) : null}

					{currentProductType !== possibleProductTypes.at(-1) && (
						<CustomButton
							color="blue"
							onClickHandler={() => currentProductTypeUpdateHandler('next')}
							text="Nästa"
							addBorder={true}
							blackTextColor={false}
							filled={true}
							extraClass="flex-grow"
						/>
					)}
				</div>
				<CustomButton
					color="green"
					onClickHandler={() => saveBikeHandler()}
					text="Spara"
					addBorder={true}
					blackTextColor={false}
					filled={true}
					disabled={currentBuild.products.length !== 4}
					extraClass="w-full mt-3"
				/>
			</div>
		</div>
	);
};

export default SidePanelView;
