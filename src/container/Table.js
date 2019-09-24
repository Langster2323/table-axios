import React, { Component } from 'react';
import '../App.css';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import { getUsers } from '../reducers/index';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ["Name", "Email", "City", "Company"],
      search: ""
    };
  }
  componentDidMount() {
    this.props.loadUser()
  }
  updateSearch = e => {
    this.setState({search: e.target.value})
  }
  render() {
    console.log(this.props)
    const { users, search } = this.props
    let filteredUsers = users.filter(
      (user) => {
        return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== 1;
      }
    );
    const tableDataList = users.length ? (
      <TableRow users={users} filteredUsers={filteredUsers} />
    ) : (
      <tbody><tr><td>No data yet</td></tr></tbody>
    )
    return (
      <div className="App">
      <div>
        <input type="text" value={this.state.search} onChange={this.updateSearch} />
      </div>
        <table className="table is-hoverable is-striped is-fullwidth">
          <TableHeader headers={this.state.headers} />
          {tableDataList}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state)
});

export default connect (mapStateToProps, actionCreators)(Table);
