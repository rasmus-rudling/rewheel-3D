import React, { useState } from 'react';
import { useHistory } from 'react-router';
import DesktopNavBarView from './NavBarView';

export interface NavButton {
	route: string;
	text: string;
}

const navButtons: NavButton[] = [
	{ route: 'bike-builder', text: 'cykelbyggaren' },
	{ route: 'profile', text: 'profil' },
	{ route: 'login', text: 'logga in' },
];

const NavBarPresenter = () => {
	const history = useHistory();

	const navButtonClickHandler = (newRoute: string) => {
		history.push(newRoute);
	};

	return (
		<>
			<DesktopNavBarView
				navButtons={navButtons}
				navButtonClickHandler={navButtonClickHandler}
			/>
			{/* <MobileNavBar navigationButtons={navigationButtons} /> */}
		</>
	);
};

export default NavBarPresenter;
