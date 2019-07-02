import React, { Component } from 'react';
import '../App.css';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
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
      <TableRow users={users} />
    ) : (
      <div>No data yet</div>
    )
    return (
      <div className="App">
        <table>
          <TableHeader headers={this.state.headers} />
          {tableDataList}
        </table>
      </div>
    );
  }
}

export default Table;
