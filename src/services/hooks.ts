import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { TUnionAction } from "./actions/interfaces";
import { RootState } from "./types/types";

// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TUnionAction>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

