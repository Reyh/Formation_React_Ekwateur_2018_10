import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.todo.text}
      </div>
    );
  }
}

export default TodoItem;