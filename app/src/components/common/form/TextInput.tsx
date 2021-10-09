import React, { ChangeEvent } from 'react';
import { convertStringToCamelCase } from '../../../utility/functions';

interface Props {
	type: string;
	showPlaceHolder?: boolean;
	showHeader: boolean;
	currentTextValue: string;
	onTextChange: (e: string | ChangeEvent<any>) => void;
}

const TextInput = ({
	type,
	currentTextValue,
	showHeader,
	onTextChange,
	showPlaceHolder = false,
}: Props) => {
	const convertedTypeText = convertStringToCamelCase(type);

	return (
		<div className="flex flex-col">
			{showHeader ? (
				<label htmlFor={convertedTypeText} className="font-normal text-sm">
					{type}
				</label>
			) : null}

			<input
				id={convertedTypeText}
				name={convertedTypeText}
				type="text"
				onChange={onTextChange}
				value={currentTextValue}
				className="focus:outline-none px-2 py-1 font-light border focus:border-green-500"
				placeholder={type}
			/>
		</div>
	);
};

export default TextInput;
