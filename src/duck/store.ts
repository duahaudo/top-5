import {applyMiddleware, createStore}  from "redux";
import { createLogger } from 'redux-logger';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducers from "./reducer";

const logger = createLogger({
  level: 'info',
  collapsed: true,
  diff: true
});

const customMiddleWare = store => next => action => {
  // console.log("Middleware triggered:", action);
  next(action);
}


let middlewares = [promise, thunk, customMiddleWare];

const middleware = applyMiddleware(...middlewares);

export default createStore(reducers, middleware);
