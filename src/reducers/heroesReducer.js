import { Add_Data, Remove_Data } from "../actions";
import { createMock } from "./helper";

function Heroes(state = [], action) {
  switch (action.type) {
    case Add_Data:
      let heroes = [...state, createMock(action.id)];
      return heroes;
    case Remove_Data:
      let newHeroes = state.filter((r) => r.id !== action.id);
      return newHeroes;
    default:
      return state;
  }
}

export default Heroes;
