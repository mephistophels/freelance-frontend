import { API } from "../endpoints";
import {axiosInstance} from "../instance";


export const getAvailableOrdersList = query => 
  axiosInstance.get(API.ORDER_LIST, { params: query })

export const getTodoOrdersList = query => 
  axiosInstance.get(API.ORDER_TODO_LIST, { params: query })

export const getMyOrdersList = query => 
  axiosInstance.get(API.MY_ORDER_LIST, { params: query })

export const postCreateOrder = data => 
  axiosInstance.post(API.ORDER, data)
  .then(res => {
    return res?.data;
  }).catch(e => console.log(e));

export const putOrder = (id, data) => 
  axiosInstance.put(`${API.ORDER}/${id}`, data)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));

export const getOrderById = id => 
  axiosInstance.get(`${API.ORDER}/${id}`)

export const deleteOrder = id => 
  axiosInstance.delete(`${API.ORDER}/${id}`)
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));


export const postSendRespond = (orderId, data) =>
  axiosInstance.post(API.ORDER_RESPOND(orderId), data);

export const postCloseOrder = (orderId, data) => 
  axiosInstance.post(API.ANSWER_RESPOND(orderId), data);