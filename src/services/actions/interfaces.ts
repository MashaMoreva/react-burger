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
    UPDATE_USER_SUCCESS
} from "../constants/constants"
import { TIngredientType, TUser} from "../types/types"

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

export interface IAddIgredientDetails {
    readonly type: typeof ADD_INGREDIENT_DETAILS,
    readonly payload: TIngredientType
}

export interface IDeleteIgredientDetails {
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
  | IAddIgredientDetails
  | IDeleteIgredientDetails
  | IUserLogoutSuccess
  | IGetOrderDetailsSuccess
  | IUserRegistrationSuccess
  | IResetPasswordSuccess
  | IGetBurgerIngredientsSuccess
  | IGetUserSuccess
  | IUpdateUserSuccess
