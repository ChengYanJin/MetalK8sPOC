import { combineReducers } from "redux";
import config from "./configReducer";
import owner from "./ownerReducer";

const metalk8sReducer = combineReducers({
  config,
  owner
});

export default metalk8sReducer;
