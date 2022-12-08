import { apiBurger } from "../../utils/api";
import { clearConstructor } from "./burger-constructor";
import { GET_ORDER_DETAILS_SUCCESS } from "../constants/constants";
import { IGetOrderDetailsSuccess } from "./interfaces";
import { AppThunk } from "../types/types";

export const getOrderSuccess = (number: string): IGetOrderDetailsSuccess => ({ type: GET_ORDER_DETAILS_SUCCESS, payload: number })

export const getOrderDetails: AppThunk = (idIngredientsList: string[]) => {
    return (dispatch) =>
        apiBurger.getOrderDetails(idIngredientsList)
            .then(({ order: { number } }) => {
                dispatch(getOrderSuccess(number));
            })
            .then(() => dispatch(clearConstructor()))
            .catch((error) => {
                console.log(error)
            })
}
  