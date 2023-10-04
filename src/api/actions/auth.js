import { API } from "../endpoints";
import { axiosInstance } from "../instance";



export const login = data =>
  axiosInstance.post(API.LOGIN, data)
  .then(user => {
    window.localStorage.setItem('accessJwt', user.data.accessJwt);
    return user.data;
  });

export const registration = data =>
  axiosInstance.post(API.REGISTRATION, data)
  .then(user => {
    return user.data;
  });