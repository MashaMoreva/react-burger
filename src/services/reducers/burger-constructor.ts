import {
    SET_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR
} from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TIngredientType } from "../types/types";

type TInitialState = {
    mainList: Array<TIngredientType>,
    bunsList: Array<TIngredientType>
}

const initialState: TInitialState = {
    mainList: [], // между булок в конструкторе
    bunsList: [] // булки в конструкторе
}

export const burgerConstructorReducer = (state = initialState, action: TUnionAction): TInitialState => {
    switch (action.type) {
        case SET_BUN: {
            return {
                ...state,
                bunsList: state.bunsList.find((item) => item._id === action.payload._id) ? [...state.bunsList] : [action.payload]
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                mainList: [...state.mainList, action.payload]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                mainList: state.mainList.filter((item) => item.id !== action.payload.id)
            }
        }
        case MOVE_INGREDIENT: {
            let res = [];
            const { start, end } = action.payload;

            if (start === end) {
                return state
            } else if (start > end) {
                res = [
                    ...state.mainList.slice(0, end),
                    state.mainList[start],
                    ...state.mainList.slice(end, start),
                    ...state.mainList.slice(start + 1),
                ];
            } else { // start < end
                res = [
                    ...state.mainList.slice(0, start),
                    ...state.mainList.slice(start + 1, end + 1),
                    state.mainList[start],
                    ...state.mainList.slice(end + 1)
                ]
            }
            return {
                ...state,
                mainList: res
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                mainList: [],
                bunsList: []
            }
        }
        default: {
            return state;
        }
    }
}
