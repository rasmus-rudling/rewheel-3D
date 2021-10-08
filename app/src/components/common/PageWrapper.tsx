import React from 'react';
import NavBarPresenter from './NavBar/NavBarPresenter';

interface Props {
	children: JSX.Element;
}

const PageWrapper = ({ children }: Props) => {
	return (
		<div className="bg-gray-100 min-h-screen h-16 w-full pt-13 box-border">
			<NavBarPresenter />
			{children}
		</div>
	);
};

export default PageWrapper;
