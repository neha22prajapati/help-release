import { Increment_Counter, Decrement_Counter } from "../actions";

const intialValue = 0;

function CounterSlice(state = intialValue, action) {
  switch (action.type) {
    case Increment_Counter:
      let increment = (state += 1);
      return increment;
    case Decrement_Counter:
      let decrement = (state -= 1);
      return decrement;
    default:
      return state;
  }
}

export default CounterSlice;
