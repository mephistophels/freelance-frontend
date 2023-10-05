import { API } from "../endpoints";
import {axiosInstance} from "../instance";


export const getAvailableOrdersList = query => 
  axiosInstance.get(API.ORDER_LIST, { params: query })
  .then(res => res?.data).catch(e => console.log(e));

export const getTodoOrdersList = query => 
  axiosInstance.get(API.ORDER_LIST, { params: query })
  .then(res => res?.data).catch(e => console.log(e));

export const getMyOrdersList = query => 
  axiosInstance.get(API.ORDER_LIST, { params: query })
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));

export const postCreateOrder = data => 
  axiosInstance.post(API.ORDER, data)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));

export const getOrderById = id => 
  axiosInstance.get(`${API.ORDER}/${id}`)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));

export const deleteOrder = id => 
  axiosInstance.delete(`${API.ORDER}/${id}`)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));

export const putOrder = (id, data) => 
  axiosInstance.put(`${API.ORDER}/${id}`, data)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));