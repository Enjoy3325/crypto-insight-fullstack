import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
if (typeof window === 'undefined') return config; // SSR guard
const token = localStorage.getItem("authToken");
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)
  // Response interceptor 
api.interceptors.response.use(
(response) => response,
(error) => {
  if (error.response) {
    // Handle specific status codes
    if (error.response.status === 401 && typeof window !== 'undefined') {
      // Unauthorized, redirect to login
      localStorage.removeItem('authToken');
      window.location.href = "/login";
    }
  }
  return Promise.reject(error);
} 
);

export default api;