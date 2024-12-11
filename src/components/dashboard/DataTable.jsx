import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DataTable = () => {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [data] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john@example.com', 
      role: 'Admin', 
      status: 'active', 
      lastActive: '2h ago' 
    },
    { 
      id: 2, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      role: 'User', 
      status: 'inactive', 
      lastActive: '1d ago' 
    },
    // Add more initial data as needed
  ]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="sort-icon asc w-4 h-4" />
    ) : (
      <ChevronDown className="sort-icon w-4 h-4" />
    );
  };

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead className="data-table-header">
          <tr>
            <th className="sortable" onClick={() => handleSort('name')}>
              Name
              <SortIcon column="name" />
            </th>
            <th className="sortable" onClick={() => handleSort('email')}>
              Email
              <SortIcon column="email" />
            </th>
            <th className="sortable" onClick={() => handleSort('role')}>
              Role
              <SortIcon column="role" />
            </th>
            <th>Status</th>
            <th className="sortable" onClick={() => handleSort('lastActive')}>
              Last Active
              <SortIcon column="lastActive" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="data-table-row">
              <td data-label="Name">{row.name}</td>
              <td data-label="Email">{row.email}</td>
              <td data-label="Role">{row.role}</td>
              <td data-label="Status">
                <span className={`data-table-status data-table-status--${row.status}`}>
                  {row.status}
                </span>
              </td>
              <td data-label="Last Active">{row.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="empty-state">
          <div className="empty-state__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
          <p className="empty-state__text">No data available</p>
        </div>
      )}
    </div>
  );
};

export default DataTable;