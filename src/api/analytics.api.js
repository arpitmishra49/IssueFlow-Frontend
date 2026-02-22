import api from "./axios";

export const fetchAnalytics = (projectId) =>
  api.get(`/analytics/${projectId}`);