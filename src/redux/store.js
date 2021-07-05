import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { RootReducer } from "./reducer";
import Saga from "./saga-midleware";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
console.log('store', store.getState())
// then run the saga
sagaMiddleware.run(Saga);
// render the application
