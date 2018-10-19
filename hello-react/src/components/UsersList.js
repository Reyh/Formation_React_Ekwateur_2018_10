import React, { Component } from 'react';
import axios from 'axios';


class UsersList extends Component {

  state = {
    loading: false,
    users: [],
  }

  /*
  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.setState({
        loading: false,
        users: res.data,
      }));
  }
  */

  async componentDidMount() {
    this._source = axios.CancelToken.source();

    this.setState({ loading: true });
    const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
      cancelToken: this._source.token,
    });
    this.setState({
      loading: false,
      users: res.data,
    });
  }

  componentWillUnmount() {
    this._source.cancel();
  }

  render() {
    const usersDivs = this.state.users.map((user) => <div key={user.id}>{user.name}</div>);

    let loadingDiv;

    if (this.state.loading) {
      loadingDiv = <div>Loading...</div>;
    }

    return (
      <div>
        {loadingDiv} {/* if en JS */}
        {this.state.loading && <div>Loading...</div>} {/* if simple */}
        {this.state.loading ? <div>Loading...</div> : usersDivs} {/* if else */}
      </div>
    )
  }
}

export default UsersList;