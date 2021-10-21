import React from 'react';
import { useHistory } from 'react-router';

const ReWheelLogoView = () => {
	const history = useHistory();

	return (
		<h3
			className="text-green-500 font-black italic font-logo text-3xl select-none cursor-pointer"
			onClick={() => history.push('/')}
		>
			ReWheel
		</h3>
	);
};

export default ReWheelLogoView;
