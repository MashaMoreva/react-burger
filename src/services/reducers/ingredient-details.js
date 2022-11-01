import {
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS
} from '../actions/ingredient-details';

export const ingredientDetailsState = {
  ingredientDetails: null
}

export const ingredientDetailsReducer = (state = ingredientDetailsState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: action.payload
      }
    }
    case DELETE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: null
      }
    }
    default: {
      return state;
    }
  }
}