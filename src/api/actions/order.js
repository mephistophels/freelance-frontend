import { API } from "../endpoints";
import {axiosInstance} from "../instance";


export const getOrdersList = query => 
  axiosInstance.get(API.ORDER_LIST, { params: query })
  .then(res => {
    return res.data;
  }).catch(e => console.log(e));