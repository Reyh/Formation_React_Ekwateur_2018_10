import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {count: 0};

function reducer(previousState = initialState, action) {
  if (action.type === 'COUNTER_INCREMENT') {
    return {...previousState, count: previousState.count + 1};
  }
  return previousState;
}

export const store = createStore(reducer, devToolsEnhancer());