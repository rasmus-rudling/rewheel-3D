import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
	categories: string[];
}

const rightArrow = (
	<FontAwesomeIcon size="xs" icon={faArrowRight} className="mx-1" />
);

const CurrentCategory = ({ categories }: Props) => {
	const lastIdx = categories.length - 1;

	return (
		<div className="font-light">
			{categories.length > 2 ? <span>...</span> : null}
			<span className="cursor-pointer">{categories[lastIdx - 1]}</span>
			{rightArrow}
			<span>{categories[lastIdx]}</span>
		</div>
	);
};

export default CurrentCategory;
