import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import PieChart from './PieChart';
import cnappData from '../data/cnappData.json'; // Assuming JSON data is stored locally

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const getChartData = () => {
    switch (selectedCategory) {
      case 'Vulnerabilities':
        return cnappData.CNAPPData.vulnerabilities;
      case 'Compliance':
        return cnappData.CNAPPData.compliance;
      case 'Workloads':
        return cnappData.CNAPPData.workloads;
      case 'Network Security':
        return cnappData.CNAPPData.networkSecurity;
      case 'Identity And Access Management':
        return cnappData.CNAPPData.identityAndAccessManagement;
      default:
        return [];
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <CategorySelector onSelectCategory={handleCategorySelect} />
      {selectedCategory && (
        <div className="mt-6">
          <PieChart data={getChartData()} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
