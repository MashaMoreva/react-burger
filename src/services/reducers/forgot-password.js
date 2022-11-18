import { FORGOT_PASSWORD_SUCCESS } from "../actions/forgot-password";

export const initialState = {
    success: false,
}

export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
