import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newTodo, todos } from './todos/reducers';
 
// Forme du state
/*
{
  newTodo: 'Acheter de',
  todos: [
    'Faire les courses',
    'Acheter du pain',
  ]
}
*/
 
 export const store = createStore(
  combineReducers({
    newTodo, // ne s'occupe que de state.newTodo (type string donc déjà muable)
    todos, // ne s'occupe que de state.todos (type array donc faire un changement immuable)
  }),
  // preloaded state à supprimer à la fin
  {
    newTodo: 'Acheter de',
    todos: [
      {text: 'Faire les courses', done: false, id: 1},
      {text: 'Acheter du pain', done: true, id: 1},
    ]
  },
  composeWithDevTools()
);