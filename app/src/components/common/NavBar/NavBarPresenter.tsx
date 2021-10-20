import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DesktopNavBarView from './NavBarView';
import { useAuth0 } from '@auth0/auth0-react';
import { useApolloClient } from '@apollo/client';
import { debug } from 'console';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/loggedInUser';
import { User } from '../../../types';
export interface NavButton {
	route: string;
	text: string;
}

const navButtons: NavButton[] = [
	{ route: 'discover', text: 'utforska' },
	{ route: 'bike-builder', text: 'cykelbyggaren' },
	{ route: 'profile', text: 'profil' },
	{ route: 'login', text: 'logga in' },
	{ route: 'logout', text: 'logga ut' },
];

const NavBarPresenter = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	const client = useApolloClient();

	const navButtonClickHandler = (newRoute: string) => {
		if (newRoute === 'login') {
			loginWithRedirect();
		} else if (newRoute === 'logout') {
			logout();
			client.resetStore();
		} else {
			history.push(newRoute);
		}
	};

	const navButtonsFiltered = [...navButtons].filter((navButton) => {
		if (isAuthenticated) {
			return navButton.route !== 'login';
		} else {
			return navButton.route !== 'logout' && navButton.route !== 'profile';
		}
	});

	useEffect(() => {
		if (user) {
			const currentUser: User = {
				email: user.email ? user.email : '',
				firstName: user.given_name ? user.given_name : '',
				lastName: user.family_name ? user.family_name : '',
				imgUrl: user.picture ? user.picture : '',
				username: user.nickname ? user.nickname : '',
			};

			dispatch(loginUser(currentUser));

			// Add user to DB if not exists
		}
	}, [user]);

	return (
		<>
			<DesktopNavBarView
				navButtons={navButtonsFiltered}
				navButtonClickHandler={navButtonClickHandler}
			/>
			{/* <MobileNavBar navigationButtons={navigationButtons} /> */}
		</>
	);
};

export default NavBarPresenter;
