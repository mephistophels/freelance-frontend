import { API } from "../endpoints";
import { axiosInstance } from "../instance";


export const postReplenish = data =>
  axiosInstance.post(API.BALANCE_REPLENISH, data)
  .then(res => res.data)
  .catch(err => console.log(err))

export const postWithdraw = data =>
  axiosInstance.post(API.BALANCE_WITHDRAW, data)
  .then(res => res.data)
  .catch(err => console.log(err))

export const getBalanceList = () =>
    axiosInstance.get(API.BALANCE_LIST)
    .then(res => res.data)
    .catch(err => console.log(err))

export const getMyBalance = () =>
    axiosInstance.get('/balance/info')
    .then(res => res.data)
    .catch(err => console.log(err))

export const postLeaveReview = (data) =>
    axiosInstance.post('/mark', data)