import {
    burgerIngredientsReducer as reducer,
    initialState as state
} from './burger-ingredients';
import { getBurgerIngredientsSuccess } from '../actions/burger-ingredients';
import { ingredients } from '../../utils/test-constants';

describe('ingredients reducer test', () => {
    it('should handle get burger ingredients success', () => {
        expect(reducer(state, getBurgerIngredientsSuccess(ingredients)))
        .toEqual({
            burgerIngredients: ingredients
        })
    })
})
