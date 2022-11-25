import { GET_BURGER_INGREDIENTS_SUCCESS } from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"
import { TIngredientType } from "../types/types";

type TInitialState = {
  burgerIngredients: Array<TIngredientType>
}

export const initialState: TInitialState = {
  burgerIngredients: []
}

export const burgerIngredientsReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    // case GET_BURGER_INGREDIENTS_REQUEST: {
    //   return {
    //     ...state,
    //     burgerIngredientsRequest: true
    //   }
    // }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        burgerIngredients: [...action.payload],
      }
    }
    // case GET_BURGER_INGREDIENTS_ERROR: {
    //   return {
    //     ...state,
    //     burgerIngredientsRequest: false,
    //     burgerIngredientsError: true
    //   }
    // }
    default: {
      return state;
    }
  }
}
