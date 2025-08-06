import React from 'react';

const ViewClient = ({ client }) => {
  if (!client) return <div>Select a client to view details.</div>;

  return (
    <div>
      <h2>Client Information</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Contact:</strong> {client.contact}</p>
      <p><strong>Address:</strong> {client.address}</p>
      <p><strong>Email:</strong> {client.email}</p>
    </div>
  );
};

export default ViewClient;
