import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import fileReducer from "./FileReducer";

const appReducers = combineReducers({
  authReducer,
  fileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
