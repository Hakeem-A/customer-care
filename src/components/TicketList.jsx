import React, { useState } from 'react';
import CreateTicket from './CreateTicket';

const TicketList = () => {
  const [showCreate, setShowCreate] = useState(false);

  const handleTicketCreated = (newTicket) => {
    // Optionally refresh ticket list here
    setShowCreate(false);
  };

  return (
    <div>
      <button onClick={() => setShowCreate(true)}>Create Ticket</button>
      {showCreate && (
        <CreateTicket onTicketCreated={handleTicketCreated} />
      )}
    </div>
  );
};

export default TicketList;