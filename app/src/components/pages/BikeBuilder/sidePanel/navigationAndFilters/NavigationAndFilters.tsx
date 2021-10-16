import CurrentCategory from './CurrentCategoryView';
import Filter from './PartFilter';
import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { PartFilter } from '../../../../../types';
import { capitalizeFirstLetter } from '../../../../../utility/functions';

interface Props {
	currentProductType: string;
}

const NavigationAndFilters = ({ currentProductType }: Props) => {
	const [openFilter, setOpenFilter] = useState('');
	const [filtersVisible, setFiltersVisible] = useState(false);
	const [partFiltersList, setPartFiltersList] = useState<PartFilter[]>([
		{
			filterName: 'Märke',
			activeFilterAlternatives: {
				Specialized: false,
				Monark: false,
				Stålhästen: false,
				Företag5: false,
			},
		},
		{
			filterName: 'Färg',
			activeFilterAlternatives: {
				Svart: false,
				Blå: false,
				Vit: true,
				Rosa: false,
			},
		},
		{
			filterName: 'Ny/begagnad',
			activeFilterAlternatives: {
				Ny: false,
				Begagnad: false,
			},
		},
	]);

	const filterVisabilityHandler = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		if (filtersVisible) setOpenFilter('');
		setFiltersVisible(!filtersVisible);
	};

	const setOpenFilterHandler = (filterName: string) => {
		setOpenFilter(filterName);
	};

	const closeFilterHandler = () => {
		setOpenFilter('');
	};

	const toggleAlternativeHandler = (
		filterName: string,
		alternative: string
	) => {
		let tempPartFiltersList = partFiltersList.map((partFilter: PartFilter) => {
			if (partFilter.filterName === filterName) {
				let partFilterTemp = { ...partFilter };
				partFilterTemp.activeFilterAlternatives[alternative] =
					!partFilterTemp.activeFilterAlternatives[alternative];

				return partFilterTemp;
			} else {
				return partFilter;
			}
		});

		setPartFiltersList(tempPartFiltersList);
	};

	const clearCurrentFilterHandler = (filterName: string) => {
		let tempPartFiltersList = partFiltersList.map((partFilter: PartFilter) => {
			if (partFilter.filterName === filterName) {
				let partFilterTemp = { ...partFilter };

				Object.keys(partFilterTemp.activeFilterAlternatives).map(
					(partFilterAlternative: string) => {
						partFilterTemp.activeFilterAlternatives[partFilterAlternative] =
							false;
					}
				);

				return partFilterTemp;
			} else {
				return partFilter;
			}
		});

		setPartFiltersList(tempPartFiltersList);
	};

	const partFilters = (
		<div className="grid grid-cols-2 px-3 pb-3 gap-3 w-full relative">
			{partFiltersList.map((partFilter: PartFilter, idx: number) => (
				<Filter
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

	let categoryInEnglish = capitalizeFirstLetter(currentProductType);
	let categoryInSwedish = '';

	if (categoryInEnglish === 'Frame') {
		categoryInSwedish = 'Välj ram';
	} else if (categoryInEnglish === 'Wheel') {
		categoryInSwedish = 'Välj däck';
	} else if (categoryInEnglish === 'Handle bar') {
		categoryInSwedish = 'Välj styre';
	} else if (categoryInEnglish === 'Saddle') {
		categoryInSwedish = 'Välj sadel';
	}

	return (
		<div className="w-full bg-gray-200">
			<div className="px-3 py-2 flex justify-between">
				<CurrentCategory categories={[categoryInSwedish]} />

				<button
					onClick={filterVisabilityHandler}
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

export default NavigationAndFilters;
