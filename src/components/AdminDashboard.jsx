import React, { useState } from 'react';
import AdminActivity from './AdminActivity';

const AdminDashboard = () => {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={() => setShowActivity(true)}>View Activity</button>
      {showActivity && <AdminActivity />}
      {/* ...existing code... */}
    </div>
  );
};

export default AdminDashboard;