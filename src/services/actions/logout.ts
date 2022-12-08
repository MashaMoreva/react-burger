import { apiBurger } from "../../utils/api";
import { deleteCookie } from "../../utils/сookies";
import { USER_LOGOUT_SUCCESS } from "../constants/constants";
import { AppThunk } from "../types/types";
import { IUserLogoutSuccess } from "./interfaces";

const userLogoutSuccess = (payload: boolean): IUserLogoutSuccess => ({ type: USER_LOGOUT_SUCCESS, payload })

export const userLogout: AppThunk = () => {
    return (dispatch) =>
        apiBurger.logout()
            .then(({ success }) => {
                if (success) {
                    deleteCookie('access');
                    deleteCookie('refresh');
                    dispatch(userLogoutSuccess(success));
                }
            })
            .catch((error) => {
                console.log(error)
            })
}
