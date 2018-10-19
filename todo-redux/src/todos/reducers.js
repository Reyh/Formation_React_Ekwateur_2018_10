import { TODO_CHANGE, TODO_ADD } from "./constants";

export const newTodo = (state = '', { type, payload }) => {
  switch (type) {
    case TODO_CHANGE:
      return payload;
  }

  return state;
};

export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return [...state, payload];
  }

  return state;
};