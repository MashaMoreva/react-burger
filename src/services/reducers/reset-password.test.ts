import {
    resetPasswordReducer as reducer,
    initialState as state
} from './reset-password';
import { resetPasswordSuccess } from '../actions/reset-password';

describe('reset-password reducer test', () => {
    it('should handle reset-password success', () => {
        expect(reducer(state, resetPasswordSuccess(true)))
            .toEqual({
                success: true
            })
    })
    it('should return the initial state if handle reset-password failed', () => {
        expect(reducer(state, resetPasswordSuccess(false)))
            .toEqual(state)
    })
})
