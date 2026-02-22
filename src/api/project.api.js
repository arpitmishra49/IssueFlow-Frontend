import api from "./axios";

// Get projects of logged-in user
export const fetchProjectsAPI = () =>
  api.get("/projects");

// Create project
export const createProjectAPI = (data) =>
  api.post("/projects", data);

// Add member
export const addMemberAPI = (id, data) =>
  api.patch(`/projects/${id}/add-member`, data);

// Delete project
export const deleteProjectAPI = (id) =>
  api.delete(`/projects/${id}`);