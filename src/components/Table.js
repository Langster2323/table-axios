import React, { Component } from 'react';
import '../App.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ["Name", "Email", "City", "Company"]
    };
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
