import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonCounter extends Component {
  handleClick = () => {
    this.props.dispatch({type: 'COUNTER_INCREMENT'});
  };

  render() {
    // this.props
    return (
      <button onClick={this.handleClick}>
        {this.props.count}
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
const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps)(ButtonCounter);