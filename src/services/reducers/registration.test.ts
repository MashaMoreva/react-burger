import {
    userRegistrationReducer as reducer,
    initialState as state
} from './registration';
import { userRegistrationSuccess } from '../actions/registration';
import { user } from '../../utils/test-constants';

describe('registration reducer test', () => {
    it('should handle registration success', () => {
        expect(reducer(state, userRegistrationSuccess({ success: true, user: user })))
            .toEqual({
                success: true,
                user: user
            })
    })
    it('should return the initial state if registration failed', () => {
        expect(reducer(state, userRegistrationSuccess({ success: false, user: { email: '', name: '' } })))
            .toEqual(state)
    })
})
