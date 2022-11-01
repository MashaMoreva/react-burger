import { apiBurger } from "../../utils/api";
import { clearConstructor } from "./burger-constructor";

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_DETAILS_ERROR = 'GET_ORDER_ERROR';

export const getOrderSuccess = (number) => ({ type: GET_ORDER_DETAILS_SUCCESS, payload: number })

export function getOrderDetails(idIngredientsList) {
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
  