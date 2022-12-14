import { apiBurger } from "../../utils/api";
import { GET_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../constants/constants";
import { AppThunk, TUser } from "../types/types";
import { IGetUserSuccess, IUpdateUserSuccess } from "./interfaces";


export const getUserSuccess = (payload: TUser): IGetUserSuccess => ({ type: GET_USER_SUCCESS, payload })

export const getUser: AppThunk = () => {
    return (dispatch) =>
        apiBurger.getProfile()
            .then((data) => {
                dispatch(getUserSuccess(data));
            })
            .catch((error) => {
                console.log(error)
            })
}

export const updateUserSuccess = (payload: TUser): IUpdateUserSuccess => ({ type: UPDATE_USER_SUCCESS, payload })

export const updateUser: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch) =>
        apiBurger.updateProfile(name, email, password)
            .then((data) => {
                dispatch(updateUserSuccess(data));
            })
            .catch((error) => {
                console.log(error)
            })
}
