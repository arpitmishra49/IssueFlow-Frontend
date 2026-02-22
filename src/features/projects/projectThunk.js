import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProjectsAPI } from "../../api/project.api";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchProjectsAPI();
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch projects");
    }
  }
);