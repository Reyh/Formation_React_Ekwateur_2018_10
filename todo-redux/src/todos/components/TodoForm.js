import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends PureComponent {
  handleSubmit = (event) => {
    // dispatch TODO_ADD
  }

  handleChange = (event) => {
    // dispatch TODO_CHANGE
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
  todoText: state.newTodo, // passer pas un selecteur (selectNewTodo)
});

export default connect(mapStateToProps)(TodoForm);