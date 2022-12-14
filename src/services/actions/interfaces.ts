import {
    USER_AUTHORIZATION_SUCCESS,
    SET_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR,
    SET_ACTIVE_TAB,
    SCROLL_INGREDIENTS,
    GET_BURGER_INGREDIENTS_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS,
    USER_LOGOUT_SUCCESS,
    GET_ORDER_DETAILS_SUCCESS,
    USER_REGISTRATION_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    GET_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
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
} from "../constants/constants"
import { TIngredientType, TUser, TOrders, TUserOrders } from "../types/types"

export interface IUserAuthorizationSuccess {
    readonly type: typeof USER_AUTHORIZATION_SUCCESS,
    readonly payload: boolean
}

export interface ISetBun {
    readonly type: typeof SET_BUN,
    readonly payload: TIngredientType
}

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT,
    readonly payload: TIngredientType
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT,
    readonly payload: TIngredientType
}

export interface IMoveIngredient {
    readonly type: typeof MOVE_INGREDIENT,
    readonly payload: {
        start: number,
        end: number
    }
}

export interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR
}

export interface ISetActiveTab {
    readonly type: typeof SET_ACTIVE_TAB,
    readonly payload: string
}

export interface IScrollIngredients {
    readonly type: typeof SCROLL_INGREDIENTS,
    readonly payload: string
}

export interface IGetBurgerIngredientsSuccess {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS,
    readonly payload: Array<TIngredientType>
}

export interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS,
    readonly payload: boolean
}

export interface IAddIngredientDetails {
    readonly type: typeof ADD_INGREDIENT_DETAILS,
    readonly payload: TIngredientType
}

export interface IDeleteIngredientDetails {
    readonly type: typeof DELETE_INGREDIENT_DETAILS
}

export interface IUserLogoutSuccess {
    readonly type: typeof USER_LOGOUT_SUCCESS,
    readonly payload: boolean
}

export interface IGetOrderDetailsSuccess {
    readonly type: typeof GET_ORDER_DETAILS_SUCCESS,
    readonly payload: string
}

export interface IUserRegistrationSuccess {
    readonly type: typeof USER_REGISTRATION_SUCCESS,
    readonly payload: TUser
}

export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS,
    readonly payload: boolean
}

export interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS,
    readonly payload: TUser
}

export interface IUpdateUserSuccess {
    readonly type: typeof UPDATE_USER_SUCCESS,
    readonly payload: TUser
}

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START
}

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS,
    readonly payload: TOrders
}

export interface IWsConnectionStartUser {
    readonly type: typeof WS_CONNECTION_START_USER
}

export interface IWsConnectionSuccessUser {
    readonly type: typeof WS_CONNECTION_SUCCESS_USER
}

export interface IWsConnectionErrorUser {
    readonly type: typeof WS_CONNECTION_ERROR_USER
}

export interface IWsConnectionClosedUser {
    readonly type: typeof WS_CONNECTION_CLOSED_USER
}

export interface IWsGetOrdersUser {
    readonly type: typeof WS_GET_ORDERS_USER,
    readonly payload: TUserOrders
}

export type TUnionAction =
    | IUserAuthorizationSuccess
    | ISetBun
    | IAddIngredient
    | IDeleteIngredient
    | IMoveIngredient
    | IClearConstructor
    | ISetActiveTab
    | IScrollIngredients
    | IGetBurgerIngredientsSuccess
    | IForgotPasswordSuccess
    | IAddIngredientDetails
    | IDeleteIngredientDetails
    | IUserLogoutSuccess
    | IGetOrderDetailsSuccess
    | IUserRegistrationSuccess
    | IResetPasswordSuccess
    | IGetBurgerIngredientsSuccess
    | IGetUserSuccess
    | IUpdateUserSuccess
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetOrders
    | IWsConnectionStartUser
    | IWsConnectionSuccessUser
    | IWsConnectionErrorUser
    | IWsConnectionClosedUser
    | IWsGetOrdersUser

export type TUnionWsAction =
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetOrders

export type TUnionWsActionUser =
    | IWsConnectionStartUser
    | IWsConnectionSuccessUser
    | IWsConnectionErrorUser
    | IWsConnectionClosedUser
    | IWsGetOrdersUser

export interface IWsActions {
    readonly wsInit: string
    readonly onOpen: string
    readonly onClose: string
    readonly onError: string
    readonly onOrders: string
}
