import React from 'react';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">CNAPP Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
