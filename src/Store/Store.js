import reduc from "../reducers/combineReducer";
import { createStore } from "@reduxjs/toolkit";

const store = createStore(
  reduc,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
