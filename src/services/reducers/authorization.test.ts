import {
    userAuthorizationReducer as reducer,
    initialState as state
} from './authorization';
import { userAuthorizationSuccess } from '../actions/authorization';
import { userLogoutSuccess } from '../actions/logout';

describe('authorization reducer test', () => {
    it('should handle user authorization success', () => {
        expect(reducer(state, userAuthorizationSuccess(true)))
            .toEqual({
                authorization: true
            })
    })
    it('should handle user logout success', () => {
        expect(reducer(state, userLogoutSuccess(true)))
            .toEqual({
                authorization: false
            })
    })
})
