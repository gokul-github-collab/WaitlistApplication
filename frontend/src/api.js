import axios from "axios";
import { ACCESS_TOKEN } from "./constants.js";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Base URL for API requests
});

// Add a request interceptor to include the access token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // If a token exists, add it to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default api;
