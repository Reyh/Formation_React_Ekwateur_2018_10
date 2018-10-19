import { COUNTER_INCREMENT } from './constants';

const initialState = 0;

export function count(previousCount = initialState, {type, payload}) {
  switch (type) {
    case COUNTER_INCREMENT :
      return previousCount + payload;
  }
  return previousCount;
}