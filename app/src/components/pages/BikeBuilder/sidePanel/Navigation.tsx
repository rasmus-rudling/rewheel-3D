import CurrentCategory from './CurrentCategory';
import Filter from './Filter';
import React from 'react';
import { useState } from 'react';

const Navigation = () => {
	const [activeFilter, setActiveFilter] = useState('');
	const [filtersVisible, setFiltersVisible] = useState(false);

	const filterVisabilityHandler = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		if (filtersVisible) setActiveFilter('');
		setFiltersVisible(!filtersVisible);
	};

	const activeFilterHandler = (
		event: React.MouseEvent<HTMLButtonElement>,
		filterName: string
	) => {
		console.log('changing filer');
		if (activeFilter !== filterName) setActiveFilter(filterName);
		else setActiveFilter('');
	};

	const closeFilterHandler = () => {
		setActiveFilter('');
	};

	const productFilters = (
		<div className="grid grid-cols-2 px-3 pb-3 gap-3 w-full relative">
			{/* Hårdkodade exempel */}
			<Filter
				name="Märken"
				id="filter1"
				setActive={activeFilterHandler}
				isOpen={activeFilter === 'Märken'}
				closeFilter={closeFilterHandler}
				alternatives={['Specialized', 'Monark', 'Stålhästen', 'Företag5']}
			/>
			<Filter
				name="Ordning"
				id="filter2"
				setActive={activeFilterHandler}
				isOpen={activeFilter === 'Ordning'}
				closeFilter={closeFilterHandler}
				alternatives={[
					'Stigande',
					'Fallande',
					'Dyrast',
					'Billigast',
					'Helt jävla svindyr',
				]}
			/>
			<Filter
				name="Storlek"
				id="filter3"
				setActive={activeFilterHandler}
				isOpen={activeFilter === 'Storlek'}
				closeFilter={closeFilterHandler}
				alternatives={[
					'Stigande',
					'Fallande',
					'Dyrast',
					'Billigast',
					'Helt jävla svindyr',
				]}
			/>
			<Filter
				name="Färg"
				id="filter4"
				setActive={activeFilterHandler}
				isOpen={activeFilter === 'Färg'}
				closeFilter={closeFilterHandler}
				alternatives={[
					'Stigande',
					'Fallande',
					'Dyrast',
					'Billigast',
					'Helt jävla svindyr',
				]}
			/>
		</div>
	);

	return (
		<div className="w-full bg-gray-200">
			<div className="px-3 py-2 flex flex-row justify-between">
				<CurrentCategory categories={['Stålramar', 'underkategori']} />
				<button className="my-1" onClick={filterVisabilityHandler}>
					<span className="">Filter</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 mb-1 ml-1 inline-block"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={`${filtersVisible ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}`}
						/>
					</svg>
				</button>
			</div>
			{filtersVisible ? productFilters : null}
		</div>
	);
};

export default Navigation;
