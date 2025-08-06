import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const AdminTicketAnalytics = () => {
  // Placeholder analytics data
  const totalTickets = 120;
  const openTickets = 35;
  const closedTickets = 85;
  const avgResolutionTime = '2 days 4 hours';

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Ticket Analytics</Typography>
      <List>
        <ListItem><strong>Total Tickets:</strong> {totalTickets}</ListItem>
        <ListItem><strong>Open Tickets:</strong> {openTickets}</ListItem>
        <ListItem><strong>Closed Tickets:</strong> {closedTickets}</ListItem>
        <ListItem><strong>Average Resolution Time:</strong> {avgResolutionTime}</ListItem>
      </List>
      {/* You can add charts here using a library like Chart.js or Recharts */}
    </Box>
  );
};

export default AdminTicketAnalytics;
