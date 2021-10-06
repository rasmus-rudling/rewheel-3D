import React from 'react';

interface Props {
	showingModal: boolean;
	onClickHandler: () => void;
}

const HamburgerButton = ({ showingModal, onClickHandler }: Props) => {
	const commonStyling = `
        flex
        absolute
        w-6
        h-1
        bg-green-500
        rounded-sm
        transition
        opacity-100
        transform
    `;

	const commonLine1Line3Styling = `
        duration-500
    `;

	const commonLine2Styling = `
        duration-400
    `;

	let currentLine1Styling, currentLine2Styling, currentLine3Styling;

	if (showingModal) {
		currentLine1Styling = `-translate-y-2`;
		currentLine2Styling = ``;
		currentLine3Styling = `translate-y-2`;
	} else {
		currentLine1Styling = `rotate-135`;
		currentLine2Styling = `opacity-50 -translate-x-20`;
		currentLine3Styling = `rotate-45`;
	}

	return (
		<div
			className={`
                flex flex-col justify-center items-center
                w-10 h-9 cursor-pointer 
                transition 
                relative 
                overflow-hidden 
                select-none
                rounded-md
                hover:bg-green-100
            `}
			onClick={onClickHandler}
		>
			<div
				className={
					commonStyling + commonLine1Line3Styling + currentLine1Styling
				}
			/>

			<div
				className={commonStyling + commonLine2Styling + currentLine2Styling}
			/>

			<div
				className={
					commonStyling + commonLine1Line3Styling + currentLine3Styling
				}
			/>
		</div>
	);
};

export default HamburgerButton;
