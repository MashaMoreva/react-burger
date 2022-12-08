import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { compose, createStore, applyMiddleware } from 'redux';
import { wsUrl } from "../utils/constants";
import { wsActions, wsActionsUser } from "./actions/websockets";
import { socketMiddleware } from "./middleware/socket-middleware";
import { getCookie } from "../utils/сookies";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(() => wsUrl + '/all', wsActions),
    socketMiddleware(() => wsUrl + `?token=${getCookie('access')}`, wsActionsUser),
  )
);
export const store = createStore(rootReducer, enhancer);


