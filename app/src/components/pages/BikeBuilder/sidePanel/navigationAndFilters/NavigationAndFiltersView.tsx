import CurrentCategory from './CurrentCategoryView';
import Filter from './PartFilter';
import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { PartFilter } from '../../../../../types';
import { capitalizeFirstLetter } from '../../../../../utility/functions';

interface Props {
	partFiltersList: PartFilter[],
	setOpenFilterHandler: (filterName: string) => void,
	openFilter: string,
	closeFilterHandler: () => void,
	toggleAlternativeHandler: (filterName: string, alternative: string) => void,
	clearCurrentFilterHandler: (filterName: string) => void,
	categoryInSwedish: string,
	filterVisabilityHandler: Function,
	filtersVisible: boolean
}

const NavigationAndFiltersView = ({ 
	partFiltersList,
	setOpenFilterHandler, 
	openFilter, 
	closeFilterHandler, 
	toggleAlternativeHandler, 
	clearCurrentFilterHandler, 
	categoryInSwedish, 
	filterVisabilityHandler,
	filtersVisible 
}: Props) => {

	const partFilters = (
		<div className="grid grid-cols-2 px-3 pb-3 gap-3 w-full relative">
			{partFiltersList.map((partFilter: PartFilter, idx: number) => (
				<Filter
					key={'navAndFilters ' + partFilter.filterName}
					name={partFilter.filterName}
					id={idx + 1}
					setOpenFilter={setOpenFilterHandler}
					isOpen={openFilter === partFilter.filterName}
					closeFilter={closeFilterHandler}
					alternatives={partFilter.activeFilterAlternatives}
					toggleAlternative={toggleAlternativeHandler}
					clearCurrentFilter={clearCurrentFilterHandler}
				/>
			))}
		</div>
	);

	const arrowUp = <FontAwesomeIcon icon={faChevronUp} size="xs" />;
	const arrowDown = <FontAwesomeIcon icon={faChevronDown} size="xs" />;

	return (
		<div className="w-full bg-gray-200">
			<div className="px-3 py-2 flex justify-between">
				<CurrentCategory categories={[categoryInSwedish]} />

				<button
					onClick={() => filterVisabilityHandler()}
					className="flex items-center hidden"
				>
					<span className="mr-1 select-none">Filter</span>
					{filtersVisible ? arrowUp : arrowDown}
				</button>
			</div>
			{filtersVisible ? partFilters : null}
		</div>
	);
};

export default NavigationAndFiltersView;
