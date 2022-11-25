import { GET_ORDER_DETAILS_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"

type TInitialState = {
  number: string
}

export const initialState = {
  number: ''
}

export const orderDetailsReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    // case GET_ORDER_DETAILS_REQUEST: {
    //   return {
    //     ...state,
    //     orderDetailsRequest: true,
    //   }
    // }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        number: action.payload
      }
    }
    // case GET_ORDER_DETAILS_ERROR: {
    //   return {
    //     ...state,
    //     orderDetailsRequest: false,
    //     orderDetailsError: true
    //   }
    // }
    default: {
      return state;
    }
  }
}
