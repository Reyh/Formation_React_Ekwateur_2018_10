import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends PureComponent {
  handleSubmit = (event, todoText) => {
    event.preventDefault();
    this.props.dispatch(todoAdd(todoText));
  }

  handleChange = (event) => {
    this.props.dispatch(todoChange(event.target.value));
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event, this.props.todoText)}>
        <input value={this.props.todoText} onChange={this.handleChange}/>
        <button>+</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todoText: selectNewTodo(state), // passer pas un selecteur (selectNewTodo)
});

export default connect(mapStateToProps)(TodoForm);