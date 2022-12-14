import { USER_REGISTRATION_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"
import { TUser } from "../types/types"

type TInitialState = TUser

export const initialState: TInitialState = {
  success: false,
  user: {
    email: '',
    name: ''
  },
}

export const userRegistrationReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user
      }
    }
    default: {
      return state;
    }
  }
}
