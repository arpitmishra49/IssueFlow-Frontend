import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // later:
  // projects: projectReducer,
  // issues: issueReducer,
  // analytics: analyticsReducer,
});

export default rootReducer;