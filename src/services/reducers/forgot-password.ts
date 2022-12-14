import { FORGOT_PASSWORD_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"

type TInitialState = {
    success: boolean
}

export const initialState = {
    success: false,
}

export const forgotPasswordReducer = (state = initialState, action: TUnionAction): TInitialState => {
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
