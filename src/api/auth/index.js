import endpoints from "../endpoints";
import { axiosInstance } from "../instance";


export const login = data => 
  axiosInstance.post(endpoints.AUTH.LOGIN, data)
  .then(user => {
    window.localStorage.setItem('user', JSON.stringify(user.data));
    return user.data;
  });

export const registration = data => 
  axiosInstance.post(endpoints.AUTH.REGISTRATION, data)
  .then(user => {
    window.localStorage.setItem('user', JSON.stringify(user.data));
    return user.data;
  });