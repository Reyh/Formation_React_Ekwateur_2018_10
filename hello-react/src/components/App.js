import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Hello from './Hello';
import ButtonCounter from './Clock';
import Clock from './ButtonCounter';
import UsersAdd from './UsersAdd';
import UsersList from './UsersList';

class App extends Component {
  state = {
    prenom: 'Steve',
    prenoms: ['Romain', 'John', 'Steve'],
    inputValue: '',
  }
  handleSelected = (prenom) => {
    this.setState({
      prenom,
    });
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }
  handleClick = () => {
    /* changement muable
    this.state.prenoms.push(this.state.inputValue);
    this.forceUpdate();
    */
    /* changement immuable */
    this.setState({
      prenoms: [...this.state.prenoms, this.state.inputValue],
    });
  }
  render() {
    return (
      <div className="App">
        <Hello name={this.state.prenom} />
        <Clock show={false} />
        <ButtonCounter />
        <UsersList />
        <UsersAdd/>
        <input value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>+</button>
        <Dropdown items={this.state.prenoms} selected={this.state.prenom} onSelected={this.handleSelected} />
      </div>
    );
  }
}

export default App;
