import React from 'react';

interface Props {
	text: string;
	onClickHandler: () => void;
	color: 'blue' | 'green' | 'red' | 'gray';
}

const Button1 = ({ text, onClickHandler, color }: Props) => {
	let colorStyling;

	if (color === 'blue') {
		colorStyling = 'hover:bg-green-300';
	} else if (color === 'green') {
		colorStyling = 'hover:bg-green-300';
	} else if (color === 'red') {
		colorStyling = 'hover:bg-red-300';
	} else {
		colorStyling = 'hover:bg-gray-300';
	}

	return (
		<button
			onClick={onClickHandler}
			className={
				`
                capitalize font-light 
                rounded-sm 
                h-8 px-3 mr-2
                last:mr-0

                transition
                duration-200
                ` + colorStyling
			}
		>
			{text}
		</button>
	);
};

export default Button1;
