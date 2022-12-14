import { apiBurger } from "../../utils/api";
import { FORGOT_PASSWORD_SUCCESS } from "../constants/constants";
import { AppThunk } from "../types/types";
import { IForgotPasswordSuccess } from "./interfaces";

export const forgotPasswordSuccess = (payload: boolean): IForgotPasswordSuccess => ({ type: FORGOT_PASSWORD_SUCCESS, payload })

export const forgotPassword: AppThunk = (email: string) => {
    return (dispatch) =>
        apiBurger.forgot(email)
            .then(({ success }) => {
                dispatch(forgotPasswordSuccess(success));
            })
            .catch((error) => {
                console.log(error)
            })
}
