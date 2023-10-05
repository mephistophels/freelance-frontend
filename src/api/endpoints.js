export const API = {
  LOGIN: '/public/auth/login',
  REGISTRATION: '/public/auth/registration',
  ORDER: '/order',
  ORDER_LIST: '/order/list',
  MY_ORDER_LIST: '/order/list/my/created',
  ORDER_TODO_LIST: 'order/list/my/inprogress',
  BALANCE_LIST: '/balance/list',
  BALANCE_REPLENISH: '/balance/replenish',
  BALANCE_WITHDRAW: '/balance/withdraw',
  USER_ME: '/user/me',
  ORDER_RESPOND: orderId => `/order/${orderId}/request`,
  ANSWER_RESPOND: orderId => `/order/${orderId}/answers`,
}

/*
export const API = {
  LOGIN_POST: '/public/auth/login',
  REGISTRATION_POST: '/public/auth/registration',
  CREATE_ORDER_POST: '/order',
  GET_ORDERS_BY_ID_GET: '/order',
  DELETE_ORDER_BY_ID_DELETE: '/order',
  ORDER_LIST_GET: '/order/list',
  GET_BALANCE_GET: '/balance/list',
  REPLENISH_BALANCE_POST: '/balance/replenish',
  WITHDRAW_BALANCE_POST: '/balance/withdraw',
}
*/