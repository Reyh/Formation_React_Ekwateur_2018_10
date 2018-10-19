import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Hello from './Hello';
import ButtonCounter from './Clock';
import Clock from './ButtonCounter';
import UsersAdd from './UsersAdd';
import UsersList from './UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Romain" />
        <Clock />
        <ButtonCounter />
        <UsersList />
        <UsersAdd/>
        <Dropdown items={['Romain', 'John', 'Steve']} selected="Steve" />
      </div>
    );
  }
}

export default App;
