import {
    SET_ACTIVE_TAB,
    SCROLL_INGREDIENTS
} from "../constants/constants"
import { TUnionAction } from "../actions/interfaces"

type TInitialState = {
    current: string,
    scroll: string
}

const initialState = {
    current: 'bun',
    scroll: 'bun'
}

export const scrollIngredientsReducer = (state = initialState, action: TUnionAction): TInitialState => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.payload
            }
        }
        case SCROLL_INGREDIENTS: {
            return {
                ...state,
                scroll: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
