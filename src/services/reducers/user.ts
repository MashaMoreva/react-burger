import { GET_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces";
import { TUser } from "../types/types";

type TInitialState = TUser


export const initialState: TInitialState = {
  success: false,
  user: {
    email: '',
    name: ''
  },
};

export const profileReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      }
    }
    default: {
      return state;
    }
  }
}

