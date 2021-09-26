import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../client/reducers";
import { createStore } from "redux";
const thunkMiddleWare = applyMiddleware(thunk, logger);
let enhancers = thunkMiddleWare;

const appStore = (state = {}) => {
  let store = null;
  store = createStore(reducers, state, enhancers);
  return store;
};

export default appStore;
