import {
    forgotPasswordReducer as reducer,
    initialState as state
} from './forgot-password';
import { forgotPasswordSuccess } from '../actions/forgot-password';

describe('forgot-password reducer test', () => {
    it('should handle forgot-password success', () => {
        expect(reducer(state, forgotPasswordSuccess(true)))
            .toEqual({
                success: true
            })
    })
    it('should return the initial state if handle forgot-password failed', () => {
        expect(reducer(state, forgotPasswordSuccess(false)))
            .toEqual(state)
    })
})
