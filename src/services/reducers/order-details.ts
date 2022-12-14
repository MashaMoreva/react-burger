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
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        number: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
