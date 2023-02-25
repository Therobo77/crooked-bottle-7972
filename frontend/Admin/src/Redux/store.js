import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { reducer as AppReducer } from "./AppReducer/reducer";

import thunk from "redux-thunk";

import { reducer as productReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));