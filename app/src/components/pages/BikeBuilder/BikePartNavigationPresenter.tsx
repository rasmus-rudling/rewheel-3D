import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeProductType } from '../../../redux/actions/currentProductType';
import BikePartNavigationView from './BikePartNavigationView';

export interface InternationalString {
	[language: string]: string;
}

const BikePartNavigationPresenter = () => {
	const parts: InternationalString[] = [
		{
			sv: 'Ram',
			en: 'Frame',
		},
		{
			sv: 'Däck',
			en: 'Wheel',
		},
		{
			sv: 'Styre',
			en: 'Handle bar',
		},
		{
			sv: 'Sadel',
			en: 'Saddle',
		},
	];

	const dispatch = useDispatch();
	const currentProductType = useSelector(
		(state: RootStateOrAny) => state.currentProductType
	);

	const onPartTypeClickHandler = (partType: string) => {
		// dispatch(changeProductType(undefined, part.en.toLowerCase()));
		dispatch(changeProductType(undefined, partType));
	};

	return (
		<BikePartNavigationView
			currentProductType={currentProductType}
			onPartTypeClickHandler={onPartTypeClickHandler}
			parts={parts}
		/>
	);
};

export default BikePartNavigationPresenter;
