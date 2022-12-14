import {
    initialState, wsReducer,
    initialStateUser, wsUserReducer
} from './websockets';
import {
    wsConnectionSuccess,
    wsConnectionError,
    wsConnectionClosed,
    wsGetOrderds,
    wsConnectionSuccessUser,
    wsConnectionErrorUser,
    wsConnectionClosedUser,
    wsGetOrderdsUser
} from '../actions/websockets';
import { allOrders, userOrders } from '../../utils/test-constants';

describe('websockets reducer test', () => {
    it('should handle ws connection success', () => {
        expect(wsReducer(initialState, wsConnectionSuccess()))
            .toEqual({
                ...initialState,
                wsConnection: true
            })
    })
    it('should handle ws connection error', () => {
        expect(wsReducer(initialState, wsConnectionError()))
            .toEqual({
                ...initialState,
                wsConnection: false
            })
    })
    it('should return the initial state if ws connection closed', () => {
        expect(wsReducer(initialState, wsConnectionClosed()))
            .toEqual(initialState)
    })
    it('should handle ws get all orders', () => {
        expect(wsReducer(initialState, wsGetOrderds(allOrders)))
            .toEqual({
                ...initialState,
                orders: allOrders.orders,
                total: allOrders.total,
                totalToday: allOrders.totalToday
            })
    })

})

describe('user websockets reducer test', () => {
    it('should handle user ws connection success', () => {
        expect(wsUserReducer(initialStateUser, wsConnectionSuccessUser()))
            .toEqual({
                ...initialStateUser,
                wsConnection: true
            })
    })
    it('should handle user ws connection error', () => {
        expect(wsUserReducer(initialStateUser, wsConnectionErrorUser()))
            .toEqual({
                ...initialStateUser,
                wsConnection: false
            })
    })
    it('should return the initial state user if ws connection closed', () => {
        expect(wsUserReducer(initialStateUser, wsConnectionClosedUser()))
            .toEqual(initialStateUser)
    })
    it('should handle ws get user orders', () => {
        expect(wsUserReducer(initialStateUser, wsGetOrderdsUser(userOrders)))
            .toEqual({
                ...initialStateUser,
                orders: userOrders.orders,
            })
    })

})
