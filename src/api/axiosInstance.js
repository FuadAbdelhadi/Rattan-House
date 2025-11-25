// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://core.rattan-house.store",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
