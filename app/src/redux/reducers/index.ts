import currentProductTypeReducer from "./currentProductType";

import { combineReducers } from "redux";
import currentBuildReducers from "./currentBuild";

const rootReducers = combineReducers({
  currentProductType: currentProductTypeReducer,
  currentBuild: currentBuildReducers,
});

export default rootReducers;
