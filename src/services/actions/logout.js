import { apiBurger } from "../../utils/api";
import { deleteCookie } from "../../utils/сookies";

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

const userLogoutSuccess = (payload) => ({ type: USER_LOGOUT_SUCCESS, payload })

export function userLogout() {
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
