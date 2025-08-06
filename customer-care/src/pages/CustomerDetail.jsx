import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CustomerDetail = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper elevation={3} sx={{ p: 4, minWidth: 350 }}>
        <Typography variant="h4" align="center" mb={2} fontWeight={700}>
          Customer Detail
        </Typography>
        <Typography align="center" color="text.secondary">
          This page is under construction.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomerDetail;