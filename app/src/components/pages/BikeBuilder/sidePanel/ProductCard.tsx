import { Product } from '../../../../types';
import QualityIndication from './QualityIndicator';

const ProductCard = ({
	name,
	brand,
	grade,
	numReviews,
	price,
	imgLink,
}: Product) => {
	return (
		<div className="flex w-full h-36 bg-white mb-3 last:mb-0">
			<div className="m-2 w-full">
				<h3 className="text-lg font-light">{name}</h3>
				<h4 className="text-sm mb-2 font-light">{brand}</h4>
				<QualityIndication grade={grade} reviews={numReviews} />
				<h4 className="text-base">{price} kr</h4>
			</div>
			<div className="w-full flex justify-center">
				<img
					src={imgLink}
					className="p-2 h-full max-h-full object-scale-down"
				/>
			</div>
		</div>
	);
};

export default ProductCard;
