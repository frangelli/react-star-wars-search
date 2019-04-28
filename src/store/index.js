import { createStore, applyMiddleware, combineReducers } from "redux";
import { middleware as reduxPackMiddleware } from "redux-pack";

import searchReducer from "./reducers/search";

const reducer = combineReducers({
  searchReducer
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(reduxPackMiddleware)
);

export default store;
