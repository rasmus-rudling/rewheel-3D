import currentProductTypeReducer from './currentProductType';
import loggedInUser from './loggedInUser';

import { combineReducers } from 'redux';
import currentBuildReducers from './currentBuild';

const rootReducers = combineReducers({
	currentProductType: currentProductTypeReducer,
	currentBuild: currentBuildReducers,
	loggedInUser: loggedInUser,
});

export default rootReducers;
