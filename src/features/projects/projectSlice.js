import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./projectThunk";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default projectSlice.reducer;