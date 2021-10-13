import QualityIndicationView from './QualityIndicationView';

interface Props {
	grade: number;
	reviews: number;
}

const QualityIndicationPresenter = ({ grade, reviews }: Props) => {
	const numberOfFilledStars = Math.floor(grade);
	const numberOfEmptyStars = 5 - numberOfFilledStars;

	return (
		<QualityIndicationView
			reviews={reviews}
			numberOfFilledStars={numberOfFilledStars}
			numberOfEmptyStars={numberOfEmptyStars}
		/>
	);
};

export default QualityIndicationPresenter;
