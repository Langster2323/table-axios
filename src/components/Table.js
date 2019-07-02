import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ["Name", "Email", "City", "Company"],
      users: [ ]
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data.slice(0, 4)
        });
      });
  }
  render() {
    const { users } = this.state
    const tableDataList = users.length ? (
      <tbody>
      {users.map(user =>
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
        </tr>
    )}
    </tbody>
    ) : (
      <div>No data yet</div>
    )
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              {this.state.headers.map((header) =>
                <th>{header}</th>
              )}
            </tr>
          </thead>
          {tableDataList}
        </table>
      </div>
    );
  }
}

export default Table;
