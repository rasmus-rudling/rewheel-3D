import React, { useState } from 'react';
import { useHistory } from 'react-router';
import DesktopNavBarView from './DesktopNavBarView';
import MobileNavBarView from './MobileNavBarView';

export interface NavButton {
	route: string;
	text: string;
}

const navButtons: NavButton[] = [
	{ route: 'profile', text: 'profil' },
	{ route: 'bike-builder', text: 'cykelbyggaren' },
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

// const Navigation = () => {
// 	return (
// 		<div className={classes.Navigation}>
// 			<div className={classes.desktopContainer}>
// 				<DesktopNavigation
// 					navigationButtons={navigationButtons}
// 					navigationButtonClickHandler={navigationButtonClickHandler}
// 				/>
// 			</div>

// 			<div className={classes.mobileContainer}>
// 				<MobileNavigation
// 					navigationButtons={navigationButtons}
// 					navigationButtonClickHandler={navigationButtonClickHandler}
// 				/>
// 			</div>
// 		</div>
// 	);
