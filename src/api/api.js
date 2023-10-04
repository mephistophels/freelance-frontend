
import { axiosInstance } from "./instance";
import {API} from "../consts";


export const login = data =>
  axiosInstance.post(API.LOGIN_POST, data)
  .then(user => {
    window.localStorage.setItem('accessJwt', user.data.accessJwt);
    return user.data;
  });

export const registration = data =>
  axiosInstance.post(API.REGISTRATION_POST, data)
  .then(user => {
    return user.data;
  });

export const getOrdersList = (page, size, order='ASC') => {
    return axiosInstance.get(`${API.ORDER_LIST_GET}?page=${page}&size=${size}&order=${order}`)
    .then(res => {
      return res.data;
    })
}