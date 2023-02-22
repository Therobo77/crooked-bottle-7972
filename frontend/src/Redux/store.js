





import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
=======
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({ CartReducer });


import { reducer as productReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({ 
  productReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));