import { apiBurger } from "../../utils/api";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

const getUserSuccess = (payload) => ({ type: GET_USER_SUCCESS, payload})

export function getUser() {
    return (dispatch) =>
        apiBurger.getProfile()
            .then((data) => {
                dispatch(getUserSuccess(data));
            })
            .catch((error) => {
                console.log(error)
            })
}

const updateUserSuccess = (payload) => ({ type: UPDATE_USER_SUCCESS, payload })

export function updateUser(name, email, password) {
    return (dispatch) =>
        apiBurger.updateProfile(name, email, password)
            .then((data) => {
                dispatch(updateUserSuccess(data));
                // dispatch(getUserSuccess(res))
            })
            .catch((error) => {
                console.log(error)
            })
}
