import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
	categories: string[];
}

const CurrentCategoryView = ({ categories }: Props) => {
	const rightArrow = (
		<FontAwesomeIcon size="xs" icon={faArrowRight} className="mx-1" />
	);

	return (
		<div className="font-light">
			{categories.length > 2 ? <span>...</span> : null}
			<span className="cursor-pointer">
				{categories[categories.length - 2]}
			</span>
			{rightArrow}
			<span>{categories[categories.length - 1]}</span>
		</div>
	);
};

export default CurrentCategoryView;
