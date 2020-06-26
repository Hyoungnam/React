import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  { composeWithDevTools } from 'redux-devtools-extension';
import { createInjectorsEnhancer } from "redux-injectors";
import defaultReducer from "redux/defaultReducer";

const staticReducers = {
  default: defaultReducer,
};

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export default () => {
  // let composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;
  // if (process.env.NODE_ENV !== "production" && typeof window === "object") {
  //   /* eslint-disable no-underscore-dangle */
  //   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  // }

  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });

  const store = createStore(
    createReducer(),
    composeWithDevTools(applyMiddleware(sagaMiddleware), injectEnhancer)
  );

  store.asyncReducers = {};

  return store;
};