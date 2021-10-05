import React from 'react';

import { NavButton } from './NavBarPresenter';

interface Props {
	navButtons: NavButton[];
	navButtonClickHandler: Function;
}

const DesktopNavBarView = ({ navButtons, navButtonClickHandler }: Props) => {
	return (
		<div className="flex justify-between h-40 bg-white">
			<h3>ReWheel</h3>

			<div>
				{navButtons.map((navButton) => (
					<button onClick={() => navButtonClickHandler(navButton.route)}>
						{navButton.text}
					</button>
				))}
			</div>
		</div>
	);
};

export default DesktopNavBarView;
