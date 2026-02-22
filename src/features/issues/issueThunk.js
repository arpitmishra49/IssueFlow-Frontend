import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchIssuesAPI,
  createIssueAPI,
  assignIssueAPI,
  updateStatusAPI,
} from "../../api/issue.api";

export const getIssues = createAsyncThunk(
  "issues/getIssues",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchIssuesAPI();
      return res.data.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch issues");
    }
  }
);

export const createIssue = createAsyncThunk(
  "issues/createIssue",
  async (data, { rejectWithValue }) => {
    try {
      const res = await createIssueAPI(data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Failed to create issue");
    }
  }
);

export const assignIssue = createAsyncThunk(
  "issues/assignIssue",
  async ({ id, assignedTo }, { rejectWithValue }) => {
    try {
      const res = await assignIssueAPI(id, { assignedTo });
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Failed to assign issue");
    }
  }
);

export const updateIssueStatus = createAsyncThunk(
  "issues/updateIssueStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await updateStatusAPI(id, { status });
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Failed to update status");
    }
  }
);