import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import issueReducer from "../features/issues/issueSlice";
import projectReducer from "../features/projects/projectSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  issues: issueReducer,
  projects: projectReducer,   
});

export default rootReducer;