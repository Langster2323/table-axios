import React from 'react';

const TableRow = ({ users, filteredUsers }) => {
  return (
    <tbody>
    {filteredUsers.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
        <td>{user.company.name}</td>
      </tr>
  )}
  </tbody>
  )
}

export default TableRow;
