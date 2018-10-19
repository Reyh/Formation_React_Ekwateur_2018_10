import React, { PureComponent } from 'react';
import TodoList from './todos/components/TodoList';
import TodoForm from './todos/components/TodoForm';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
