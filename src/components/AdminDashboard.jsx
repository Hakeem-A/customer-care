import React, { useState } from 'react';
import AdminActivity from './AdminActivity';
import AdminCRUD from './AdminCRUD';

const AdminDashboard = () => {
  const [showActivity, setShowActivity] = useState(false);
  const [showCRUD, setShowCRUD] = useState(false);

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={() => setShowActivity(true)}>View Activity</button>
      {showActivity && <AdminActivity />}
      <button onClick={() => setShowCRUD(true)}>CRUD Operations</button>
      {showCRUD && <AdminCRUD />}
      {/* ...existing code... */}
    </div>
  );
};

export default AdminDashboard;