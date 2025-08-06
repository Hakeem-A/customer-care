import React, { useState } from 'react';
import CreateTicket from './CreateTicket';
import ViewClient from './ViewClient';
import { Box, Button, List, ListItem, Typography } from '@mui/material';

const TicketList = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [clients, setClients] = useState([]); // Assuming you have client data
  const [selectedClient, setSelectedClient] = useState(null);

  const handleTicketCreated = (newTicket) => {
    // Optionally refresh ticket list here
    setShowCreate(false);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Button variant="contained" color="primary" onClick={() => setShowCreate(true)} sx={{ mb: 2 }}>
        Create Ticket
      </Button>
      {showCreate && (
        <CreateTicket onTicketCreated={handleTicketCreated} />
      )}
      <Typography variant="h6" mt={2}>Clients</Typography>
      <List>
        {clients.map((client, idx) => (
          <ListItem key={idx}>
            <Button variant="outlined" onClick={() => setSelectedClient(client)}>{client.name}</Button>
          </ListItem>
        ))}
      </List>
      <ViewClient client={selectedClient} />
    </Box>
  );
};

export default TicketList;