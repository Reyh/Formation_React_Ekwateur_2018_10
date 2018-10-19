import React, { Component } from 'react';

class UsersAdd extends Component {

  /*
  name = React.createRef();

  // uncontrolled component
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: this.name.current.value,
      email: event.target.email.value,
    });
  };
  */

  state = {
    name: 'ABC',
    email: 'ABC@DEF.com',
  };

  // controlled component
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: this.state.name,
      email: this.state.email,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          {/*Name: <input name="name" ref={this.name}/>*/}
          Name: <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div>
          Email: <input name="email" value={this.state.email} onChange={this.handleChange}/>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default UsersAdd;