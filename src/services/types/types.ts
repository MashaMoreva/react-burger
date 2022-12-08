import { ReactNode } from "react";
import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { store } from "../store";
import { TUnionAction } from '../actions/interfaces';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, never, TUnionAction>
>;

export type TIngredientType = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  id?: string,
}

export type TIngredientDetails = {
  image_large?: string,
  name?: string,
  calories?: number,
  proteins?: number,
  fat?: number,
  carbohydrates?: number
}

export type TUser = {
  success: boolean,
  user: {
    name: string,
    email: string,
  }
}

export type TLocation = {
  background: TLocation;
  hash: string;
  key: string;
  pathname: string;
  search: string;
  from: string;
  state: {
    background?: {
      pathname: string;
      search: string;
      hash: string;
      key: string;
    };
  };
}

export type TItem = {
  id: string,
  ingredient: TIngredientType,
  type: string,
}

export type TBurgerIngredientsItem = {
  ingredient: TIngredientType
}

export type TBurgerConstructorElement = {
  element: TIngredientType,
  id: string | undefined,
  index: number,
  deleteElement: (element: TIngredientType) => void
}

export type TBurgerIngredientsSet = {
  type: string
}

export type TModal = {
  onClose?: () => void,
  children: ReactNode
}

export type TModalOverlay = {
  onClose: () => void
}

export type TOrderRegistration = {
  handleOrderClick: () => void
}

export type TOrder = {
  ingredients: Array<string>,
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  name: string
}

export type TOrders = {
  success: boolean,
  orders: Array<TOrder>,
  total: number,
  totalToday: number
}

export type TOrderProps = {
  order: TOrder
}

export type TOptionsDateFormat = {
  timezone: 'Moscow',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: "short",
}
