import axios from "axios";
import { VITE_BASE_URL } from "./config";

export const axiosInstance = axios.create({ baseURL: VITE_BASE_URL });

export default axiosInstance;
