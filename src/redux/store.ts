import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const configureStore = () =>
  createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore();

sagaMiddleware.run(rootSaga);

export { store };
