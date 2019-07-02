import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ["Name", "Email", "City", "Company"],
      tableData: [ ]
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        this.setState({
          tableData: res.data
        });
      });
  }
  render() {
    const { tableData } = this.state
    const tableDataList = tableData.length ? (
      tableData.map(tableRow => {
        return (
          <div key={tableRow.id}>
            <tbody>
              <tr>
                <td>{tableRow.name}</td>
                <td>{tableRow.email}</td>
                <td>{tableRow.city}</td>
                <td>{tableRow.company}</td>
              </tr>
            </tbody>
          </div>
        )
      })
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
