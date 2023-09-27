import { applyMiddleware, combineReducers, createStore } from "redux";

import auth from "./reducer/auth";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    authReducer:auth
})

export default createStore(rootReducer,applyMiddleware(thunk))