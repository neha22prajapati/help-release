import { Add_Data, Remove_Data } from "../actions";
import mock_json from "../data/mock.json";
import { createMock } from "./helper";

function TestReducer(state = mock_json, action) {
  switch (action.type) {
    case Add_Data:
      let mock = state.filter((data) => data.id !== action.id);
      return mock;
    case Remove_Data:
      let newMock = [...state, createMock(action.id)];
      return newMock;
    default:
      return state;
  }
}

export default TestReducer;
