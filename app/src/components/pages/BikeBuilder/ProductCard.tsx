import QualityIndication from './QualityIndicator';

interface Props {
	name: string;
	subheader: string;
	grade: number;
	numReviews: number;
	price: number;
	imgLink: string;
}

const ProductCard = ({
	name,
	subheader,
	grade,
	numReviews,
	price,
	imgLink,
}: Props) => {
	return (
		<div className="flex w-full h-36 bg-white mt-3">
			<div className="m-2 w-full">
				<h3 className="text-lg font-medium">{name}</h3>
				<h4 className="text-sm mb-2">{subheader}</h4>
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
