import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { selectTodos } from '../selectors';

class TodoList extends PureComponent {

  render() {
    const { todos = [] } = this.props;

    return todos.map((t) => <TodoItem key={t.id} todo={t} />);
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos, // passer par un selecteur (selectTodos)
});

export default connect(mapStateToProps)(TodoList);