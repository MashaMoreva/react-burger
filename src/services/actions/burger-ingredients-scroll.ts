import {
    SET_ACTIVE_TAB,
    SCROLL_INGREDIENTS
} from "../constants/constants";
import { IScrollIngredients, ISetActiveTab } from "./interfaces";

export const setActiveTab = (value: string): ISetActiveTab => ({ type: SET_ACTIVE_TAB, payload: value });
export const scrollIngredients = (value: string): IScrollIngredients => ({ type: SCROLL_INGREDIENTS, payload: value });
