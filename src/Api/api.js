import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  setTimeout: 8000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Enable sending cookies with requests
});

API.interceptors.request.use(
  (config) => {
    // Removed Authorization header since using httpOnly cookies
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = "/auth/login";
      } else if (error.response.status === 403) {
        alert("You don't have permission to access this resource.");
      } else if (error.response.status === 500) {
        alert("Internal Server Error. Please try again later.");
      }
    } else if (
      error.code === "ECONNABORTED" ||
      error.message === "Network Error"
    ) {
      alert("Network Error. Please check your internet connection.");
    }
    return Promise.reject(error);
  }
);
export default API;
