import React, { useState } from 'react';
import AddClient from './AddClient';
import ViewClient from './ViewClient';
import { Box, Button, List, ListItem, Typography } from '@mui/material';

const ClientList = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientAdded = (newClient) => {
    // Optionally refresh client list here
    setShowAdd(false);
  };

  // Example client data, replace with your actual client list
  const clients = [
    { name: 'John Doe', contact: '123456789', address: '123 Main St', email: 'john@example.com' },
    { name: 'Jane Smith', contact: '987654321', address: '456 Elm St', email: 'jane@example.com' },
  ];

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => setShowAdd(true)} sx={{ mb: 2 }}>
        Add Client
      </Button>
      {showAdd && (
        <AddClient onClientAdded={handleClientAdded} />
      )}
      <Typography variant="h6" mt={2}>Clients</Typography>
      <List>
        {clients.map((client, idx) => (
          <ListItem key={idx} disablePadding>
            <Button onClick={() => setSelectedClient(client)} fullWidth sx={{ justifyContent: 'flex-start' }}>
              {client.name}
            </Button>
          </ListItem>
        ))}
      </List>
      <ViewClient client={selectedClient} />
    </Box>
  );
};

export default ClientList;