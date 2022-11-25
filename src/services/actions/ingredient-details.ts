import {
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS
} from "../constants/constants"
import { TIngredientType } from "../types/types"
import { IAddIgredientDetails, IDeleteIgredientDetails } from "./interfaces"

export const addIgredientDetails = (ingredient: TIngredientType): IAddIgredientDetails => ({ type: ADD_INGREDIENT_DETAILS, payload: ingredient })
export const deleteIgredientDetails = (): IDeleteIgredientDetails => ({ type: DELETE_INGREDIENT_DETAILS })
