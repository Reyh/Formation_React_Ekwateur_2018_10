import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { count } from './counters/reducers';

export const store = createStore(
  combineReducers({
    count, // count: count
  }), 
  devToolsEnhancer(),
);