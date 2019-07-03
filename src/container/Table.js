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
    };
  }
  componentDidMount() {
    this.props.loadUser()
  }
  render() {
    console.log(this.props)
    const { users } = this.props
    const tableDataList = users.length ? (
      <TableRow users={users} />
    ) : (
      <tbody><tr><td>No data yet</td></tr></tbody>
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

const mapStateToProps = state => ({
  users: getUsers(state)
});

export default connect (mapStateToProps, actionCreators)(Table);
