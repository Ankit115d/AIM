import axios from "axios";

const api = axios.create({
  baseURL: "/api/admin/logs",
});

const authHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return { Authorization: `Bearer ${token}` };
};

export const getLogs = () =>
  api.get("/", { headers: authHeaders() });
