import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeProductType } from '../../../redux/actions/currentProductType';

const BikePartNavivation = () => {
	const basicStyle = `
    px-3
    py-2
    border-2
    rounded-md
    mr-3
    font-light
  `;

	const activeStyle = `
    text-white
    bg-blue-400
    border-blue-500
    cursor
  `;

	const nonActiveStyles = `
    cursor-pointer
    border-gray-300
    bg-white
  `;

	const parts = [
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

	return (
		<div className="flex w-full justify-center absolute bottom-7">
			{parts.map((part, idx) => {
				const currentStyles = [basicStyle];

				if (part.en.toLowerCase() === currentProductType) {
					currentStyles.push(activeStyle);
				} else {
					currentStyles.push(nonActiveStyles);
				}

				return (
					<div key={'partNav ' + part + idx} className="flex mr-3 items-center">
						<div
							className={currentStyles.join(' ')}
							onClick={() => {
								dispatch(changeProductType(undefined, part.en.toLowerCase()));
							}}
						>
							{part.sv}
						</div>
						{idx < parts.length - 1 && (
							<FontAwesomeIcon
								icon={faArrowRight}
								className="text-gray-300 text-2xl"
								key={'empty start ' + idx}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default BikePartNavivation;
