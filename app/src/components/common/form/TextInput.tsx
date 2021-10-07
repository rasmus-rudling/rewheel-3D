import React, { ChangeEvent } from 'react';
import { convertStringToCamelCase } from '../../../utility/functions';

interface Props {
	type: string;
	currentTextValue: string;
	onTextChange: (e: string | ChangeEvent<any>) => void;
}

const TextInput = ({ type, currentTextValue, onTextChange }: Props) => {
	const convertedTypeText = convertStringToCamelCase(type);

	return (
		<div className="flex flex-col">
			<label htmlFor={convertedTypeText} className="font-normal text-sm">
				{type}
			</label>
			<input
				id={convertedTypeText}
				name={convertedTypeText}
				type="text"
				onChange={onTextChange}
				value={currentTextValue}
				className="focus:outline-none px-2 py-1 font-light border focus:border-green-500"
			/>
		</div>
	);
};

export default TextInput;
