import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_START_USER,
    WS_CONNECTION_SUCCESS_USER,
    WS_CONNECTION_ERROR_USER,
    WS_CONNECTION_CLOSED_USER,
    WS_GET_ORDERS_USER
} from "../constants/constants";
import { TOrders, TUserOrders } from "../types/types";
import {
    IWsConnectionStart,
    IWsConnectionSuccess,
    IWsConnectionError,
    IWsConnectionClosed,
    IWsGetOrders,
    IWsConnectionStartUser,
    IWsConnectionSuccessUser,
    IWsConnectionErrorUser,
    IWsConnectionClosedUser,
    IWsGetOrdersUser,
    IWsActions
} from "./interfaces";

export const wsConnectionStart = (): IWsConnectionStart => {
    return {
        type: WS_CONNECTION_START
    };
};

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = (): IWsConnectionError => {
    return {
        type: WS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetOrderds = (payload: TOrders): IWsGetOrders => {
    return {
        type: WS_GET_ORDERS,
        payload
    };
};

export const wsConnectionStartUser = (): IWsConnectionStartUser => {
    return {
        type: WS_CONNECTION_START_USER
    };
};

export const wsConnectionSuccessUser = (): IWsConnectionSuccessUser => {
    return {
        type: WS_CONNECTION_SUCCESS_USER
    };
};

export const wsConnectionErrorUser = (): IWsConnectionErrorUser => {
    return {
        type: WS_CONNECTION_ERROR_USER
    };
};

export const wsConnectionClosedUser = (): IWsConnectionClosedUser => {
    return {
        type: WS_CONNECTION_CLOSED_USER
    };
};

export const wsGetOrderdsUser = (payload: TUserOrders): IWsGetOrdersUser => {
    return {
        type: WS_GET_ORDERS_USER,
        payload
    };
};

export const wsActions: IWsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onOrders: WS_GET_ORDERS
};

export const wsActionsUser: IWsActions = {
    wsInit: WS_CONNECTION_START_USER,
    onOpen: WS_CONNECTION_SUCCESS_USER,
    onClose: WS_CONNECTION_CLOSED_USER,
    onError: WS_CONNECTION_ERROR_USER,
    onOrders: WS_GET_ORDERS_USER
};
