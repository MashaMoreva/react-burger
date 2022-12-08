import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';
import { orderDetailsReducer } from './order-details';
import { scrollIngredientsReducer } from './burger-ingredients-scroll';
import { userRegistrationReducer } from './registration';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';
import { userAuthorizationReducer } from './authorization';
import { profileReducer } from './user';
import { wsReducer, wsUserReducer } from './websockets';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderDetailsReducer,
    scrollIngredients: scrollIngredientsReducer,
    registration: userRegistrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userAuthorization: userAuthorizationReducer,
    profile: profileReducer,
    webSocket: wsReducer,
    webSocketUser: wsUserReducer
  })
