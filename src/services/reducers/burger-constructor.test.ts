import {
    burgerConstructorReducer as reducer,
    initialState as state
} from './burger-constructor';
import {
    setBun,
    addIngredient, deleteIngredient,
    moveIngredient, clearConstructor
} from '../actions/burger-constructor';
import {
    start, end,
    fluorescentBun, craterBun,
    ingredientSauce, ingredientMain
} from '../../utils/test-constants';

describe('burger-constructor reducer test', () => {
    it('should handle add bun', () => {
        expect(reducer(state, setBun(fluorescentBun)))
            .toEqual({
                ...state,
                bunsList: [fluorescentBun]
            })
    })
    it('should handle replace bun', () => {
        expect(reducer({ ...state, bunsList: [fluorescentBun] }, setBun(craterBun)))
            .toEqual({
                ...state,
                bunsList: [craterBun]
            })
    })
    it('should handle add ingredient', () => {
        expect(reducer(state, addIngredient(ingredientSauce)))
            .toEqual({
                ...state,
                mainList: [ingredientSauce]
            })
    })
    it('should handle add another ingredient', () => {
        expect(reducer({ ...state, mainList: [ingredientSauce] }, addIngredient(ingredientMain)))
            .toEqual({
                ...state,
                mainList: [ingredientSauce, ingredientMain]
            })
    })
    it('should handle move ingredient', () => {
        expect(reducer({ ...state, mainList: [ingredientSauce, ingredientSauce, ingredientMain] }, moveIngredient(start, end)))
            .toEqual({
                ...state,
                mainList: [ingredientSauce, ingredientMain, ingredientSauce]
            })
    })
    it('should handle delete ingredient', () => {
        expect(reducer({ ...state, mainList: [ingredientSauce, ingredientMain] }, deleteIngredient(ingredientMain)))
            .toEqual({
                ...state,
                mainList: [ingredientSauce]
            })
    })
    it('should return initial state if clear constructor', () => {
        expect(reducer({ ...state, bunsList: [fluorescentBun], mainList: [ingredientSauce, ingredientMain] }, clearConstructor()))
            .toEqual(state)
    })

})
