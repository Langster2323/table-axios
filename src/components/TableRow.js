import React from 'react';

const TableRow = ({ users }) => {
  return (
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
  )
}

export default TableRow;
