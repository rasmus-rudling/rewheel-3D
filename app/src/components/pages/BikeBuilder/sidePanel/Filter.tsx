import React, { MouseEvent } from 'react';
import Button1 from '../../../common/buttons/Button1View';
import TextInput from '../../../common/form/TextInput';

const FilterCard = (props: { name: string }) => {
	return (
		<div className="ml-3 mr-1 mt-3 h-10 bg-white leading-8 filter drop-shadow-sm last:mb-3">
			<span className="mx-3 inline-block align-middle text-black">
				{props.name}
			</span>
		</div>
	);
};

// React.MouseEventHandler<HTMLButtonElement>
interface Props {
	name: string;
	id: string;
	setActive: any;
	isOpen: boolean;
	closeFilter: () => void;
	alternatives: string[];
}

const Filter: React.FC<Props> = ({
	name,
	id,
	setActive,
	isOpen,
	closeFilter,
	alternatives,
}) => {
	return (
		<>
			<button
				className="group w-full border-t border-b rounded-none py-2 border-gray-300 hover:border-gray-400 flex flex-row justify-between items-center"
				onClick={(e) => setActive(e, name)}
			>
				<span className="ml-2 text-gray-700 group-hover:text-gray-900">
					{name}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1}
						d={`${isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}`}
					/>
				</svg>
			</button>

			{/* TODO: Make sure the filter cards show correctly, right now it's 
                laggy could be solved by adding top:0 or something like that */}
			<div
				className={`w-full max-h-96 bg-gray-100 absolute filter drop-shadow-lg ${
					isOpen ? '' : 'invisible'
				} ${parseInt(id.slice(-1)) % 2 === 0 ? 'right-3' : ''}`}
			>
				<header className="bg-gray-50 w-full p-3">
					<div className="flex flex-row justify-between items-center">
						<span className="pl-3">0 valda</span>
						<div>
							<Button1
								color="gray"
								onClickHandler={closeFilter}
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
				<div className="overflow-y-scroll max-h-52">
					<div className="flex flex-col flex-nowrap overflow-hidden">
						{alternatives.map((e) => (
							<FilterCard name={e} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
