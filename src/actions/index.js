export const Add_Data = "Add_Data";
export const Remove_Data = "Remove_Data";
export const Increment_Counter = "Increment_Counter";
export const Decrement_Counter = "Decrement_Counter";

export function getDataByID(id) {
  const action = {
    type: Add_Data,
    id,
  };

  return action;
}

export function removeDataByID(id) {
  const action = {
    type: Remove_Data,
    id,
  };

  return action;
}

export function incrementCounter(value) {
  const action = {
    type: Increment_Counter,
    value,
  };

  return action;
}

export function decrementCounter(value) {
  const action = {
    type: Decrement_Counter,
    value,
  };

  return action;
}
