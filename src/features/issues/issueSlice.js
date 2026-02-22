import { createSlice } from "@reduxjs/toolkit";
import {
  getIssues,
  createIssue,
  assignIssue,
  updateIssueStatus,
} from "./issueThunk";

const issueSlice = createSlice({
  name: "issues",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIssues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(createIssue.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(assignIssue.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (i) => i._id === action.payload._id
        );
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(updateIssueStatus.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (i) => i._id === action.payload._id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default issueSlice.reducer;