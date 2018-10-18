import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import ButtonCounter from './Clock';
import Clock from './ButtonCounter';
import UsersList from './UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Romain" />
        <Clock />
        <ButtonCounter />
        <UsersList />
      </div>
    );
  }
}

export default App;
