import React, { useState } from 'react';

const AdminActivity = () => {
  // Placeholder activity data
  const [activities] = useState([
    { id: 1, user: 'Customer Care', action: 'Created ticket', time: '2024-06-01 10:00' },
    { id: 2, user: 'Technician', action: 'Updated ticket progress', time: '2024-06-01 11:00' },
    { id: 3, user: 'Customer Care', action: 'Added client info', time: '2024-06-01 12:00' },
    { id: 4, user: 'Technician', action: 'Recorded time taken', time: '2024-06-01 13:00' },
  ]);

  return (
    <div>
      <h2>Customer Care & Technician Activity</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.user}</td>
              <td>{activity.action}</td>
              <td>{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminActivity;
