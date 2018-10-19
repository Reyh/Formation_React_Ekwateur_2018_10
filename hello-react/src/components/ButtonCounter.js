import React, { Component } from 'react';

class ButtonCounter extends Component {

  // ESNext Stage 3 (pas encore normé)
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    // this.props
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}

export default ButtonCounter;