import {
    profileReducer as reducer,
    initialState as state
} from './user';
import { getUserSuccess, updateUserSuccess } from '../actions/user';
import { payload } from '../../utils/test-constants';

describe('profile reducer test', () => {
    it('should handle get user info', () => {
        expect(reducer(state, getUserSuccess(payload)))
            .toEqual({
                success: true,
                user: payload.user
            })
    })
    it('should handle update user info', () => {
        expect(reducer(state, updateUserSuccess(payload)))
            .toEqual({
                success: true,
                user: payload.user
            })
    })
})

