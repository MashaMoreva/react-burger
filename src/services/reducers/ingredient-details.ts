import {
  ADD_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS
} from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"

type TInitialState = {
  ingredientDetails: {
    image_large?: string,
    name?: string,
    calories?: number,
    proteins?: number,
    fat?: number,
    carbohydrates?: number
  }
} 

export const initialState: TInitialState = {
  ingredientDetails: {}
}

export const ingredientDetailsReducer = (state = initialState, action: TUnionAction): TInitialState => {
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
        ingredientDetails: {}
      }
    }
    default: {
      return state;
    }
  }
}
