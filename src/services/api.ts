import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (optional)
});

export default api;
