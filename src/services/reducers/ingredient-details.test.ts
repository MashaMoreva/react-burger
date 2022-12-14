import {
    ingredientDetailsReducer as reducer,
    initialState as state
} from './ingredient-details';
import { addIngredientDetails, deleteIngredientDetails } from '../actions/ingredient-details';
import { ingredientMain } from '../../utils/test-constants';

describe('ingredient-details reducer test', () => {
    it('should handle add ingredient details', () => {
        expect(reducer(state, addIngredientDetails(ingredientMain)))
            .toEqual({
                ingredientDetails: ingredientMain
            })
    })
    it('should return the initial state if delete ingredient details', () => {
        expect(reducer(state, deleteIngredientDetails()))
            .toEqual(state)
    })
})
