import {
    SET_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR
} from "../constants/constants";
import { TIngredientType } from "../types/types";
import { IAddIngredient, IClearConstructor, IDeleteIngredient, IMoveIngredient, ISetBun } from "./interfaces";

export const setBun = (bun: TIngredientType): ISetBun => ({ type: SET_BUN, payload: bun });
export const addIngredient = (ingredient: TIngredientType): IAddIngredient => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient: TIngredientType): IDeleteIngredient => ({ type: DELETE_INGREDIENT, payload: ingredient });
export const moveIngredient = (start: number, end: number): IMoveIngredient => ({ type: MOVE_INGREDIENT, payload: { start, end } });
export const clearConstructor = (): IClearConstructor => ({ type: CLEAR_CONSTRUCTOR });
