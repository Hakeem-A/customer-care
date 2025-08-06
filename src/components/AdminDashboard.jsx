import React, { useState } from 'react';
import AdminActivity from './AdminActivity';
import AdminCRUD from './AdminCRUD';
import AdminTicketAnalytics from './AdminTicketAnalytics';

const AdminDashboard = () => {
  const [showActivity, setShowActivity] = useState(false);
  const [showCRUD, setShowCRUD] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={() => setShowActivity(true)}>View Activity</button>
      {showActivity && <AdminActivity />}
      <button onClick={() => setShowCRUD(true)}>CRUD Operations</button>
      {showCRUD && <AdminCRUD />}
      <button onClick={() => setShowAnalytics(true)}>Ticket Analytics</button>
      {showAnalytics && <AdminTicketAnalytics />}
      {/* ...existing code... */}
    </div>
  );
};

export default AdminDashboard;