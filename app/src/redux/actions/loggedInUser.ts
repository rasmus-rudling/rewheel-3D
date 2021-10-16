import { User } from '../../types';

export const loginUser = (userInfo: User | null) => ({
	type: 'LOGIN',
	data: {
		user: userInfo,
	},
});

export const logoutUser = () => ({
	type: 'LOGOUT',
	data: {},
});
