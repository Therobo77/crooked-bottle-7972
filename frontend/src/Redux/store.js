import { legacy_createStore, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";


const store = legacy_createStore(AppReducer, applyMiddleware(thunk));

export { store };
