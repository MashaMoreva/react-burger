import { apiBurger } from "../../utils/api";
import { GET_BURGER_INGREDIENTS_SUCCESS } from "../constants/constants";
import { AppThunk, TIngredientType } from "../types/types";
import { IGetBurgerIngredientsSuccess } from "./interfaces";

const getBurgerIngredientsSuccess = (data: Array<TIngredientType>): IGetBurgerIngredientsSuccess => ({ type: GET_BURGER_INGREDIENTS_SUCCESS, payload: data })

export const getBurgerIngredients: AppThunk = () => {
    return (dispatch) =>
    apiBurger.getBurgerIngredients()
        .then(({ data }) => {
             dispatch(getBurgerIngredientsSuccess(data));
        })
        .catch((error) => {
            console.log(error)
        })
}
