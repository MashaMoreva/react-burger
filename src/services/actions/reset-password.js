import { apiBurger } from "../../utils/api";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

const resetPasswordSuccess = (payload) => ({ type: RESET_PASSWORD_SUCCESS, payload})

export function resetPassword(password, token) {
    return (dispatch) =>
        apiBurger.reset(password, token)
            .then(({ success }) => {
                dispatch(resetPasswordSuccess(success));
            })
            .catch((error) => {
                console.log(error)
            })
}
