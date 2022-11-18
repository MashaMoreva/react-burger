import { apiBurger } from "../../utils/api";
import { setCookie } from "../../utils/сookies";

export const USER_AUTHORIZATION_REQUEST = 'USER_AUTHORIZATION_REQUEST';
export const USER_AUTHORIZATION_SUCCESS = 'USER_AUTHORIZATION_SUCCESS';
export const USER_AUTHORIZATION_ERROR = 'USER_AUTHORIZATION_ERROR';

const userAuthorizationSuccess = (payload) => ({ type: USER_AUTHORIZATION_SUCCESS, payload })

export function userAuthorization(email, password) {
    return (dispatch) =>
        apiBurger.authorization(email, password)
            .then((data) => {
                const { success, refreshToken, accessToken } = data
                if (success) {
                    // sessionStorage.setItem('authorization', JSON.stringify(true));
                    setCookie('access', accessToken.split('Bearer ')[1]);
                    setCookie('refresh', refreshToken);
                    dispatch(userAuthorizationSuccess(data));
                }
            })
            .catch((error) => {
                console.log(error)
            })
}
