import { API } from "../endpoints";
import { axiosInstance } from "../instance";


export const replenish = data =>
  axiosInstance.post(API.BALANCE_REPLENISH, data)
  .then(res => res.data)
  .catch(err => console.log(err))