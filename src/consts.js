export const UserRole = {
    implementer: 'implementer',
    client: 'client',
};

export const PATH = {
    HOME: "/",
    LOGIN: "/login/",
    REGISTRATION: "/registration/",
    ORDERS_OF_CLIENT: "/client/orders/my",
    CLIENT_CLOSE_ORDER_ID : "/client/finish/",
    CLIENT_CREATE_ORDER : "/client/order/create/",
    CLIENT_REDACT_ORDER_ID : "/client/order/redact/",
    CLIENT_RESPONSES : "/client/order/responses/",
    CLIENT_ORDER_ID : "/client/order/:id/",
    ORDERS_OF_IMPLEMENTOR : "/implementer/todo/",
    IMPLEMENTOR_EXCHANGE : "/implementer/available/",
    IMPLEMENTOR_PRESENTATION_ORDER_ID : "/implementer/finish/",
    IMPLEMENTOR_ORDER_ID : "/implementer/",
    IMPLEMENTOR_ORDER_RESPONSES_ID : "/implementer/responses/",
    BALANCE : "/balance/list",
    PROFILE: "/profile/"
}

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
export const TASK_STATUS = {
    CREATED: 'CREATED',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    ACCEPTED: 'ACCEPTED',
}

export const BALANCE_EVENT = {
    ADDING: 'ADDING',
    SUBSTRACTION: 'SUBSTRACTION',
    TASK_CLOSE_ADDING: 'TASK_CLOSE_ADDING',
    TASK_CLOSE_SUBSTRACTION: 'TASK_CLOSE_SUBSTRACTION',
}