import React from 'react';

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) =>
          <th key={idx}>{header}</th>
        )}
      </tr>
    </thead>
  )
};

export default TableHeader;
