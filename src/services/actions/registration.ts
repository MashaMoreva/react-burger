import { apiBurger } from "../../utils/api";
import { USER_REGISTRATION_SUCCESS } from "../constants/constants";
import { AppThunk, TUser } from "../types/types";
import { IUserRegistrationSuccess } from "./interfaces";

export const userRegistrationSuccess = (payload: TUser): IUserRegistrationSuccess => ({ type: USER_REGISTRATION_SUCCESS, payload })

export const userRegistration: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch) =>
        apiBurger.registration(name, email, password)
            .then((res) => {
                dispatch(userRegistrationSuccess(res));
            })
            .catch((error) => {
                console.log(error)
            })
}

