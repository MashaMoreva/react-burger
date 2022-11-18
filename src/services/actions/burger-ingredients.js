import { apiBurger } from "../../utils/api";

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

const getBurgerIngredientsSuccess = (data) => ({ type: GET_BURGER_INGREDIENTS_SUCCESS, payload: data })

export function getBurgerIngredients() {
    return (dispatch) =>
    apiBurger.getBurgerIngredients()
        .then(({ data }) => {
             dispatch(getBurgerIngredientsSuccess(data));
        })
        .catch((error) => {
            console.log(error)
        })
}
