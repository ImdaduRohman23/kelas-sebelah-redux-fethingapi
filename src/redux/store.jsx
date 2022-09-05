import { createStore } from "redux";
import rootReducers from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;