import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterIncrement } from './actions';
import { selectCount } from './selectors';

class ButtonCounter extends Component {
  handleClick = () => {
    this.props.dispatch(counterIncrement(10));
  };

  render() {
    // this.props
    return (
      <button onClick={this.handleClick}>
        {this.props.counter}
      </button>
    )
  }
}
/*
function mapStateToProps(state) {
  return {
    count: state.count
  };
}*/
const mapStateToProps = (state) => ({counter: selectCount(state)});

export default connect(mapStateToProps)(ButtonCounter);