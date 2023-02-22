import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ CartReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
