import React, { useState } from 'react';
import InstallationsRouters from './InstallationsRouters';

const Dashboard = () => {
  const [showInstallations, setShowInstallations] = useState(false);

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={() => setShowInstallations(true)}>Installations & Routers</button>
      {showInstallations && <InstallationsRouters />}
      {/* ...existing code... */}
    </div>
  );
};

export default Dashboard;