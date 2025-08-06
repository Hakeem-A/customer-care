import React, { useState } from 'react';
import TechnicianLeaveDays from './TechnicianLeaveDays';
import { Box, Button } from '@mui/material';

const TechnicianDashboard = () => {
  const [showLeave, setShowLeave] = useState(false);

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => setShowLeave(true)} sx={{ mb: 2 }}>
        Leave Days
      </Button>
      {showLeave && <TechnicianLeaveDays />}
    </Box>
  );
};

export default TechnicianDashboard;