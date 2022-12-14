import {
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS
} from "../constants/constants"
import { TIngredientType } from "../types/types"
import { IAddIngredientDetails, IDeleteIngredientDetails } from "./interfaces"

export const addIngredientDetails = (ingredient: TIngredientType): IAddIngredientDetails => ({ type: ADD_INGREDIENT_DETAILS, payload: ingredient })
export const deleteIngredientDetails = (): IDeleteIngredientDetails => ({ type: DELETE_INGREDIENT_DETAILS })
