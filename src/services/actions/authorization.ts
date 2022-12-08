import { apiBurger } from "../../utils/api";
import { setCookie } from "../../utils/сookies";
import { USER_AUTHORIZATION_SUCCESS } from "../constants/constants";
import { AppThunk } from "../types/types";
import { IUserAuthorizationSuccess } from "./interfaces";

const userAuthorizationSuccess = (payload: boolean): IUserAuthorizationSuccess => ({ type: USER_AUTHORIZATION_SUCCESS, payload })

export const userAuthorization: AppThunk = (email: string, password: string) => {
    return (dispatch) =>
        apiBurger.authorization(email, password)
            .then((data) => {
                const { success, refreshToken, accessToken } = data
                if (success) {
                    setCookie('access', accessToken.split('Bearer ')[1]);
                    setCookie('refresh', refreshToken);
                    dispatch(userAuthorizationSuccess(data));
                }
            })
            .catch((error) => {
                console.log(error)
            })
}
