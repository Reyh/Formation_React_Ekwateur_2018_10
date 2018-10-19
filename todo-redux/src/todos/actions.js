import { TODO_CHANGE, TODO_ADD } from "./constants";

export const todoChange = (payload = '') => ({
  type: TODO_CHANGE,
  payload,
});

export const todoAdd = (todoText = '') => ({
  type: TODO_ADD,
  payload: {
    text: todoText,
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    done: false,
  },
});