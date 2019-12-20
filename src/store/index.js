import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import { createLogger } from "redux-logger";

import { rootReducer } from "./reducers";
import { loadState, saveState } from "./localStorage";
import initialState from "./initialState";

const configureStore = () => {
  const savedState = loadState();
  const middlewares = [thunkMiddleware, apiMiddleware];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ("__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    { ...initialState, ...savedState },
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(() => {
    saveState({
      players: {
        ...initialState.players,
        saved: store.getState().players.saved
      }
    });
  });

  return store;
};

export default configureStore();
