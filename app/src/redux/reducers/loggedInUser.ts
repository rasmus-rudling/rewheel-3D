import { User } from '../../types';

interface Action {
	type: 'LOGIN' | 'LOGOUT' | 'REGISTER';
	data: {
		user?: User;
	};
}

// const testUser: User = {
// 	id: 'asd',
// 	name: 'asd asd',
// 	username: 'asd qwe ',
// 	email: 'a qwe qwe',
// 	avgWPM: 123,
// };

const loggedInUserReducer = (state = null, action: Action) => {
	switch (action.type) {
		case 'REGISTER':
			console.log('User wants to register with', action.data.user);
			return action.data.user;
		case 'LOGIN':
			console.log('User wants to login with', action.data.user);
			return action.data.user;
		case 'LOGOUT':
			console.log('User wants to login with', action.data.user);
			return null;
		default:
			return state;
	}
};

export default loggedInUserReducer;
