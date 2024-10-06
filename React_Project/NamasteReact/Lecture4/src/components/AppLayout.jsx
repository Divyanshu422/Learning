import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      {/* Implementing the condition on the application so that children route is rendered */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;