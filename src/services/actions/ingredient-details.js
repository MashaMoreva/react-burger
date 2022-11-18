export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS';
export const DELETE_INGREDIENT_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export const addIgredientDetails = (ingredient) => ({ type: ADD_INGREDIENT_DETAILS, payload: ingredient })
export const deleteIgredientDetails = () => ({ type: DELETE_INGREDIENT_DETAILS })