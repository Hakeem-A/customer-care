import React, { useState } from 'react';
import InstallationsRouters from './InstallationsRouters';
import { Box, Button } from '@mui/material';

const Dashboard = () => {
  const [showInstallations, setShowInstallations] = useState(false);

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => setShowInstallations(true)} sx={{ mb: 2 }}>
        Installations & Routers
      </Button>
      {showInstallations && <InstallationsRouters />}
    </Box>
  );
};

export default Dashboard;