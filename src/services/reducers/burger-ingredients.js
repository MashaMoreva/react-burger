import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_ERROR
} from '../actions/burger-ingredients'

export const initialState = {
  burgerIngredients: [],
  burgerIngredientsRequest: false,
  burgerIngredientsError: false,
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        burgerIngredientsRequest: true
      }
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        burgerIngredients: [...action.payload],
        burgerIngredientsError: false,
      }
    }
    case GET_BURGER_INGREDIENTS_ERROR: {
      return {
        ...state,
        burgerIngredientsRequest: false,
        burgerIngredientsError: true
      }
    }
    default: {
      return state;
    }
  }
}
