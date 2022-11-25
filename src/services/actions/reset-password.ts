import { apiBurger } from "../../utils/api";
import { RESET_PASSWORD_SUCCESS } from "../constants/constants";
import { AppThunk } from "../types/types";
import { IResetPasswordSuccess } from "./interfaces";

const resetPasswordSuccess = (payload: boolean): IResetPasswordSuccess => ({ type: RESET_PASSWORD_SUCCESS, payload})

export const resetPassword: AppThunk = (password: string, token: string) => {
    return (dispatch) =>
        apiBurger.reset(password, token)
            .then(({ success }) => {
                dispatch(resetPasswordSuccess(success));
            })
            .catch((error) => {
                console.log(error)
            })
}
