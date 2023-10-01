import axios from "axios";

const HOST = process.env.SERVER_HOST    || "http://127.0.0.1";
const PORT = process.env.SERVER_PORT    || 8080;
const VERSION = process.env.API_VERSION || 'v1';
const API = 'api';
export const API_URL = `${HOST}/${PORT}/${API}/${VERSION}`

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});