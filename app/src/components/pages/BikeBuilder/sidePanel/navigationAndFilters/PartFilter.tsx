import React from 'react';
import Button1 from '../../../../common/buttons/Button1View';
import TextInput from '../../../../common/form/TextInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ActiveFilterAlternatives, PartFilter } from '../../../../../types';

interface Props {
	name: string;
	id: number;
	setOpenFilter: (filterName: string) => void;
	isOpen: boolean;
	closeFilter: () => void;
	alternatives: ActiveFilterAlternatives;
	toggleAlternative: (filterName: string, alternative: string) => void;
	clearCurrentFilter: (filterName: string) => void;
}

const PartFilter: React.FC<Props> = ({
	name,
	id,
	setOpenFilter,
	isOpen,
	closeFilter,
	alternatives,
	toggleAlternative,
	clearCurrentFilter,
}) => {
	const arrowUp = <FontAwesomeIcon icon={faChevronUp} size="xs" className="" />;
	const arrowDown = (
		<FontAwesomeIcon icon={faChevronDown} size="xs" color="currentColor" />
	);

	const showFilterOptions = isOpen ? '' : 'invisible';

	const defaultStyle = `
        w-full 
        max-h-96 
        bg-gray-100 
        absolute 
        filter 
        drop-shadow-lg
    `;

	const classes = [defaultStyle, showFilterOptions];

	const openFilterButton = (
		<button
			className={`
            group 
            w-full py-2 
            border-t border-b border-gray-300 
            rounded-none 
            flex justify-between items-center
            hover:border-gray-400 
            text-gray-700 hover:text-gray-900
        `}
			onClick={() => setOpenFilter(name)}
		>
			<span className="ml-2">{name}</span>

			{isOpen ? arrowUp : arrowDown}
		</button>
	);

	const defaultFilterStyle = `
        bg-white 
        mb-2 last:mb-0 px-3 py-2 
        font-light 
        cursor-pointer 
        transition duration-200
        hover:bg-gray-300 
    `;
	const activeFilterAlternative = 'bg-green-500 text-white hover:bg-green-600';

	const filterAlternatives = (
		<div className="overflow-y-scroll max-h-52">
			<div className="flex flex-col flex-nowrap overflow-hidden p-3">
				{Object.keys(alternatives).map((filterAlternative) => (
					<div
						className={
							alternatives[filterAlternative]
								? defaultFilterStyle + activeFilterAlternative
								: defaultFilterStyle
						}
						onClick={() => toggleAlternative(name, filterAlternative)}
					>
						{filterAlternative}
					</div>
				))}
			</div>
		</div>
	);

	const openedFilter = (
		<div className={classes.join(' ')}>
			<header className="bg-gray-50 w-full p-3">
				<div className="flex flex-row justify-between items-center">
					<span className="pl-3">{name}</span>
					<div>
						<Button1
							color="gray"
							onClickHandler={() => clearCurrentFilter(name)}
							text="Rensa"
							addBorder={true}
						/>
						<Button1
							color="red"
							onClickHandler={closeFilter}
							text="X"
							blackTextColor={false}
							addBorder={true}
						/>
					</div>
				</div>

				<div className="mt-3">
					<TextInput
						currentTextValue=""
						onTextChange={() => {
							console.log('Hej');
						}}
						type="Sök"
						showHeader={false}
					/>
				</div>
			</header>

			{filterAlternatives}
		</div>
	);

	return (
		<>
			{openFilterButton}
			{openedFilter}
		</>
	);
};

export default PartFilter;
