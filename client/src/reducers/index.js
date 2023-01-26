import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

const appReducers = combineReducers({
  authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
