import { combineReducers } from "redux";
import TestReducer from "./testReducer";
import Heroes from "./heroesReducer";
import CounterSlice from "./counterSlice";

const rootReducer = combineReducers({
  TestReducer,
  Heroes,
  CounterSlice,
});

export default rootReducer;
