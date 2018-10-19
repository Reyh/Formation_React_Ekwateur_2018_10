import { COUNTER_INCREMENT } from "./constants";

export const counterIncrement = (payload = 1) => ({
  type: COUNTER_INCREMENT,
  payload
});

/*
function counterIncrement() {
  return {
    type: COUNTER_INCREMENT,
  };
}
*/