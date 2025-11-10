// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://adamabzakh.tech/rattan",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
