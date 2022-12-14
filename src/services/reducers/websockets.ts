import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_SUCCESS_USER,
    WS_CONNECTION_ERROR_USER,
    WS_CONNECTION_CLOSED_USER,
    WS_GET_ORDERS_USER
} from "../constants/constants";
import { TUnionWsAction, TUnionWsActionUser } from "../actions/interfaces";
import { TOrder } from "../types/types";

type TInitialState = {
    wsConnection: boolean,
    orders: Array<TOrder> | [],
    total: null | number,
    totalToday: null | number
}

export const initialState: TInitialState = {
    wsConnection: false,
    orders: [],
    total: null,
    totalToday: null
}

type TInitialStateUser = {
    wsConnection: boolean,
    orders: Array<TOrder> | []
}


export const initialStateUser: TInitialStateUser = {
    wsConnection: false,
    orders: []
}

export const wsReducer = (state = initialState, action: TUnionWsAction): TInitialState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnection: true
            };
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnection: false
            };
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnection: false,
                orders: [],
                total: null,
                totalToday: null
            };
        }
        case WS_GET_ORDERS: {
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday

            };
        }
        default:
            return state
    }
}

export const wsUserReducer = (state = initialStateUser, action: TUnionWsActionUser): TInitialStateUser => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS_USER: {
            return {
                ...state,
                wsConnection: true
            };
        }
        case WS_CONNECTION_ERROR_USER: {
            return {
                ...state,
                wsConnection: false
            };
        }
        case WS_CONNECTION_CLOSED_USER: {
            return {
                ...state,
                wsConnection: false,
                orders: []
            };
        }
        case WS_GET_ORDERS_USER: {
            return {
                ...state,
                orders: action.payload.orders
            };
        }
        default:
            return state
    }
}
