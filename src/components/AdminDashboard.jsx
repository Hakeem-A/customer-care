import React, { useState } from 'react';
import AdminActivity from './AdminActivity';
import AdminCRUD from './AdminCRUD';
import AdminTicketAnalytics from './AdminTicketAnalytics';
import { Box, Button, Stack } from '@mui/material';

const AdminDashboard = () => {
  const [showActivity, setShowActivity] = useState(false);
  const [showCRUD, setShowCRUD] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <Box>
      <Stack direction="row" spacing={2} mb={2}>
        <Button variant="contained" color="primary" onClick={() => setShowActivity(true)}>
          View Activity
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setShowCRUD(true)}>
          CRUD Operations
        </Button>
        <Button variant="contained" onClick={() => setShowAnalytics(true)}>
          Ticket Analytics
        </Button>
      </Stack>
      {showActivity && <AdminActivity />}
      {showCRUD && <AdminCRUD />}
      {showAnalytics && <AdminTicketAnalytics />}
    </Box>
  );
};

export default AdminDashboard;