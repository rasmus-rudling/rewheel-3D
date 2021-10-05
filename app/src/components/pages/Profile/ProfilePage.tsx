import React from 'react';
import Spinner from '../../common/Spinner';

const ProfilePage = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex justify-center h-max w-max">
				<Spinner />
			</div>
		</div>
	);
};

export default ProfilePage;
