import { getCookie } from "../../utils/сookies"
import { USER_AUTHORIZATION_SUCCESS, USER_LOGOUT_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"

type TInitialState = {
    authorization: boolean
}

export const initialState = {
    authorization: getCookie('access') ? true : false,
}

export const userAuthorizationReducer = (state = initialState, action: TUnionAction): TInitialState => {
    switch (action.type) {
        case USER_AUTHORIZATION_SUCCESS: {
            return {
                ...state,
                authorization: true,
            }
        }
        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                authorization: false,
            }
        }
        default: {
            return state;
        }
    }
}
