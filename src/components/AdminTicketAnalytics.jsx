import React from 'react';

const AdminTicketAnalytics = () => {
  // Placeholder analytics data
  const totalTickets = 120;
  const openTickets = 35;
  const closedTickets = 85;
  const avgResolutionTime = '2 days 4 hours';

  return (
    <div>
      <h2>Ticket Analytics</h2>
      <ul>
        <li><strong>Total Tickets:</strong> {totalTickets}</li>
        <li><strong>Open Tickets:</strong> {openTickets}</li>
        <li><strong>Closed Tickets:</strong> {closedTickets}</li>
        <li><strong>Average Resolution Time:</strong> {avgResolutionTime}</li>
      </ul>
      {/* You can add charts here using a library like Chart.js or Recharts */}
    </div>
  );
};

export default AdminTicketAnalytics;
