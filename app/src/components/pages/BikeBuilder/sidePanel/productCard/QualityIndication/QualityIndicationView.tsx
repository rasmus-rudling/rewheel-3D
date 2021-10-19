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
	return (
		<div className="mb-7">
			{[...Array(numberOfFilledStars)].map((e, idx) => (
				<FontAwesomeIcon
					icon={faStar}
					className="text-green-500"
					key={'filled start ' + idx}
				/>
			))}
			{[...Array(numberOfEmptyStars)].map((e, idx) => (
				<FontAwesomeIcon
					icon={farFaStar}
					className="text-green-500"
					key={'empty start ' + idx}
				/>
			))}
			<span className="ml-2 inline-block font-light">({reviews})</span>
		</div>
	);
};

export default QualityIndicationView;
