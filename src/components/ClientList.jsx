import React, { useState } from 'react';
import AddClient from './AddClient';
import ViewClient from './ViewClient';

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
    <div>
      <button onClick={() => setShowAdd(true)}>Add Client</button>
      {showAdd && (
        <AddClient onClientAdded={handleClientAdded} />
      )}
      <ul>
        {clients.map((client, idx) => (
          <li key={idx}>
            <button onClick={() => setSelectedClient(client)}>{client.name}</button>
          </li>
        ))}
      </ul>
      <ViewClient client={selectedClient} />
    </div>
  );
};

export default ClientList;