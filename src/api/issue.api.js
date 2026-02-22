import api from "./axios";

// GET all issues
export const fetchIssuesAPI = () =>
  api.get("/issues");

// CREATE issue (tester)
export const createIssueAPI = (data) =>
  api.post("/issues", data);

// ASSIGN issue (manager/admin)
export const assignIssueAPI = (id, data) =>
  api.patch(`/issues/${id}/assign`, data);

// UPDATE status
export const updateStatusAPI = (id, data) =>
  api.patch(`/issues/${id}/status`, data);