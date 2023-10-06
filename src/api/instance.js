import axios from "axios";
import { PATH } from "../consts";
import { showAlert } from "../utils";

const HOST = process.env.SERVER_HOST || 'http://90.156.225.251';//"https://33aa-46-138-172-108.ngrok-free.app";
const PORT = process.env.SERVER_PORT  || 8080;
const VERSION = process.env.API_VERSION || 'v1';
const API = 'api';
export const API_URL = `${HOST}:${PORT}/${API}/${VERSION}`;

export const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": HOST,
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  }
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('accessJwt')}`;
  return config;
});

axiosInstance.interceptors.response.use(config => config, async error => {
  if (error.response?.data.status === 'UNAUTHORIZED') {
    window.location.replace(PATH.LOGIN);
  } else if (error.response?.status === 400) {
    showAlert(error.response?.data?.message)
  }
  return error
})