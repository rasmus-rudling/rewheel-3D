import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

interface Props {
	reviews: number;
	numberOfFilledStars: number;
	numberOfEmptyStars: number;
}

const QualityIndicationView = ({
	reviews,
	numberOfFilledStars,
	numberOfEmptyStars,
}: Props) => {
	const emptyStar = (
		<FontAwesomeIcon icon={farFaStar} className="text-green-500" />
	);

	const filledStar = (
		<FontAwesomeIcon icon={faStar} className="text-green-500" />
	);

	return (
		<div className="mb-7">
			{[...Array(numberOfFilledStars)].map((e) => filledStar)}
			{[...Array(numberOfEmptyStars)].map((e) => emptyStar)}
			<span className="ml-2 inline-block font-light">({reviews})</span>
		</div>
	);
};

export default QualityIndicationView;
