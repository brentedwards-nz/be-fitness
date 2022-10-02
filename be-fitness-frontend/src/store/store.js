import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import counterReducer from "./reducers/counterReducer";
import advancedCounterReducer from "../features/advancedCounter/advancedCounterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  advancedCounter: advancedCounterReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
