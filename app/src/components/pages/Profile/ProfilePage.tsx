import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, gql } from '@apollo/client';

const ProfilePage = () => {
	const { user, isAuthenticated } = useAuth0();
	if (isAuthenticated && user) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<div className="flex justify-center h-max w-max">
					<img className="block" src={user.picture} />
					<p className="block">{user.email}</p>
					<button>Get all bike builds</button>
					{/* {JSON.stringify(user, null, 2)} */}
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<p>Ej inloggad.</p>
			</div>
		);
	}
};

export default ProfilePage;
