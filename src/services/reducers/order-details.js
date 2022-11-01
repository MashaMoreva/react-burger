import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_ERROR
} from '../actions/order-details'

export const orderDetailsState = {
  id: '',
  orderDetailsRequest: false,
  orderDetailsError: false
}

export const orderDetailsReducer = (state = orderDetailsState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        orderDetailsRequest: true,
      }
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetailsError: false,
        id: action.payload
      }
    }
    case GET_ORDER_DETAILS_ERROR: {
      return {
        ...state,
        orderDetailsRequest: false,
        orderDetailsError: true
      }
    }
    default: {
      return state;
    }
  }
}