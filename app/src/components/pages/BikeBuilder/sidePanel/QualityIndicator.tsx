import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

interface Props {
	grade: number;
	reviews: number;
}

const QualityIndication = ({ grade, reviews }: Props) => {
	const numberOfFilledStars = Math.floor(grade);
	const numberOfEmptyStars = 5 - numberOfFilledStars;

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

export default QualityIndication;
