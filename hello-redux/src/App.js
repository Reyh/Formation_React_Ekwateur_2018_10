import React, { Component } from 'react';
import './App.css';
import ShowCount from './counters/ShowCount';
import ButtonCounter from './counters/ButtonCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonCounter />
        <ShowCount />
      </div>
    );
  }
}

export default App;
