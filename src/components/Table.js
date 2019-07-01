import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ["Name", "Email", "City", "Company"],
      data: []
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
      })
  }
  render() {
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
        </table>
      </div>
    );
  }
}

export default Table;
