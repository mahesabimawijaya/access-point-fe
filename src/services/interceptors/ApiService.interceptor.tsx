import axios from "axios";
const API_PATH = import.meta.env.VITE_API_URL;

export const ApiServiceInterceptor = axios.create({
  baseURL: API_PATH,
});

ApiServiceInterceptor.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

ApiServiceInterceptor.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
