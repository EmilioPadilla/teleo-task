import React from 'react';
import './Table.css'; // Import your CSS file for styling

const Table = () => {
  const tableData = [
    { date: '2023-08-13', snapshot: 'image_url_1.jpg' },
    { date: '2023-08-14', snapshot: 'image_url_2.jpg' },
    // Add more data entries as needed
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {/* Change the column size of the first two TH to be 40% each */}
          <th className='date-column'>Date</th>
          <th className='snapshot-column'>Snapshot</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>
              <img src={entry.snapshot} alt={`Snapshot on ${entry.date}`} />
            </td>
            <td>
              <button className="go-button">GO</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
