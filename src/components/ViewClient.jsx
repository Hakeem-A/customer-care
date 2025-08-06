import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewClient = ({ client }) => {
  if (!client) return <Box>Select a client to view details.</Box>;

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2, mt: 2 }}>
      <Typography variant="h6" mb={2}>Client Information</Typography>
      <Typography><strong>Name:</strong> {client.name}</Typography>
      <Typography><strong>Contact:</strong> {client.contact}</Typography>
      <Typography><strong>Address:</strong> {client.address}</Typography>
      <Typography><strong>Email:</strong> {client.email}</Typography>
    </Box>
  );
};

export default ViewClient;
