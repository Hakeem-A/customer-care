import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminActivity = () => {
  // Placeholder activity data
  const [activities] = useState([
    { id: 1, user: 'Customer Care', action: 'Created ticket', time: '2024-06-01 10:00' },
    { id: 2, user: 'Technician', action: 'Updated ticket progress', time: '2024-06-01 11:00' },
    { id: 3, user: 'Customer Care', action: 'Added client info', time: '2024-06-01 12:00' },
    { id: 4, user: 'Technician', action: 'Recorded time taken', time: '2024-06-01 13:00' },
  ]);

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Customer Care & Technician Activity</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map(activity => (
              <TableRow key={activity.id}>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminActivity;
